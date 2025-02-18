// app/modules/user_settings/native/UserSettingsHighlightNotifications.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: Row
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            yankee = michal.guildId;
            var _closure2_slot0 = yankee;
            verify = michal.isStart;
            option = michal.isEnd;
            report = _closure1_slot3;
            tangon = report.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = yankee;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 6;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    oscard = tangon.bind(entity)(zuuluu);
                    report = oscard.updateGuildNotificationSettings;
                    tangon = _closure2_slot0;
                    zuuluu = {};
                    verify = _closure1_slot7;
                    if(michal) { _fun00004_ip = 58; continue _fun00003 }
 50:
                    option = verify.DISABLED;
                    _fun00004_ip = 64; continue _fun00003;
 58:
                    option = verify.ENABLED;
 64:
                    zuuluu['notify_highlights'] = option;
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    golfie = 7;
                    golfie = verify[golfie];
                    golfie = option.bind(entity)(golfie);
                    option = golfie.NotificationLabel;
                    golfie = option.highlights;
                    michal = !michal;
                    michal = golfie.bind(option)(michal);
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    return entity;
                }
            };
            offset = tangon.bind(report)(michal, zuuluu);
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 8;
            michal = tangon[michal];
            report = undefined;
            golfie = zuuluu.bind(report)(michal);
            tangon = golfie.useStateFromStoresObject;
            michal = _closure1_slot6;
            zuuluu = new Array(2);
            zuuluu[0] = michal;
            michal = _closure1_slot4;
            zuuluu[1] = michal;
            michal = new Array(1);
            michal[0] = yankee;
            entity = function() {
                entity = {};
                report = _closure1_slot4;
                zuuluu = report.getGuild;
                tangon = _closure2_slot0;
                zuuluu = zuuluu.bind(report)(tangon);
                entity['guild'] = zuuluu;
                report = _closure1_slot6;
                zuuluu = report.isMuted;
                zuuluu = zuuluu.bind(report)(tangon);
                entity['muted'] = zuuluu;
                zuuluu = _closure1_slot6;
                michal = zuuluu.getNotifyHighlights;
                michal = michal.bind(zuuluu)(tangon);
                entity['notifyHighlights'] = michal;
                return entity;
            };
            entity = tangon.bind(golfie)(zuuluu, entity, michal);
            golfie = entity.guild;
            michal = entity.muted;
            tangon = entity.notifyHighlights;
            entity = null;
            yankee = entity == golfie;
            zuuluu = undefined;
            if(yankee) { _fun00002_ip = 162; continue _fun00001 }
 157:
            zuuluu = golfie.name;
 162:
            if(!(entity != zuuluu)) { _fun00002_ip = 307; continue _fun00001 }
 169:
            foxtra = golfie.name;
            if(michal) { _fun00002_ip = 191; continue _fun00001 }
 177:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.DISABLED;
            michal = tangon === zuuluu;
 191:
            yankee = !michal;
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot1;
            backup = _closure1_slot2;
            michal = 9;
            michal = backup[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['guild'] = golfie;
            romeon = tangon.bind(report)(zuuluu, michal);
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot9;
            michal = {};
            golfie = _closure1_slot0;
            oscard = 10;
            oscard = backup[oscard];
            oscard = golfie.bind(report)(oscard);
            golfie = oscard.TableSwitchRow;
            oscard = {};
            oscard['label'] = foxtra;
            oscard['icon'] = romeon;
            oscard['value'] = yankee;
            oscard['onValueChange'] = offset;
            oscard['start'] = verify;
            oscard['end'] = option;
            oscard = tangon.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 307:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.HighlightSettings;
    var _closure1_slot7 = tangon;
    tangon = 5;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot8 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Fragment;
    var _closure1_slot9 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/native/UserSettingsHighlightNotifications.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: UserSettingsHighlightNotifications
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            report = undefined;
            golfie = tangon.bind(report)(entity);
            oscard = golfie.useStateFromStoresArray;
            entity = _closure1_slot5;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                michal = _closure1_slot5;
                entity = michal.getFlattenedGuildIds;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = oscard.bind(golfie)(tangon, entity);
            var _closure2_slot0 = entity;
            golfie = _closure1_slot3;
            oscard = golfie.useMemo;
            tangon = new Array(1);
            tangon[0] = entity;
            zuuluu = function() {
                zuuluu = _closure2_slot0;
                michal = zuuluu.map;
                entity = function(argFoo, argBar) {
                    report = argFoo;
                    oscard = argBar;
                    tangon = _closure1_slot8;
                    zuuluu = _closure1_slot10;
                    michal = {};
                    michal['guildId'] = report;
                    entity = 0;
                    entity = entity === oscard;
                    michal['isStart'] = entity;
                    entity = _closure2_slot0;
                    golfie = entity.length;
                    entity = 1;
                    entity = golfie - entity;
                    entity = oscard === entity;
                    michal['isEnd'] = entity;
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal, report);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = oscard.bind(golfie)(zuuluu, tangon);
            tangon = entity.length;
            zuuluu = 0;
            entity = null;
            if(!(zuuluu !== tangon)) { _fun00006_ip = 147; continue _fun00005 }
 105:
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 11;
            michal = golfie[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.Form;
            michal = {};
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 147:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();