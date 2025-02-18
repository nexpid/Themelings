// app/modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: GuildsBarPendingGuildFolder
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            offset = entity.node;
            var _closure2_slot0 = offset;
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 4;
            michal = backup[entity];
            tangon = undefined;
            oscard = foxtra.bind(tangon)(michal);
            michal = oscard.useGuildsBarAnimatedWrapperStyles;
            golfie = true;
            yankee = false;
            verify = michal.bind(oscard)(golfie, yankee);
            michal = _closure1_slot1;
            oscard = 5;
            oscard = backup[oscard];
            oscard = michal.bind(tangon)(oscard);
            oscard = oscard.bind(tangon)();
            var _closure2_slot1 = oscard;
            oscard = 6;
            oscard = backup[oscard];
            kiloes = foxtra.bind(tangon)(oscard);
            romeon = kiloes.useStateFromStores;
            oscard = _closure1_slot4;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.includes;
                    report = _closure1_slot4;
                    entity = report.getGuildId;
                    entity = entity.bind(report)();
                    report = null;
                    if(!(report == entity)) { _fun00004_ip = 39; continue _fun00003 }
 35:
                    entity = _closure1_slot5;
 39:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            romeon = romeon.bind(kiloes)(option, oscard);
            update = _closure1_slot3;
            kiloes = update.useMemo;
            oscard = offset.id;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 7;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.getGuildFolderMenuItems;
                entity = _closure2_slot0;
                entity = entity.id;
                report = zuuluu.bind(tangon)(entity);
                var _closure3_slot0 = report;
                entity = {};
                tangon = report.map;
                zuuluu = function(argFoo) {
                    michal = argFoo;
                    entity = {};
                    zuuluu = michal.label;
                    entity['name'] = zuuluu;
                    michal = michal.label;
                    entity['label'] = michal;
                    return entity;
                };
                zuuluu = tangon.bind(report)(zuuluu);
                entity['accessibilityActions'] = zuuluu;
                michal = function(argFoo) { // Original name: onAccessibilityAction
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = argFoo;
                        var _closure4_slot0 = michal;
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.find;
                        entity = function(argFoo) {
                            entity = argFoo;
                            michal = entity.label;
                            entity = _closure4_slot0;
                            entity = entity.nativeEvent;
                            entity = entity.actionName;
                            entity = michal === entity;
                            return entity;
                        };
                        michal = michal.bind(zuuluu)(entity);
                        tangon = null;
                        entity = tangon == michal;
                        if(entity) { _fun00006_ip = 51; continue _fun00005 }
 42:
                        zuuluu = michal.action;
                        entity = tangon == zuuluu;
 51:
                        if(entity) { _fun00006_ip = 63; continue _fun00005 }
 54:
                        entity = michal.action;
                        entity = entity.bind(michal)();
 63:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onAccessibilityAction'] = michal;
                return entity;
            };
            oscard = kiloes.bind(update)(oscard, option);
            sizing = oscard.accessibilityActions;
            kiloes = oscard.onAccessibilityAction;
            source = offset.id;
            oscard = 8;
            oscard = backup[oscard];
            result = foxtra.bind(tangon)(oscard);
            option = result.useSharedValue;
            output = global;
            oscard = output.HermesInternal;
            oscard = oscard.concat;
            echoed = '';
            oscard = oscard.bind(echoed)(source);
            option = option.bind(result)(oscard);
            result = update.useMemo;
            source = offset.id;
            oscard = new Array(1);
            oscard[0] = source;
            zuuluu = function() {
                entity = {};
                michal = function() { // Original name: onPress
                    golfie = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 9;
                    report = tangon[zuuluu];
                    entity = undefined;
                    oscard = golfie.bind(entity)(report);
                    report = oscard.triggerHapticFeedback;
                    zuuluu = tangon[zuuluu];
                    zuuluu = golfie.bind(entity)(zuuluu);
                    zuuluu = zuuluu.HapticFeedbackTypes;
                    zuuluu = zuuluu.IMPACT_LIGHT;
                    zuuluu = report.bind(oscard)(zuuluu);
                    zuuluu = _closure1_slot1;
                    michal = 10;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.toggleGuildFolderExpand;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity['onPress'] = michal;
                return entity;
            };
            oscard = result.bind(update)(zuuluu, oscard);
            zuuluu = _closure1_slot6;
            entity = backup[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            result = offset.id;
            output = output.HermesInternal;
            output = output.concat;
            output = output.bind(echoed)(result);
            entity['id'] = output;
            entity['accessibilityActions'] = sizing;
            entity['onAccessibilityAction'] = kiloes;
            entity['selected'] = romeon;
            entity['unread'] = yankee;
            entity['circle'] = yankee;
            entity['styles'] = verify;
            verify = 11;
            yankee = backup[verify];
            yankee = foxtra.bind(tangon)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            verify = backup[verify];
            verify = foxtra.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.scsU+v;
            verify = yankee.bind(romeon)(verify);
            entity['label'] = verify;
            entity['sharedId'] = option;
            entity['cutouts'] = tangon;
            entity['overState'] = tangon;
            entity['preventClipping'] = golfie;
            entity['config'] = oscard;
            golfie = offset.expanded;
            oscard = null;
            if(!golfie) { _fun00002_ip = 468; continue _fun00001 }
 405:
            verify = _closure1_slot6;
            option = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = 12;
            golfie = yankee[golfie];
            golfie = option.bind(tangon)(golfie);
            option = golfie.GuildsBarGuildFolderBG;
            golfie = {};
            yankee = offset.id;
            golfie['folderId'] = yankee;
            offset = offset.children;
            offset = offset.length;
            golfie['totalItems'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 468:
            entity['externalChildren'] = oscard;
            golfie = _closure1_slot6;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            report = 13;
            report = option[report];
            report = oscard.bind(tangon)(report);
            oscard = report.HourglassIcon;
            report = {};
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();