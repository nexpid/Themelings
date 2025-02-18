// app/modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    tangon = 1;
    oscard = report[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot3 = tangon;
    tangon = 4;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: usePreloadedGuildAsset
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            option = argBar;
            entity = argBaz;
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = option;
            var _closure2_slot2 = entity;
            yankee = _closure1_slot3;
            report = yankee.useState;
            tangon = {};
            report = report.bind(yankee)(tangon);
            tangon = _closure1_slot2;
            golfie = undefined;
            verify = 2;
            report = tangon.bind(golfie)(report, verify);
            tangon = 1;
            tangon = report[tangon];
            var _closure2_slot3 = tangon;
            report = yankee.useRef;
            tangon = {};
            tangon['guildId'] = oscard;
            tangon['asset'] = entity;
            tangon['icon'] = option;
            tangon['preloading'] = option;
            report = report.bind(yankee)(tangon);
            var _closure2_slot4 = report;
            offset = yankee.useEffect;
            option = function() {
                entity = function() {
                    entity = _closure2_slot4;
                    michal = entity.current;
                    entity = undefined;
                    michal['guildId'] = entity;
                    return entity;
                };
                return entity;
            };
            tangon = new Array(0);
            tangon = offset.bind(yankee)(option, tangon);
            option = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[verify];
            tangon = option.bind(golfie)(tangon);
            tangon = tangon.bind(golfie)(report);
            report = tangon.guildId;
            if(!(oscard === report)) { _fun00002_ip = 161; continue _fun00001 }
 155:
            entity = tangon.asset;
 161:
            tangon = _closure1_slot3;
            zuuluu = tangon.useEffect;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot4;
                    michal = michal.current;
                    michal = michal.guildId;
                    if(!(zuuluu === michal)) { _fun00004_ip = 171; continue _fun00003 }
 28:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00004_ip = 171; continue _fun00003 }
 41:
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot4;
                    michal = michal.current;
                    michal = michal.icon;
                    michal = zuuluu !== michal;
                    if(!michal) { _fun00004_ip = 89; continue _fun00003 }
 66:
                    tangon = _closure2_slot1;
                    zuuluu = _closure2_slot4;
                    zuuluu = zuuluu.current;
                    zuuluu = zuuluu.preloading;
                    michal = tangon !== zuuluu;
 89:
                    if(!michal) { _fun00004_ip = 231; continue _fun00003 }
 95:
                    michal = _closure2_slot4;
                    michal = michal.current;
                    tangon = _closure2_slot1;
                    michal['preloading'] = tangon;
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = report.bind(michal)(zuuluu);
                    michal = zuuluu.preload;
                    tangon = michal.bind(zuuluu)(tangon);
                    zuuluu = tangon.then;
                    michal = function() {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            michal = _closure2_slot4;
                            michal = michal.current;
                            zuuluu = michal.guildId;
                            michal = _closure2_slot0;
                            michal = zuuluu === michal;
                            if(!michal) { _fun00006_ip = 51; continue _fun00005 }
 28:
                            zuuluu = _closure2_slot4;
                            zuuluu = zuuluu.current;
                            tangon = zuuluu.preloading;
                            zuuluu = _closure2_slot1;
                            michal = tangon === zuuluu;
 51:
                            if(!michal) { _fun00006_ip = 101; continue _fun00005 }
 54:
                            michal = _closure2_slot4;
                            tangon = michal.current;
                            zuuluu = _closure2_slot1;
                            tangon['icon'] = zuuluu;
                            zuuluu = michal.current;
                            michal = _closure2_slot2;
                            zuuluu['asset'] = michal;
                            zuuluu = _closure2_slot3;
                            michal = undefined;
                            entity = {};
                            entity = zuuluu.bind(michal)(entity);
 101:
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    _fun00004_ip = 231; continue _fun00003;
 171:
                    michal = _closure2_slot4;
                    tangon = michal.current;
                    zuuluu = _closure2_slot0;
                    tangon['guildId'] = zuuluu;
                    zuuluu = michal.current;
                    tangon = _closure2_slot1;
                    zuuluu['icon'] = tangon;
                    zuuluu = michal.current;
                    zuuluu['preloading'] = tangon;
                    michal = michal.current;
                    entity = _closure2_slot2;
                    michal['asset'] = entity;
 231:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();