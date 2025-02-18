// app/modules/messages/countContentTypes.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    michal = argPlu;
    entity = 0;
    tangon = michal[entity];
    michal = argBar;
    entity = undefined;
    report = michal.bind(entity)(tangon);
    tangon = report.fileFinishedImporting;
    michal = 'modules/messages/countContentTypes.tsx';
    michal = tangon.bind(report)(michal);
    michal = function(argFoo) { // Original name: countContentTypes
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = entity.content;
            oscard = 0;
            zuuluu = '';
            michal = 0;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 23; continue _fun00001 }
 20:
            michal = 1;
 23:
            report = entity.activity;
            tangon = null;
            zuuluu = michal;
            if(!(tangon != report)) { _fun00002_ip = 41; continue _fun00001 }
 38:
            zuuluu = michal + 1;
 41:
            michal = entity.stickers;
            michal = michal.length;
            report = michal > oscard;
            if(report) { _fun00002_ip = 74; continue _fun00001 }
 59:
            michal = entity.stickerItems;
            michal = michal.length;
            report = michal > oscard;
 74:
            michal = zuuluu;
            if(!report) { _fun00002_ip = 83; continue _fun00001 }
 80:
            michal = zuuluu + 1;
 83:
            zuuluu = entity.components;
            report = zuuluu.length;
            zuuluu = michal;
            if(!(report > oscard)) { _fun00002_ip = 104; continue _fun00001 }
 101:
            zuuluu = michal + 1;
 104:
            michal = entity.messageSnapshots;
            report = michal.length;
            michal = zuuluu;
            if(!(report > oscard)) { _fun00002_ip = 125; continue _fun00001 }
 122:
            michal = zuuluu + 1;
 125:
            zuuluu = entity.poll;
            entity = michal;
            if(!(tangon != zuuluu)) { _fun00002_ip = 141; continue _fun00001 }
 138:
            entity = michal + 1;
 141:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();