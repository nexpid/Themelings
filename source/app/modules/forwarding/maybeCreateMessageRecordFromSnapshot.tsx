// app/modules/forwarding/maybeCreateMessageRecordFromSnapshot.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forwarding/maybeCreateMessageRecordFromSnapshot.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: maybeCreateMessageRecordFromSnapshot
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            golfie = argBar;
            oscard = null;
            if(!(oscard == golfie)) { _fun00002_ip = 60; continue _fun00001 }
 12:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            michal = michal.bind(entity)(tangon);
            if(!michal) { _fun00002_ip = 57; continue _fun00001 }
 45:
            zuuluu = tangon.messageSnapshots;
            michal = 0;
            entity = zuuluu[michal];
 57:
            golfie = entity;
 60:
            entity = tangon;
            if(!(oscard != golfie)) { _fun00002_ip = 322; continue _fun00001 }
 70:
            zuuluu = tangon.merge;
            michal = {};
            report = golfie.message;
            report = report.content;
            michal['content'] = report;
            report = golfie.message;
            report = report.attachments;
            michal['attachments'] = report;
            report = golfie.message;
            report = report.embeds;
            michal['embeds'] = report;
            report = golfie.message;
            report = report.flags;
            michal['flags'] = report;
            report = golfie.message;
            report = report.components;
            michal['components'] = report;
            michal['editedTimestamp'] = oscard;
            report = golfie.message;
            report = report.timestamp;
            michal['timestamp'] = report;
            report = golfie.message;
            report = report.codedLinks;
            michal['codedLinks'] = report;
            report = new Array(0);
            michal['reactions'] = report;
            report = new Array(0);
            michal['messageSnapshots'] = report;
            report = golfie.message;
            report = report.stickers;
            michal['stickers'] = report;
            report = golfie.message;
            report = report.stickerItems;
            michal['stickerItems'] = report;
            michal['customRenderedContent'] = oscard;
            report = golfie.moderatorReport;
            if(!(oscard == report)) { _fun00002_ip = 264; continue _fun00001 }
 256:
            report = tangon.author;
            _fun00002_ip = 312; continue _fun00001;
 264:
            option = _closure1_slot2;
            oscard = {};
            golfie = golfie.moderatorReport;
            golfie = golfie.reported_user_id;
            oscard['id'] = golfie;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            offset = golfie;
            verify = oscard;
            oscard = new offset[option](verify, option);
            report = oscard instanceof Object ? oscard : golfie;
 312:
            michal['author'] = report;
            entity = zuuluu.bind(tangon)(michal);
 322:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();