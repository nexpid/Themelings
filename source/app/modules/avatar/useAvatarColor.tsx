// app/modules/avatar/useAvatarColor.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = verify;
    report = function(argFoo) { // Original name: hasFetchedColors
        michal = _closure1_slot7;
        entity = michal.getState;
        entity = entity.bind(michal)();
        michal = entity.palette;
        entity = argFoo;
        michal = michal[entity];
        entity = null;
        entity = entity != michal;
        return entity;
    };
    var _closure1_slot8 = report;
    entity = function() { // Original name: _maybeFetchColors
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    tangon = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 52; continue _fun00001 }
 10:
                    report = _closure1_slot8;
                    michal = undefined;
                    report = report.bind(michal)(tangon);
                    if(report) { _fun00002_ip = 49; continue _fun00001 }
 27:
                    zuuluu = _closure1_slot10;
                    zuuluu = zuuluu.bind(michal)(tangon);
                    SaveGenerator(address=40);
 38:
                    return zuuluu;
 40:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(!tangon) { _fun00002_ip = 49; continue _fun00001 }
 46:
                    return zuuluu;
 49:
                    return michal;
 52:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: fetchColors
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _fetchColors
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 255; continue _fun00003 }
 15:
                    report = golfie;
                    var _closure4_slot0 = golfie;
                    michal = undefined;
                    var _closure4_slot1 = michal;
                    var _closure4_slot2 = michal;
                    option = _closure1_slot7;
                    oscard = option.getState;
                    oscard = oscard.bind(option)();
                    oscard = oscard.fetching;
                    oscard = oscard[golfie];
                    if(oscard) { _fun00004_ip = 252; continue _fun00003 }
 65:
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    oscard = 5;
                    golfie = golfie[oscard];
                    verify = option.bind(michal)(golfie);
                    option = verify.batchUpdates;
                    golfie = function() {
                        zuuluu = _closure1_slot7;
                        michal = zuuluu.setState;
                        entity = function(argFoo) {
                            entity = {};
                            michal = {};
                            zuuluu = argFoo;
                            report = zuuluu.fetching;
                            oscard = michal;
                            zuuluu = copyDataProperties(oscard, report);
                            tangon = _closure4_slot0;
                            zuuluu = true;
                            michal[tangon] = zuuluu;
                            entity['fetching'] = michal;
                            return entity;
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    golfie = option.bind(verify)(golfie);
 101: // try_start_0
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    golfie = 6;
                    golfie = verify[golfie];
                    option = option.bind(michal)(golfie);
                    golfie = option.getPaletteForAvatar;
                    report = golfie.bind(option)(report);
                    SaveGenerator(address=136);
 134:
                    return report;
 136:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golfie) { _fun00004_ip = 214; continue _fun00003 }
 142:
                    _closure4_slot1 = report;
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    verify = 7;
                    verify = golfie[verify];
                    yankee = option.bind(michal)(verify);
                    offset = yankee.getComplimentaryPaletteForColor;
                    verify = 0;
                    verify = report[verify];
                    verify = offset.bind(yankee)(verify);
                    _closure4_slot2 = verify;
                    golfie = golfie[oscard];
                    verify = option.bind(michal)(golfie);
                    option = verify.batchUpdates;
                    golfie = function() {
                        zuuluu = _closure1_slot7;
                        michal = zuuluu.setState;
                        entity = function(argFoo) {
                            zuuluu = argFoo;
                            entity = {};
                            michal = {};
                            offset = zuuluu.fetching;
                            yankee = michal;
                            tangon = copyDataProperties(yankee, offset);
                            tangon = _closure4_slot0;
                            oscard = false;
                            michal[tangon] = oscard;
                            entity['fetching'] = michal;
                            michal = {};
                            offset = zuuluu.palette;
                            yankee = michal;
                            zuuluu = copyDataProperties(yankee, offset);
                            option = _closure4_slot1;
                            oscard = option.slice;
                            golfie = 0;
                            zuuluu = 2;
                            offset = oscard.bind(option)(golfie, zuuluu);
                            zuuluu = new Array(0);
                            yankee = zuuluu;
                            verify = 0;
                            verify = arraySpread(yankee, offset, verify);
                            offset = _closure4_slot2;
                            yankee = zuuluu;
                            report = arraySpread(yankee, offset, verify);
                            michal[tangon] = zuuluu;
                            entity['palette'] = michal;
                            return entity;
                        };
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    golfie = option.bind(verify)(golfie);
 212: // try_end0
                    _fun00004_ip = 252; continue _fun00003;
 214:
                    return report;
 217: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    tangon = tangon[oscard];
                    report = report.bind(michal)(tangon);
                    tangon = report.batchUpdates;
                    zuuluu = function() {
                        zuuluu = _closure1_slot7;
                        michal = zuuluu.setState;
                        entity = function(argFoo) {
                            entity = {};
                            michal = {};
                            zuuluu = argFoo;
                            report = zuuluu.fetching;
                            oscard = michal;
                            zuuluu = copyDataProperties(oscard, report);
                            tangon = _closure4_slot0;
                            zuuluu = false;
                            michal[tangon] = zuuluu;
                            entity['fetching'] = michal;
                            return entity;
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    zuuluu = tangon.bind(report)(zuuluu);
 252:
                    return michal;
 255:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    michal = function(argFoo, argBar) { // Original name: useAvatarColors
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            michal = arguments[2];
            var _closure2_slot0 = tangon;
            option = undefined;
            if(!(michal === option)) { _fun00006_ip = 23; continue _fun00005 }
 21:
            michal = true;
 23:
            var _closure2_slot1 = michal;
            var _closure2_slot2 = option;
            var _closure2_slot3 = option;
            oscard = _closure1_slot7;
            report = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    entity = undefined;
                    if(zuuluu) { _fun00008_ip = 35; continue _fun00007 }
 18:
                    zuuluu = argFoo;
                    zuuluu = zuuluu.palette;
                    michal = _closure2_slot0;
                    entity = zuuluu[michal];
 35:
                    return entity;
                }
            };
            golfie = oscard.bind(option)(report);
            _closure2_slot2 = golfie;
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            report = 8;
            report = verify[report];
            verify = oscard.bind(option)(report);
            option = verify.useStateFromStores;
            report = _closure1_slot6;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot1;
                    tangon = 1;
                    entity = tangon;
                    if(!michal) { _fun00010_ip = 45; continue _fun00009 }
 16:
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.desaturateUserColors;
                    entity = tangon;
                    if(!zuuluu) { _fun00010_ip = 45; continue _fun00009 }
 35:
                    michal = _closure1_slot6;
                    entity = michal.saturation;
 45:
                    return entity;
                }
            };
            oscard = option.bind(verify)(oscard, report);
            _closure2_slot3 = oscard;
            verify = _closure1_slot5;
            option = verify.useEffect;
            report = new Array(2);
            report[0] = tangon;
            report[1] = golfie;
            tangon = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure2_slot0;
                    tangon = null;
                    michal = tangon != michal;
                    if(!michal) { _fun00012_ip = 24; continue _fun00011 }
 16:
                    zuuluu = _closure2_slot2;
                    michal = tangon == zuuluu;
 24:
                    if(!michal) { _fun00012_ip = 45; continue _fun00011 }
 27:
                    zuuluu = _closure1_slot10;
                    michal = _closure2_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 45:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = option.bind(verify)(tangon, report);
            report = _closure1_slot5;
            tangon = report.useMemo;
            michal = new Array(2);
            michal[0] = golfie;
            michal[1] = oscard;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    entity = undefined;
                    if(zuuluu) { _fun00014_ip = 39; continue _fun00013 }
 18:
                    tangon = _closure2_slot2;
                    zuuluu = tangon.map;
                    michal = function(argFoo) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            tangon = argFoo;
                            entity = tangon[Symbol.iterator];
                            tangon = entity().next;
                            report = tangon().value;
                            michal = entity;
                            zuuluu = undefined;
                            michal = michal === zuuluu;
                            verify = undefined;
                            if(michal) { _fun00016_ip = 27; continue _fun00015 }
 24:
                            verify = report;
 27:
                            option = undefined;
                            if(michal) { _fun00016_ip = 57; continue _fun00015 }
 32:
                            oscard = tangon().value;
                            report = entity;
                            report = report === zuuluu;
                            option = undefined;
                            michal = report;
                            if(report) { _fun00016_ip = 57; continue _fun00015 }
 51:
                            option = oscard;
                            michal = report;
 57:
                            oscard = undefined;
                            if(michal) { _fun00016_ip = 87; continue _fun00015 }
 62:
                            report = tangon().value;
                            tangon = entity;
                            tangon = tangon === zuuluu;
                            oscard = undefined;
                            michal = tangon;
                            if(tangon) { _fun00016_ip = 87; continue _fun00015 }
 81:
                            oscard = report;
                            michal = tangon;
 87:
                            if(michal) { _fun00016_ip = 93; continue _fun00015 }
 90:
                            entity.return();
 93:
                            michal = _closure1_slot1;
                            golfie = _closure1_slot2;
                            entity = 9;
                            tangon = golfie[entity];
                            report = michal.bind(zuuluu)(tangon);
                            tangon = {};
                            tangon['r'] = verify;
                            tangon['g'] = option;
                            tangon['b'] = oscard;
                            report = report.bind(zuuluu)(tangon);
                            tangon = report.toHsl;
                            tangon = tangon.bind(report)();
                            report = tangon.h;
                            oscard = tangon.s;
                            tangon = tangon.l;
                            entity = golfie[entity];
                            michal = michal.bind(zuuluu)(entity);
                            entity = {};
                            entity['h'] = report;
                            report = _closure2_slot3;
                            report = oscard * report;
                            entity['s'] = report;
                            entity['l'] = tangon;
                            michal = michal.bind(zuuluu)(entity);
                            entity = michal.toHexString;
                            entity = entity.bind(michal)();
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(tangon)(michal);
 39:
                    return entity;
                }
            };
            entity = tangon.bind(report)(entity, michal);
            michal = null;
            if(!(michal == entity)) { _fun00006_ip = 193; continue _fun00005 }
 178:
            michal = new Array(2);
            michal[0] = zuuluu;
            michal[1] = zuuluu;
            entity = michal;
 193:
            return entity;
        }
    };
    var _closure1_slot12 = michal;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = verify[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = verify[oscard];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    offset = verify[oscard];
    oscard = argCor;
    oscard = oscard.bind(entity)(offset);
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = verify[oscard];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = verify[oscard];
    offset = option.bind(entity)(oscard);
    golfie = offset.create;
    oscard = function() {
        entity = {};
        michal = {};
        entity['palette'] = michal;
        michal = {};
        entity['fetching'] = michal;
        return entity;
    };
    oscard = golfie.bind(offset)(oscard);
    var _closure1_slot7 = oscard;
    golfie = 10;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/avatar/useAvatarColor.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = function(argFoo, argBar) { // Original name: useAvatarColor
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            oscard = arguments[2];
            tangon = undefined;
            if(!(oscard === tangon)) { _fun00018_ip = 11; continue _fun00017 }
 9:
            oscard = true;
 11:
            report = _closure1_slot12;
            zuuluu = argFoo;
            michal = argBar;
            zuuluu = report.bind(tangon)(zuuluu, michal, oscard);
            michal = _closure1_slot3;
            entity = 1;
            michal = michal.bind(tangon)(zuuluu, entity);
            entity = 0;
            entity = michal[entity];
            return entity;
        }
    };
    zuuluu['default'] = golfie;
    zuuluu['useColorStore'] = oscard;
    zuuluu['hasFetchedColors'] = report;
    report = function() { // Original name: maybeFetchColors
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['maybeFetchColors'] = report;
    tangon = function(argFoo) { // Original name: useHasFetchedColors
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot7;
        michal = undefined;
        entity = function(argFoo) {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00020_ip = 33; continue _fun00019 }
 16:
                zuuluu = argFoo;
                zuuluu = zuuluu.fetching;
                michal = _closure2_slot0;
                entity = zuuluu[michal];
 33:
                return entity;
            }
        };
        entity = zuuluu.bind(michal)(entity);
        entity = !entity;
        return entity;
    };
    zuuluu['useHasFetchedColors'] = tangon;
    zuuluu['useAvatarColors'] = michal;
    return entity;
})();