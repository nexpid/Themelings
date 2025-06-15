// app/modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo, argBar) { // Original name: useEnabledHarmTypesBitmaskForChannelAndAuthorId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argBar;
            michal = argFoo;
            var _closure2_slot0 = michal;
            var _closure2_slot1 = verify;
            report = _closure1_slot0;
            kiloes = _closure1_slot1;
            oscard = 5;
            zuuluu = kiloes[oscard];
            tangon = undefined;
            golfie = report.bind(tangon)(zuuluu);
            zuuluu = golfie.getEligibleHarmTypesConfigsForContext;
            yankee = zuuluu.bind(golfie)();
            var _closure2_slot2 = yankee;
            zuuluu = 6;
            golfie = kiloes[zuuluu];
            romeon = report.bind(tangon)(golfie);
            offset = romeon.useStateFromStores;
            golfie = _closure1_slot6;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                michal = _closure1_slot6;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            option = offset.bind(romeon)(option, golfie);
            var _closure2_slot3 = option;
            golfie = kiloes[zuuluu];
            foxtra = report.bind(tangon)(golfie);
            romeon = foxtra.useStateFromStores;
            golfie = _closure1_slot4;
            offset = new Array(2);
            offset[0] = golfie;
            golfie = _closure1_slot5;
            offset[1] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.getChannelTypeById;
                zuuluu = _closure2_slot0;
                michal = _closure2_slot1;
                golfie = _closure1_slot4;
                entity = new Array(2);
                entity[0] = golfie;
                oscard = _closure1_slot5;
                entity[1] = oscard;
                entity = tangon.bind(report)(zuuluu, michal, entity);
                return entity;
            };
            romeon = romeon.bind(foxtra)(offset, golfie);
            var _closure2_slot4 = romeon;
            zuuluu = kiloes[zuuluu];
            backup = report.bind(tangon)(zuuluu);
            foxtra = backup.useStateFromStores;
            zuuluu = _closure1_slot3;
            offset = new Array(1);
            offset[0] = zuuluu;
            golfie = new Array(1);
            golfie[0] = yankee;
            zuuluu = 7;
            zuuluu = kiloes[zuuluu];
            zuuluu = report.bind(tangon)(zuuluu);
            sizing = zuuluu.areSettingsEqual;
            result = function() {
                tangon = _closure2_slot2;
                zuuluu = tangon.reduce;
                michal = function(argFoo, argBar) {
                    report = argBar;
                    entity = {};
                    oscard = argFoo;
                    golfie = entity;
                    michal = copyDataProperties(golfie, oscard);
                    zuuluu = report.harmType;
                    tangon = report.getProtoUserSettings;
                    michal = _closure1_slot3;
                    michal = michal.settings;
                    michal = tangon.bind(report)(michal);
                    entity[zuuluu] = michal;
                    return entity;
                };
                entity = {};
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            update = backup;
            echoed = offset;
            output = golfie;
            offset = update[foxtra](echoed, result, output, sizing, kiloes);
            var _closure2_slot5 = offset;
            golfie = _closure1_slot2;
            report = golfie.useMemo;
            zuuluu = new Array(5);
            zuuluu[0] = romeon;
            zuuluu[1] = yankee;
            zuuluu[2] = offset;
            zuuluu[3] = verify;
            zuuluu[4] = option;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot4;
                    tangon = null;
                    if(!(tangon != zuuluu)) { _fun00004_ip = 93; continue _fun00003 }
 15:
                    report = _closure2_slot1;
                    zuuluu = _closure2_slot3;
                    oscard = tangon == zuuluu;
                    zuuluu = undefined;
                    if(oscard) { _fun00004_ip = 41; continue _fun00003 }
 32:
                    oscard = _closure2_slot3;
                    zuuluu = oscard.id;
 41:
                    if(!(report !== zuuluu)) { _fun00004_ip = 93; continue _fun00003 }
 45:
                    zuuluu = _closure2_slot3;
                    if(!(tangon != zuuluu)) { _fun00004_ip = 93; continue _fun00003 }
 53:
                    tangon = _closure2_slot2;
                    zuuluu = tangon.map;
                    michal = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            michal = argFoo;
                            tangon = _closure2_slot5;
                            entity = michal.harmType;
                            oscard = tangon[entity];
                            tangon = _closure2_slot4;
                            entity = null;
                            tangon = entity == tangon;
                            report = null;
                            if(tangon) { _fun00006_ip = 54; continue _fun00005 }
 35:
                            tangon = michal.getUserSettingsWithDefaults;
                            tangon = tangon.bind(michal)(oscard);
                            zuuluu = _closure2_slot4;
                            report = tangon[zuuluu];
 54:
                            oscard = _closure1_slot0;
                            tangon = _closure1_slot1;
                            zuuluu = 5;
                            tangon = tangon[zuuluu];
                            zuuluu = undefined;
                            tangon = oscard.bind(zuuluu)(tangon);
                            zuuluu = tangon.shouldRedactForSettingValue;
                            zuuluu = zuuluu.bind(tangon)(report);
                            entity = null;
                            if(!zuuluu) { _fun00006_ip = 101; continue _fun00005 }
 95:
                            entity = michal.harmType;
 101:
                            return entity;
                        }
                    };
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.filter;
                    entity = function(argFoo) {
                        michal = null;
                        entity = argFoo;
                        entity = michal != entity;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    _fun00004_ip = 97; continue _fun00003;
 93:
                    entity = new Array(0);
 97:
                    return entity;
                }
            };
            report = report.bind(golfie)(entity, zuuluu);
            zuuluu = report.length;
            entity = 0;
            if(!(entity !== zuuluu)) { _fun00002_ip = 315; continue _fun00001 }
 285:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscard];
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.contentHarmTypesToFlags;
            entity = entity.bind(zuuluu)(report);
            _fun00002_ip = 347; continue _fun00001;
 315:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 8;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ContentHarmTypeBitMask;
            entity = michal.NONE;
 347:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    verify = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useEnabledHarmTypesBitmaskForChannelAndAuthorId'] = tangon;
    michal = function(argFoo) { // Original name: useEnabledHarmTypesBitmaskForMessage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00008_ip = 47; continue _fun00007 }
 9:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.getChannelIdAndAuthorIdFromMessage;
            entity = entity.bind(michal)(zuuluu);
            _fun00008_ip = 49; continue _fun00007;
 47:
            entity = {};
 49:
            tangon = _closure1_slot7;
            zuuluu = entity.channelId;
            michal = entity.authorId;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['useEnabledHarmTypesBitmaskForMessage'] = michal;
    return entity;
})();