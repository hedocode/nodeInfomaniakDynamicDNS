const axios = require('axios');
const fs = require('fs');
const IpMonitor = require('ip-monitor');
const credentials = require('./credentials.json');

const ipMonitor = new IpMonitor();

const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

const logsFilePath = 'logs.txt';

ipMonitor.on('change',
    (prevIp, newIp) => {
        let date = new Date();
        let dateString = daysOfWeek[date.getDay()] + " " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
        let hourString = date.getHours() + "h" + date.getMinutes();
        let dateHourString = dateString + ' à ' + hourString;
        axios.post(`https://${credentials.login}:${credentials.password}@infomaniak.com/nic/update`, {
            hostname: credentials.hostname,
        }).then(
            (res) => {
                if (!res.data.includes("nochg")) {
                    fs.appendFile(
                        logsFilePath,
                        'Changement d\'IP le ' + dateHourString + ' - Nouvelle IP : ' + newIP + "\r\n",
                        err => {
                            if (err) console.log("ERROR : %o", err);
                        }
                    );
                } else {
                    fs.appendFile(
                        logsFilePath,
                        "Appel réussi sans changement d'IP le " + dateHourString + " - IP : " + newIp + "\r\n",
                        err => {
                            if (err) console.log("ERROR : %o", err);
                        }
                    );
                }
            }
        ).catch(
            (error) => {
                console.log('ERREUR CRON le ' + dateString + " à " + hourString + ' : ' + error);
            }
        );
    }
);

ipMonitor.on('error', (error) => {
    console.error(error);
});

ipMonitor.start();
console.log('CRON Executé avec succès - fichier de logs : %o', logsFilePath);