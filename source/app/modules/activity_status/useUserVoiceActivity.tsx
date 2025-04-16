// app/modules/activity_status/useUserVoiceActivity.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activity_status/useUserVoiceActivity.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useUserVoiceActivity
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.userId;
            var _closure2_slot0 = zuuluu;
            michal = michal.guildId;
            var _closure2_slot1 = michal;
            golfie = undefined;
            var _closure2_slot2 = golfie;
            var _closure2_slot3 = golfie;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            option = 4;
            zuuluu = zuuluu[option];
            oscard = tangon.bind(golfie)(zuuluu);
            report = oscard.useStateFromStores;
            zuuluu = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot1;
                    zuuluu = null;
                    if(!(zuuluu != entity)) { _fun00004_ip = 21; continue _fun00003 }
 13:
                    entity = _closure2_slot0;
                    if(!(zuuluu == entity)) { _fun00004_ip = 60; continue _fun00003 }
 21:
                    entity = _closure2_slot0;
                    zuuluu = zuuluu != entity;
                    entity = undefined;
                    if(!zuuluu) { _fun00004_ip = 58; continue _fun00003 }
 34:
                    report = _closure1_slot4;
                    tangon = report.getDiscoverableVoiceStateForUser;
                    zuuluu = _closure2_slot0;
                    entity = tangon.bind(report)(zuuluu);
 58:
                    _fun00004_ip = 89; continue _fun00003;
 60:
                    report = _closure1_slot4;
                    tangon = report.getDiscoverableVoiceState;
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot0;
                    entity = tangon.bind(report)(zuuluu, michal);
 89:
                    return entity;
                }
            };
            tangon = report.bind(oscard)(tangon, zuuluu);
            zuuluu = null;
            report = zuuluu == tangon;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 100; continue _fun00001 }
 95:
            zuuluu = tangon.channelId;
 100:
            _closure2_slot2 = zuuluu;
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = report[option];
            yankee = oscard.bind(golfie)(zuuluu);
            offset = yankee.useStateFromStores;
            zuuluu = _closure1_slot2;
            verify = new Array(1);
            verify[0] = zuuluu;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00006_ip = 17; continue _fun00005 }
 13:
                    michal = undefined;
                    return michal;
 17:
                    zuuluu = _closure1_slot2;
                    michal = zuuluu.getChannel;
                    entity = _closure2_slot2;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            zuuluu = offset.bind(yankee)(verify, zuuluu);
            _closure2_slot3 = zuuluu;
            report = report[option];
            oscard = oscard.bind(golfie)(report);
            report = oscard.useStateFromStores;
            golfie = _closure1_slot3;
            michal = new Array(1);
            michal[0] = golfie;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    entity = undefined;
                    if(zuuluu) { _fun00008_ip = 32; continue _fun00007 }
 18:
                    tangon = _closure2_slot3;
                    zuuluu = tangon.isPrivate;
                    entity = zuuluu.bind(tangon)();
 32:
                    if(entity) { _fun00008_ip = 68; continue _fun00007 }
 35:
                    report = _closure1_slot3;
                    tangon = report.can;
                    zuuluu = _closure1_slot5;
                    zuuluu = zuuluu.VIEW_CHANNEL;
                    michal = _closure2_slot3;
                    entity = tangon.bind(report)(zuuluu, michal);
 68:
                    return entity;
                }
            };
            entity = report.bind(oscard)(michal, entity);
            if(entity) { _fun00002_ip = 197; continue _fun00001 }
 193:
            entity = {};
            _fun00002_ip = 212; continue _fun00001;
 197:
            michal = {};
            michal['voiceState'] = tangon;
            michal['voiceChannel'] = zuuluu;
            entity = michal;
 212:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();