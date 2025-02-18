// app/modules/activities/panel/native/ActivityPanelContainer.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = golfie.memo;
    michal = function() { // Original name: ActivityPanelContainer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 5;
            entity = tangon[entity];
            report = undefined;
            golfie = zuuluu.bind(report)(entity);
            oscard = golfie.useStateFromStores;
            entity = _closure1_slot5;
            tangon = new Array(3);
            tangon[0] = entity;
            entity = _closure1_slot3;
            tangon[1] = entity;
            entity = _closure1_slot4;
            tangon[2] = entity;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure1_slot5;
                    entity = michal.getConnectedActivityChannelId;
                    tangon = entity.bind(michal)();
                    report = null;
                    if(!(report != tangon)) { _fun00004_ip = 142; continue _fun00003 }
 23:
                    michal = _closure1_slot3;
                    entity = michal.getChannel;
                    golfie = entity.bind(michal)(tangon);
                    entity = report == golfie;
                    michal = undefined;
                    oscard = undefined;
                    if(entity) { _fun00004_ip = 53; continue _fun00003 }
 48:
                    oscard = golfie.type;
 53:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    entity = 6;
                    entity = verify[entity];
                    entity = option.bind(michal)(entity);
                    entity = entity.ChannelTypes;
                    entity = entity.GUILD_TEXT;
                    entity = oscard === entity;
                    if(entity) { _fun00004_ip = 140; continue _fun00003 }
 92:
                    report = report == golfie;
                    oscard = undefined;
                    if(report) { _fun00004_ip = 111; continue _fun00003 }
 101:
                    report = golfie.isPrivate;
                    oscard = report.bind(golfie)();
 111:
                    report = true;
                    michal = undefined;
                    if(!(report === oscard)) { _fun00004_ip = 137; continue _fun00003 }
 119:
                    report = _closure1_slot4;
                    zuuluu = report.getVoiceChannelId;
                    zuuluu = zuuluu.bind(report)();
                    michal = zuuluu !== tangon;
 137:
                    entity = michal;
 140:
                    return entity;
 142:
                    entity = false;
                    return entity;
                }
            };
            entity = new Array(0);
            zuuluu = oscard.bind(golfie)(tangon, zuuluu, entity);
            entity = null;
            if(!zuuluu) { _fun00002_ip = 139; continue _fun00001 }
 83:
            tangon = _closure1_slot6;
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            michal = 7;
            michal = option[michal];
            zuuluu = golfie.bind(report)(michal);
            michal = {};
            oscard = 8;
            oscard = option[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = {};
            oscard = tangon.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 139:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/panel/native/ActivityPanelContainer.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();