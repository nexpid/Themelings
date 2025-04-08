// app/utils/web/KeyboardLayoutMapUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        verify = argBar;
        backup = argBaz;
        zuuluu = argFre;
        offset = argPlu;
        var _closure1_slot0 = verify;
        var _closure1_slot1 = offset;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
                michal = global;
                zuuluu = michal.Boolean;
                zuuluu = zuuluu.prototype;
                tangon = zuuluu.valueOf;
                zuuluu = tangon.call;
                option = michal.Reflect;
                golfie = option.construct;
                oscard = michal.Boolean;
                report = new Array(0);
                michal = function() {
                    entity = undefined;
                    return entity;
                };
                michal = golfie.bind(option)(oscard, report, michal);
                michal = zuuluu.bind(tangon)(michal);
                michal = !michal;
                var _closure2_slot0 = michal;
 72: // try_end0
                _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
                CatchBlockStart(arg_register=1);
 76:
                michal = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot18 = michal;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot18 = entity;
        entity = function() { // Original name: syncKeyboardLayoutMap
            entity = undefined;
            tangon = _closure1_slot20;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot19 = entity;
        entity = function() { // Original name: _syncKeyboardLayoutMap
            report = undefined;
            entity = undefined;
            tangon = _closure1_slot6;
            zuuluu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00006_ip = 184; continue _fun00005 }
 10:
                        zuuluu = global;
                        michal = zuuluu.navigator;
                        report = michal.keyboard;
                        tangon = null;
                        oscard = tangon == report;
                        michal = undefined;
                        if(oscard) { _fun00006_ip = 41; continue _fun00005 }
 35:
                        michal = report.getLayoutMap;
 41:
                        if(!(tangon != michal)) { _fun00006_ip = 179; continue _fun00005 }
 48: // try_start_0
                        michal = zuuluu.navigator;
                        tangon = michal.keyboard;
                        michal = tangon.getLayoutMap;
                        michal = michal.bind(tangon)();
                        SaveGenerator(address=74);
 72:
                        return michal;
 74:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00006_ip = 143; continue _fun00005 }
 80:
                        oscard = _closure1_slot13;
                        golfie = zuuluu.Object;
                        report = golfie.fromEntries;
                        zuuluu = michal.entries;
                        zuuluu = zuuluu.bind(michal)();
                        option = report.bind(golfie)(zuuluu);
                        report = oscard.prototype;
                        report = Object.create(report, {constructor: {value: oscard}});
                        verify = report;
                        zuuluu = new verify[oscard](option, golfie);
                        zuuluu = zuuluu instanceof Object ? zuuluu : report;
                        _closure1_slot14 = zuuluu;
 138: // try_end0
                        zuuluu = true;
                        return zuuluu;
 143:
                        return michal;
 146: // catch_target0
                        CatchBlockStart(arg_register=1);
                        michal = _closure1_slot13;
                        tangon = michal.prototype;
                        tangon = Object.create(tangon, {constructor: {value: michal}});
                        verify = tangon;
                        michal = new verify[michal](option);
                        michal = michal instanceof Object ? michal : tangon;
                        _closure1_slot14 = michal;
 179:
                        michal = false;
                        return michal;
 184:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            _closure1_slot20 = tangon;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot20 = entity;
        entity = function() { // Original name: getKeyboardLayoutMap
            entity = _closure1_slot14;
            return entity;
        };
        var _closure1_slot21 = entity;
        entity = function(argFoo) { // Original name: getNormalizedEvent
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = {};
                tangon = argFoo;
                report = entity;
                michal = copyDataProperties(report, tangon);
                zuuluu = entity.key;
                michal = null;
                if(!(michal != zuuluu)) { _fun00008_ip = 44; continue _fun00007 }
 23:
                zuuluu = entity.key;
                michal = zuuluu.toLocaleLowerCase;
                michal = michal.bind(zuuluu)();
                entity['key'] = michal;
 44:
                return entity;
            }
        };
        var _closure1_slot22 = entity;
        entity = function(argFoo) { // Original name: normalizeKeyMap
            tangon = global;
            michal = tangon.Set;
            zuuluu = michal.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
            option = zuuluu;
            michal = new option[michal](golfie);
            michal = michal instanceof Object ? michal : zuuluu;
            var _closure2_slot0 = michal;
            zuuluu = tangon.Object;
            michal = zuuluu.fromEntries;
            oscard = tangon.Object;
            report = oscard.entries;
            tangon = argFoo;
            report = report.bind(oscard)(tangon);
            tangon = report.map;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = argFoo;
                    entity = report[Symbol.iterator];
                    report = entity().next;
                    michal = report().value;
                    zuuluu = entity;
                    golfie = undefined;
                    tangon = zuuluu === golfie;
                    zuuluu = undefined;
                    if(tangon) { _fun00010_ip = 27; continue _fun00009 }
 24:
                    zuuluu = michal;
 27:
                    michal = undefined;
                    if(tangon) { _fun00010_ip = 57; continue _fun00009 }
 32:
                    oscard = report().value;
                    report = entity;
                    report = report === golfie;
                    michal = undefined;
                    tangon = report;
                    if(report) { _fun00010_ip = 57; continue _fun00009 }
 51:
                    michal = oscard;
                    tangon = report;
 57:
                    if(tangon) { _fun00010_ip = 63; continue _fun00009 }
 60:
                    entity.return();
 63:
                    entity = zuuluu.toLowerCase;
                    zuuluu = entity.bind(zuuluu)();
                    report = _closure2_slot0;
                    tangon = report.has;
                    tangon = tangon.bind(report)(zuuluu);
                    if(!tangon) { _fun00010_ip = 134; continue _fun00009 }
 93:
                    oscard = _closure1_slot9;
                    report = oscard.warn;
                    tangon = global;
                    tangon = tangon.HermesInternal;
                    golfie = tangon.concat;
                    tangon = 'Duplicate key mapping found for: ';
                    tangon = golfie.bind(tangon)(zuuluu);
                    tangon = report.bind(oscard)(tangon);
 134:
                    tangon = _closure2_slot0;
                    entity = tangon.add;
                    entity = entity.bind(tangon)(zuuluu);
                    entity = new Array(2);
                    entity[0] = zuuluu;
                    entity[1] = michal;
                    return entity;
                }
            };
            entity = tangon.bind(report)(entity);
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        var _closure1_slot23 = entity;
        oscard = function() { // Original name: initializeKeyboardMapper
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = _closure1_slot17;
                michal = null;
                if(!(michal == zuuluu)) { _fun00012_ip = 60; continue _fun00011 }
 13:
                michal = global;
                tangon = michal.Promise;
                zuuluu = function() {
                    tangon = _closure1_slot6;
                    zuuluu = undefined;
                    michal = function* (argFoo) {
                        entity = function* (argFoo) { // Original name: ?anon_0_
                            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00014_ip = 108; continue _fun00013 }
 7:
                                michal = _closure1_slot19;
                                zuuluu = undefined;
                                michal = michal.bind(zuuluu)();
                                SaveGenerator(address=24);
 22:
                                return michal;
 24:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(tangon) { _fun00014_ip = 105; continue _fun00013 }
 30:
                                golfie = _closure1_slot15;
                                verify = _closure1_slot10;
                                oscard = golfie.prototype;
                                oscard = Object.create(oscard, {constructor: {value: golfie}});
                                offset = oscard;
                                tangon = new offset[golfie](verify, option);
                                tangon = tangon instanceof Object ? tangon : oscard;
                                _closure1_slot16 = tangon;
                                tangon = global;
                                golfie = tangon.document;
                                oscard = golfie.addEventListener;
                                report = 'keydown';
                                tangon = function(argFoo) {
                                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                        oscard = argFoo;
                                        entity = undefined;
                                        michal = undefined;
 7: // try_start_0
                                        tangon = _closure1_slot16;
                                        michal = tangon;
                                        zuuluu = null;
                                        if(!(zuuluu != tangon)) { _fun00016_ip = 40; continue _fun00015 }
 23:
                                        tangon = michal;
                                        zuuluu = tangon.addEvent;
                                        michal = oscard;
                                        michal = zuuluu.bind(tangon)(michal);
 40: // try_end0
                                        _fun00016_ip = 79; continue _fun00015;
 42: // catch_target0
                                        CatchBlockStart(arg_register=1);
                                        report = _closure1_slot9;
                                        tangon = report.error;
                                        zuuluu = {};
                                        zuuluu['event'] = oscard;
                                        zuuluu['error'] = michal;
                                        michal = 'KeyboardMapper - Error adding event';
                                        michal = tangon.bind(report)(michal, zuuluu);
 79:
                                        return entity;
                                    }
                                };
                                tangon = oscard.bind(golfie)(report, tangon);
                                tangon = argFoo;
                                tangon = tangon.bind(zuuluu)();
                                return zuuluu;
 105:
                                return michal;
 108:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    michal = tangon.bind(zuuluu)(michal);
                    var _closure3_slot0 = michal;
                    entity = function() {
                        entity = undefined;
                        tangon = _closure3_slot0;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    return entity;
                };
                michal = undefined;
                report = zuuluu.bind(michal)();
                zuuluu = tangon.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                oscard = zuuluu;
                michal = new oscard[tangon](report, tangon);
                michal = michal instanceof Object ? michal : zuuluu;
                _closure1_slot17 = michal;
 60:
                entity = _closure1_slot17;
                return entity;
            }
        };
        var _closure1_slot24 = oscard;
        report = function() { // Original name: getKeyboardMapper
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = _closure1_slot16;
                michal = null;
                if(!(michal != entity)) { _fun00018_ip = 19; continue _fun00017 }
 13:
                entity = _closure1_slot16;
                _fun00018_ip = 31; continue _fun00017;
 19:
                tangon = _closure1_slot24;
                zuuluu = undefined;
                zuuluu = tangon.bind(zuuluu)();
                entity = null;
 31:
                return entity;
            }
        };
        var _closure1_slot25 = report;
        entity = function() { // Original name: _resetKeyboardMapper
            report = undefined;
            entity = undefined;
            tangon = _closure1_slot6;
            zuuluu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00020_ip = 60; continue _fun00019 }
 7:
                        michal = _closure1_slot19;
                        zuuluu = undefined;
                        michal = michal.bind(zuuluu)();
                        SaveGenerator(address=24);
 22:
                        return michal;
 24:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun00020_ip = 57; continue _fun00019 }
 30:
                        tangon = _closure1_slot25;
                        report = tangon.bind(zuuluu)();
                        tangon = null;
                        if(!(tangon != report)) { _fun00020_ip = 54; continue _fun00019 }
 44:
                        tangon = report.reset;
                        tangon = tangon.bind(report)();
 54:
                        return zuuluu;
 57:
                        return michal;
 60:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            _closure1_slot26 = tangon;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot26 = entity;
        tangon = function(argFoo) { // Original name: reverseLookupCodeFromKey
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                michal = argFoo;
                entity = michal.toLocaleUpperCase;
                oscard = entity.bind(michal)();
                michal = _closure1_slot25;
                entity = undefined;
                report = michal.bind(entity)();
                zuuluu = null;
                tangon = zuuluu == report;
                michal = undefined;
                if(tangon) { _fun00022_ip = 48; continue _fun00021 }
 37:
                tangon = report.findCodeFromKeyboardLayoutMap;
                michal = tangon.bind(report)(oscard);
 48:
                zuuluu = zuuluu != michal;
                entity = undefined;
                if(!zuuluu) { _fun00022_ip = 60; continue _fun00021 }
 57:
                entity = michal;
 60:
                return entity;
            }
        };
        var _closure1_slot27 = tangon;
        golfie = global;
        romeon = golfie.Object;
        yankee = romeon.defineProperty;
        option = {};
        entity = true;
        option['value'] = entity;
        entity = '__esModule';
        entity = yankee.bind(romeon)(zuuluu, entity, option);
        entity = 0;
        option = offset[entity];
        entity = undefined;
        option = backup.bind(entity)(option);
        var _closure1_slot2 = option;
        option = 1;
        option = offset[option];
        option = backup.bind(entity)(option);
        var _closure1_slot3 = option;
        option = 2;
        option = offset[option];
        option = backup.bind(entity)(option);
        var _closure1_slot4 = option;
        option = 3;
        option = offset[option];
        option = backup.bind(entity)(option);
        var _closure1_slot5 = option;
        option = 4;
        option = offset[option];
        option = backup.bind(entity)(option);
        var _closure1_slot6 = option;
        option = 5;
        option = offset[option];
        option = backup.bind(entity)(option);
        var _closure1_slot7 = option;
        option = 6;
        option = offset[option];
        option = backup.bind(entity)(option);
        var _closure1_slot8 = option;
        option = 7;
        option = offset[option];
        romeon = verify.bind(entity)(option);
        option = romeon.LinuxKeyToCode;
        yankee = romeon.MacosKeyToCode;
        romeon = romeon.WindowsKeyToCode;
        foxtra = 8;
        foxtra = offset[foxtra];
        foxtra = verify.bind(entity)(foxtra);
        sizing = foxtra.Logger;
        foxtra = sizing.prototype;
        kiloes = Object.create(foxtra, {constructor: {value: sizing}});
        echoed = 'KeyboardLayoutMapUtils';
        update = kiloes;
        foxtra = new update[sizing](echoed, result);
        foxtra = foxtra instanceof Object ? foxtra : kiloes;
        var _closure1_slot9 = foxtra;
        foxtra = 9;
        kiloes = offset[foxtra];
        sizing = verify.bind(entity)(kiloes);
        kiloes = sizing.isLinux;
        kiloes = kiloes.bind(sizing)();
        if(kiloes) { _fun00002_ip = 448; continue _fun00001 }
 380:
        kiloes = offset[foxtra];
        sizing = verify.bind(entity)(kiloes);
        kiloes = sizing.isMac;
        kiloes = kiloes.bind(sizing)();
        if(kiloes) { _fun00002_ip = 445; continue _fun00001 }
 402:
        foxtra = offset[foxtra];
        kiloes = verify.bind(entity)(foxtra);
        foxtra = kiloes.isWindows;
        foxtra = foxtra.bind(kiloes)();
        if(foxtra) { _fun00002_ip = 442; continue _fun00001 }
 424:
        foxtra = 10;
        foxtra = offset[foxtra];
        foxtra = backup.bind(entity)(foxtra);
        romeon = foxtra.codes;
 442:
        yankee = romeon;
 445:
        option = yankee;
 448:
        var _closure1_slot10 = option;
        option = 'keyboardMapper.keyMap';
        var _closure1_slot11 = option;
        yankee = golfie.Object;
        option = yankee.freeze;
        golfie = {'KeyA': 'a', 'KeyB': 'b', 'KeyC': 'c', 'KeyD': 'd', 'KeyE': 'e', 'KeyF': 'f', 'KeyG': 'g', 'KeyH': 'h', 'KeyI': 'i', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l', 'KeyM': 'm', 'KeyN': 'n', 'KeyO': 'o', 'KeyP': 'p', 'KeyQ': 'q', 'KeyR': 'r', 'KeyS': 's', 'KeyT': 't', 'KeyU': 'u', 'KeyV': 'v', 'KeyW': 'w', 'KeyX': 'x', 'KeyY': 'y', 'KeyZ': 'z', 'Digit0': '0', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4', 'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9', 'Backquote': '`', 'Backslash': '\\', 'Quote': "'", 'Slash': '/', 'Comma': ',', 'Period': '.', 'Semicolon': ';', 'Equal': '=', 'Minus': '-', 'BracketLeft': '[', 'BracketRight': ']', 'IntlBackslash': '§'};
        golfie = option.bind(yankee)(golfie);
        var _closure1_slot12 = golfie;
        option = function() {
            tangon = _closure1_slot8;
            zuuluu = function() { // Original name: DiscordKeyboardLayoutMap
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    oscard = arguments[0];
                    zuuluu = this;
                    entity = undefined;
                    if(!(oscard === entity)) { _fun00024_ip = 19; continue _fun00023 }
 12:
                    oscard = _closure1_slot12;
 19:
                    tangon = _closure1_slot7;
                    michal = _closure2_slot0;
                    michal = tangon.bind(entity)(zuuluu, michal);
                    michal = global;
                    report = michal.Map;
                    tangon = michal.Object;
                    michal = tangon.entries;
                    option = michal.bind(tangon)(oscard);
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    verify = tangon;
                    michal = new verify[report](option, golfie);
                    michal = michal instanceof Object ? michal : tangon;
                    zuuluu['map'] = michal;
                    return entity;
                }
            };
            var _closure2_slot0 = zuuluu;
            entity = {};
            michal = 'get';
            entity['key'] = michal;
            michal = function(argFoo) { // Original name: value
                entity = this;
                zuuluu = entity.map;
                michal = zuuluu.get;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity['value'] = michal;
            michal = new Array(8);
            michal[0] = entity;
            entity = {};
            oscard = 'has';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                entity = this;
                zuuluu = entity.map;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity['value'] = oscard;
            michal[1] = entity;
            entity = {};
            oscard = 'keys';
            entity['key'] = oscard;
            oscard = function() { // Original name: value
                entity = this;
                michal = entity.map;
                entity = michal.keys;
                entity = entity.bind(michal)();
                return entity;
            };
            entity['value'] = oscard;
            michal[2] = entity;
            entity = {};
            oscard = 'values';
            entity['key'] = oscard;
            oscard = function() { // Original name: value
                entity = this;
                michal = entity.map;
                entity = michal.values;
                entity = entity.bind(michal)();
                return entity;
            };
            entity['value'] = oscard;
            michal[3] = entity;
            entity = {};
            oscard = 'entries';
            entity['key'] = oscard;
            oscard = function() { // Original name: value
                entity = this;
                michal = entity.map;
                entity = michal.entries;
                entity = entity.bind(michal)();
                return entity;
            };
            entity['value'] = oscard;
            michal[4] = entity;
            entity = {};
            oscard = 'forEach';
            entity['key'] = oscard;
            oscard = function(argFoo, argBar) { // Original name: value
                entity = this;
                tangon = entity.map;
                zuuluu = tangon.forEach;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity['value'] = oscard;
            michal[5] = entity;
            entity = {};
            oscard = 'size';
            entity['key'] = oscard;
            oscard = function() { // Original name: get
                entity = this;
                entity = entity.map;
                entity = entity.size;
                return entity;
            };
            entity['get'] = oscard;
            michal[6] = entity;
            entity = {};
            oscard = '_set';
            entity['key'] = oscard;
            report = function(argFoo, argBar) { // Original name: value
                entity = this;
                tangon = entity.map;
                zuuluu = tangon.set;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            };
            entity['value'] = report;
            michal[7] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        option = option.bind(entity)();
        var _closure1_slot13 = option;
        yankee = option.prototype;
        yankee = Object.create(yankee, {constructor: {value: option}});
        update = yankee;
        option = new update[option](echoed);
        option = option instanceof Object ? option : yankee;
        var _closure1_slot14 = option;
        option = function() {
            tangon = _closure1_slot8;
            zuuluu = function() { // Original name: BaseKeyboardMapper
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    tangon = arguments[0];
                    zuuluu = this;
                    entity = undefined;
                    if(!(tangon === entity)) { _fun00026_ip = 14; continue _fun00025 }
 12:
                    tangon = {};
 14:
                    oscard = _closure1_slot7;
                    report = _closure2_slot0;
                    report = oscard.bind(entity)(zuuluu, report);
                    oscard = null;
                    zuuluu['_internalKeyLayoutMap'] = oscard;
                    report = new Array(0);
                    zuuluu['_cachedKeyCodeMapEntries'] = report;
                    report = new Array(0);
                    zuuluu['_cachedKeyMapEntries'] = report;
                    report = new Array(0);
                    zuuluu['_cachedKeyLayoutMapEntries'] = report;
                    report = new Array(0);
                    zuuluu['_cachedAllEvents'] = report;
                    zuuluu['_defaultKeyMap'] = tangon;
                    golfie = _closure1_slot0;
                    option = _closure1_slot1;
                    report = 11;
                    report = option[report];
                    report = golfie.bind(entity)(report);
                    option = report.Storage;
                    golfie = option.get;
                    report = _closure1_slot11;
                    report = golfie.bind(option)(report);
                    if(!(oscard != report)) { _fun00026_ip = 135; continue _fun00025 }
 132:
                    tangon = report;
 135:
                    zuuluu['keyMap'] = tangon;
                    tangon = _closure1_slot23;
                    michal = {};
                    verify = zuuluu.keyMap;
                    offset = michal;
                    report = copyDataProperties(offset, verify);
                    michal = tangon.bind(entity)(michal);
                    zuuluu['keyMap'] = michal;
                    michal = zuuluu._initializeInternalLayoutMap;
                    michal = michal.bind(zuuluu)();
                    michal = zuuluu._buildKeyCodeMapFromKeyMap;
                    michal = michal.bind(zuuluu)();
                    zuuluu['keyCodeMap'] = michal;
                    michal = zuuluu.updateCaches;
                    michal = michal.bind(zuuluu)();
                    return entity;
                }
            };
            var _closure2_slot0 = zuuluu;
            entity = {};
            michal = '_setCachedKeyCodeMapEntries';
            entity['key'] = michal;
            michal = function() { // Original name: value
                michal = this;
                zuuluu = global;
                report = zuuluu.Object;
                tangon = report.entries;
                zuuluu = michal.keyCodeMap;
                report = tangon.bind(report)(zuuluu);
                tangon = report.map;
                zuuluu = function(argFoo) {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        oscard = argFoo;
                        entity = oscard[Symbol.iterator];
                        oscard = entity().next;
                        michal = oscard().value;
                        zuuluu = entity;
                        tangon = undefined;
                        report = zuuluu === tangon;
                        zuuluu = undefined;
                        if(report) { _fun00028_ip = 27; continue _fun00027 }
 24:
                        zuuluu = michal;
 27:
                        michal = undefined;
                        if(report) { _fun00028_ip = 57; continue _fun00027 }
 32:
                        golfie = oscard().value;
                        oscard = entity;
                        oscard = oscard === tangon;
                        michal = undefined;
                        report = oscard;
                        if(oscard) { _fun00028_ip = 57; continue _fun00027 }
 51:
                        michal = golfie;
                        report = oscard;
 57:
                        if(report) { _fun00028_ip = 63; continue _fun00027 }
 60:
                        entity.return();
 63:
                        entity = global;
                        entity = entity.Number;
                        zuuluu = entity.bind(tangon)(zuuluu);
                        entity = new Array(2);
                        entity[0] = zuuluu;
                        entity[1] = michal;
                        return entity;
                    }
                };
                zuuluu = tangon.bind(report)(zuuluu);
                michal['_cachedKeyCodeMapEntries'] = zuuluu;
                tangon = michal._cachedKeyCodeMapEntries;
                zuuluu = tangon.flatMap;
                entity = function(argFoo) {
                    _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                        tangon = argFoo;
                        michal = tangon[Symbol.iterator];
                        tangon = michal().next;
                        entity = tangon().value;
                        entity = michal;
                        oscard = undefined;
                        zuuluu = entity === oscard;
                        entity = undefined;
                        if(zuuluu) { _fun00030_ip = 49; continue _fun00029 }
 24:
                        report = tangon().value;
                        tangon = michal;
                        tangon = tangon === oscard;
                        entity = undefined;
                        zuuluu = tangon;
                        if(tangon) { _fun00030_ip = 49; continue _fun00029 }
 43:
                        entity = report;
                        zuuluu = tangon;
 49:
                        if(zuuluu) { _fun00030_ip = 55; continue _fun00029 }
 52:
                        michal.return();
 55:
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(entity);
                michal['_cachedAllEvents'] = entity;
                entity = undefined;
                return entity;
            };
            entity['value'] = michal;
            michal = new Array(18);
            michal[0] = entity;
            entity = {};
            oscard = '_setCachedKeyMapEntries';
            entity['key'] = oscard;
            oscard = function() { // Original name: value
                michal = this;
                entity = global;
                tangon = entity.Object;
                zuuluu = tangon.entries;
                entity = michal.keyMap;
                entity = zuuluu.bind(tangon)(entity);
                michal['_cachedKeyMapEntries'] = entity;
                entity = undefined;
                return entity;
            };
            entity['value'] = oscard;
            michal[1] = entity;
            entity = {};
            oscard = '_setCachedKeyLayoutMapEntries';
            entity['key'] = oscard;
            oscard = function() { // Original name: value
                michal = this;
                entity = global;
                tangon = entity.Array;
                zuuluu = tangon.from;
                entity = michal.getLayoutMap;
                report = entity.bind(michal)();
                entity = report.entries;
                entity = entity.bind(report)();
                entity = zuuluu.bind(tangon)(entity);
                michal['_cachedKeyLayoutMapEntries'] = entity;
                entity = undefined;
                return entity;
            };
            entity['value'] = oscard;
            michal[2] = entity;
            entity = {};
            oscard = 'cachedKeyCodeMapEntries';
            entity['key'] = oscard;
            oscard = function() { // Original name: get
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = this;
                    michal = entity._cachedKeyCodeMapEntries;
                    zuuluu = michal.length;
                    michal = 0;
                    if(!(michal === zuuluu)) { _fun00032_ip = 30; continue _fun00031 }
 20:
                    michal = entity._setCachedKeyCodeMapEntries;
                    michal = michal.bind(entity)();
 30:
                    entity = entity._cachedKeyCodeMapEntries;
                    return entity;
                }
            };
            entity['get'] = oscard;
            michal[3] = entity;
            entity = {};
            oscard = 'cachedKeyMapEntries';
            entity['key'] = oscard;
            oscard = function() { // Original name: get
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = this;
                    michal = entity._cachedKeyMapEntries;
                    zuuluu = michal.length;
                    michal = 0;
                    if(!(michal === zuuluu)) { _fun00034_ip = 30; continue _fun00033 }
 20:
                    michal = entity._setCachedKeyMapEntries;
                    michal = michal.bind(entity)();
 30:
                    entity = entity._cachedKeyMapEntries;
                    return entity;
                }
            };
            entity['get'] = oscard;
            michal[4] = entity;
            entity = {};
            oscard = 'cachedKeyLayoutMapEntries';
            entity['key'] = oscard;
            oscard = function() { // Original name: get
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    entity = this;
                    michal = entity._cachedKeyLayoutMapEntries;
                    zuuluu = michal.length;
                    michal = 0;
                    if(!(michal === zuuluu)) { _fun00036_ip = 30; continue _fun00035 }
 20:
                    michal = entity._setCachedKeyLayoutMapEntries;
                    michal = michal.bind(entity)();
 30:
                    entity = entity._cachedKeyLayoutMapEntries;
                    return entity;
                }
            };
            entity['get'] = oscard;
            michal[5] = entity;
            entity = {};
            oscard = 'cachedAllEvents';
            entity['key'] = oscard;
            oscard = function() { // Original name: get
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    entity = this;
                    michal = entity._cachedAllEvents;
                    zuuluu = michal.length;
                    michal = 0;
                    if(!(michal === zuuluu)) { _fun00038_ip = 30; continue _fun00037 }
 20:
                    michal = entity._setCachedKeyCodeMapEntries;
                    michal = michal.bind(entity)();
 30:
                    entity = entity._cachedAllEvents;
                    return entity;
                }
            };
            entity['get'] = oscard;
            michal[6] = entity;
            entity = {};
            oscard = 'getKeyCodeMapItem';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    michal = argFoo;
                    entity = this;
                    zuuluu = entity.keyCodeMap;
                    tangon = zuuluu[michal];
                    zuuluu = null;
                    if(!(zuuluu == tangon)) { _fun00040_ip = 36; continue _fun00039 }
 22:
                    tangon = entity.keyCodeMap;
                    zuuluu = new Array(0);
                    tangon[michal] = zuuluu;
 36:
                    entity = entity.keyCodeMap;
                    entity = entity[michal];
                    return entity;
                }
            };
            entity['value'] = oscard;
            michal[7] = entity;
            entity = {};
            oscard = '_buildKeyCodeMapFromKeyMap';
            entity['key'] = oscard;
            oscard = function() { // Original name: value
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    romeon = this;
                    entity = {};
                    michal = global;
                    tangon = michal.Object;
                    zuuluu = tangon.entries;
                    michal = romeon.keyMap;
                    yankee = zuuluu.bind(tangon)(michal);
                    michal = yankee.length;
                    offset = 0;
                    michal = offset < michal;
                    verify = true;
                    golfie = undefined;
                    oscard = 2;
                    report = 1;
                    tangon = null;
                    zuuluu = 0;
                    if(!michal) { _fun00042_ip = 152; continue _fun00041 }
 61:
                    foxtra = yankee[zuuluu];
                    michal = _closure1_slot5;
                    michal = michal.bind(golfie)(foxtra, oscard);
                    sizing = michal[offset];
                    kiloes = michal[report];
                    michal = entity[kiloes];
                    if(!(tangon == michal)) { _fun00042_ip = 95; continue _fun00041 }
 91:
                    michal = new Array(0);
 95:
                    entity[kiloes] = michal;
                    backup = entity[kiloes];
                    foxtra = backup.push;
                    michal = {};
                    michal['keyCode'] = kiloes;
                    michal['key'] = sizing;
                    kiloes = romeon.findCodeFromKeyboardLayoutMap;
                    kiloes = kiloes.bind(romeon)(sizing, verify);
                    michal['code'] = kiloes;
                    michal = foxtra.bind(backup)(michal);
                    zuuluu = zuuluu + 1;
                    michal = yankee.length;
                    if(zuuluu < michal) { _fun00042_ip = 61; continue _fun00041 }
 152:
                    return entity;
                }
            };
            entity['value'] = oscard;
            michal[8] = entity;
            entity = {};
            oscard = '_initializeInternalLayoutMap';
            entity['key'] = oscard;
            oscard = function() { // Original name: value
                zuuluu = this;
                michal = _closure1_slot21;
                entity = undefined;
                golfie = michal.bind(entity)();
                michal = global;
                report = michal.Map;
                oscard = michal.Array;
                tangon = oscard.from;
                michal = golfie.entries;
                michal = michal.bind(golfie)();
                option = tangon.bind(oscard)(michal);
                tangon = report.prototype;
                tangon = Object.create(tangon, {constructor: {value: report}});
                verify = tangon;
                michal = new verify[report](option, golfie);
                michal = michal instanceof Object ? michal : tangon;
                zuuluu['_internalKeyLayoutMap'] = michal;
                michal = zuuluu._setCachedKeyLayoutMapEntries;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            entity['value'] = oscard;
            michal[9] = entity;
            entity = {};
            oscard = '_hasExactMatch';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    entity = argFoo;
                    var _closure3_slot0 = entity;
                    zuuluu = this;
                    zuuluu = zuuluu.keyCodeMap;
                    entity = entity.keyCode;
                    tangon = zuuluu[entity];
                    entity = null;
                    entity = entity != tangon;
                    if(!entity) { _fun00044_ip = 55; continue _fun00043 }
 37:
                    zuuluu = tangon.some;
                    michal = function(argFoo) {
                        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                            zuuluu = argFoo;
                            tangon = zuuluu.key;
                            entity = _closure3_slot0;
                            entity = entity.key;
                            entity = tangon === entity;
                            if(!entity) { _fun00046_ip = 45; continue _fun00045 }
 27:
                            report = zuuluu.code;
                            tangon = _closure3_slot0;
                            tangon = tangon.code;
                            entity = report === tangon;
 45:
                            if(!entity) { _fun00046_ip = 68; continue _fun00045 }
 48:
                            zuuluu = zuuluu.keyCode;
                            michal = _closure3_slot0;
                            michal = michal.keyCode;
                            entity = zuuluu === michal;
 68:
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(tangon)(michal);
 55:
                    return entity;
                }
            };
            entity['value'] = oscard;
            michal[10] = entity;
            entity = {};
            oscard = 'addEvent';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    michal = argFoo;
                    zuuluu = this;
                    report = _closure1_slot22;
                    entity = undefined;
                    option = report.bind(entity)(michal);
                    oscard = zuuluu._internalKeyLayoutMap;
                    report = null;
                    if(!(report == oscard)) { _fun00048_ip = 42; continue _fun00047 }
 32:
                    oscard = zuuluu._initializeInternalLayoutMap;
                    oscard = oscard.bind(zuuluu)();
 42:
                    oscard = zuuluu._hasExactMatch;
                    oscard = oscard.bind(zuuluu)(option);
                    if(oscard) { _fun00048_ip = 377; continue _fun00047 }
 61:
                    golfie = michal.key;
                    oscard = golfie.toLowerCase;
                    golfie = oscard.bind(golfie)();
                    oscard = 'dead';
                    if(!(oscard !== golfie)) { _fun00048_ip = 377; continue _fun00047 }
 89:
                    golfie = zuuluu.keyMap;
                    oscard = michal.key;
                    oscard = golfie[oscard];
                    if(!(report != oscard)) { _fun00048_ip = 210; continue _fun00047 }
 108:
                    golfie = zuuluu.keyMap;
                    oscard = michal.key;
                    golfie = golfie[oscard];
                    oscard = michal.keyCode;
                    if(!(golfie !== oscard)) { _fun00048_ip = 231; continue _fun00047 }
 133:
                    verify = _closure1_slot9;
                    golfie = verify.error;
                    update = michal.key;
                    offset = zuuluu.keyMap;
                    oscard = michal.key;
                    result = offset[oscard];
                    sizing = michal.keyCode;
                    oscard = global;
                    oscard = oscard.HermesInternal;
                    romeon = oscard.concat;
                    source = 'KeyboardMapper - Key code mismatch for key ';
                    echoed = ': ';
                    output = ' !== ';
                    oscard = source[romeon](update, echoed, result, output, sizing, kiloes);
                    oscard = golfie.bind(verify)(oscard);
                    _fun00048_ip = 231; continue _fun00047;
 210:
                    verify = zuuluu.keyMap;
                    golfie = michal.key;
                    oscard = michal.keyCode;
                    verify[golfie] = oscard;
 231:
                    verify = zuuluu.keyCodeMap;
                    golfie = michal.keyCode;
                    offset = zuuluu.keyCodeMap;
                    oscard = michal.keyCode;
                    oscard = offset[oscard];
                    if(!(report == oscard)) { _fun00048_ip = 267; continue _fun00047 }
 263:
                    oscard = new Array(0);
 267:
                    verify[golfie] = oscard;
                    golfie = zuuluu.keyCodeMap;
                    oscard = michal.keyCode;
                    golfie = golfie[oscard];
                    oscard = golfie.push;
                    oscard = oscard.bind(golfie)(option);
                    option = zuuluu._internalKeyLayoutMap;
                    if(!(report != option)) { _fun00048_ip = 328; continue _fun00047 }
 307:
                    golfie = option.set;
                    oscard = michal.code;
                    report = michal.key;
                    report = golfie.bind(option)(oscard, report);
 328:
                    oscard = _closure1_slot9;
                    report = oscard.verbose;
                    tangon = {};
                    tangon['event'] = michal;
                    michal = 'KeyboardMapper - Key added';
                    michal = report.bind(oscard)(michal, tangon);
                    michal = zuuluu.updateCaches;
                    michal = michal.bind(zuuluu)();
                    michal = zuuluu.save;
                    michal = michal.bind(zuuluu)();
 377:
                    return entity;
                }
            };
            entity['value'] = oscard;
            michal[11] = entity;
            entity = {};
            oscard = 'save';
            entity['key'] = oscard;
            oscard = function() { // Original name: value
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                entity = 11;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                report = zuuluu.Storage;
                tangon = report.set;
                zuuluu = _closure1_slot11;
                michal = this;
                michal = michal.keyMap;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            entity['value'] = oscard;
            michal[12] = entity;
            entity = {};
            oscard = 'updateCaches';
            entity['key'] = oscard;
            oscard = function() { // Original name: value
                michal = this;
                entity = michal._setCachedKeyCodeMapEntries;
                entity = entity.bind(michal)();
                entity = michal._setCachedKeyMapEntries;
                entity = entity.bind(michal)();
                entity = michal._setCachedKeyLayoutMapEntries;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            entity['value'] = oscard;
            michal[13] = entity;
            entity = {};
            oscard = 'reset';
            entity['key'] = oscard;
            oscard = function() { // Original name: value
                zuuluu = this;
                entity = null;
                zuuluu['_internalKeyLayoutMap'] = entity;
                tangon = _closure1_slot23;
                michal = {};
                report = zuuluu._defaultKeyMap;
                oscard = michal;
                entity = copyDataProperties(oscard, report);
                entity = undefined;
                michal = tangon.bind(entity)(michal);
                zuuluu['keyMap'] = michal;
                michal = zuuluu._initializeInternalLayoutMap;
                michal = michal.bind(zuuluu)();
                michal = zuuluu._buildKeyCodeMapFromKeyMap;
                michal = michal.bind(zuuluu)();
                zuuluu['keyCodeMap'] = michal;
                michal = zuuluu.updateCaches;
                michal = michal.bind(zuuluu)();
                michal = zuuluu.save;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            entity['value'] = oscard;
            michal[14] = entity;
            entity = {};
            oscard = 'getLayoutMap';
            entity['key'] = oscard;
            oscard = function() { // Original name: value
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    entity = this;
                    zuuluu = entity._internalKeyLayoutMap;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00050_ip = 23; continue _fun00049 }
 15:
                    entity = entity._internalKeyLayoutMap;
                    _fun00050_ip = 36; continue _fun00049;
 23:
                    zuuluu = _closure1_slot21;
                    michal = undefined;
                    entity = zuuluu.bind(michal)();
 36:
                    return entity;
                }
            };
            entity['value'] = oscard;
            michal[15] = entity;
            entity = {};
            oscard = 'getKeyCode';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                entity = this;
                michal = entity.keyMap;
                entity = argFoo;
                entity = michal[entity];
                return entity;
            };
            entity['value'] = oscard;
            michal[16] = entity;
            entity = {};
            oscard = 'findCodeFromKeyboardLayoutMap';
            entity['key'] = oscard;
            report = function(argFoo) { // Original name: value
                _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                    entity = argFoo;
                    tangon = arguments[1];
                    var _closure3_slot0 = entity;
                    michal = undefined;
                    if(!(tangon === michal)) { _fun00052_ip = 20; continue _fun00051 }
 18:
                    tangon = false;
 20:
                    report = this;
                    report = report.cachedKeyLayoutMapEntries;
                    if(!tangon) { _fun00052_ip = 73; continue _fun00051 }
 34:
                    tangon = global;
                    golfie = tangon.Array;
                    oscard = golfie.from;
                    tangon = _closure1_slot21;
                    option = tangon.bind(michal)();
                    tangon = option.entries;
                    tangon = tangon.bind(option)();
                    report = oscard.bind(golfie)(tangon);
 73:
                    tangon = report.find;
                    zuuluu = function(argFoo) {
                        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                            tangon = argFoo;
                            entity = tangon[Symbol.iterator];
                            tangon = entity().next;
                            michal = tangon().value;
                            michal = entity;
                            oscard = undefined;
                            zuuluu = michal === oscard;
                            michal = undefined;
                            if(zuuluu) { _fun00054_ip = 49; continue _fun00053 }
 24:
                            report = tangon().value;
                            tangon = entity;
                            tangon = tangon === oscard;
                            michal = undefined;
                            zuuluu = tangon;
                            if(tangon) { _fun00054_ip = 49; continue _fun00053 }
 43:
                            michal = report;
                            zuuluu = tangon;
 49:
                            if(zuuluu) { _fun00054_ip = 55; continue _fun00053 }
 52:
                            entity.return();
 55:
                            entity = _closure3_slot0;
                            entity = michal === entity;
                            return entity;
                        }
                    };
                    report = tangon.bind(report)(zuuluu);
                    zuuluu = null;
                    tangon = zuuluu == report;
                    michal = undefined;
                    if(tangon) { _fun00052_ip = 107; continue _fun00051 }
 101:
                    tangon = 0;
                    michal = report[tangon];
 107:
                    if(!(zuuluu != michal)) { _fun00052_ip = 114; continue _fun00051 }
 111:
                    entity = michal;
 114:
                    return entity;
                }
            };
            entity['value'] = report;
            michal[17] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        yankee = option.bind(entity)();
        option = function(argFoo) {
            tangon = function() { // Original name: KeyboardMapper
                _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                    tangon = this;
                    zuuluu = undefined;
                    report = undefined;
                    entity = _closure1_slot7;
                    michal = _closure2_slot0;
                    entity = entity.bind(zuuluu)(tangon, michal);
                    entity = _closure1_slot3;
                    verify = entity.bind(zuuluu)(michal);
                    michal = _closure1_slot2;
                    entity = _closure1_slot18;
                    entity = entity.bind(zuuluu)();
                    if(entity) { _fun00056_ip = 69; continue _fun00055 }
 51:
                    golfie = verify.apply;
                    report = arguments;
                    entity = report;
                    entity = golfie.bind(verify)(tangon, entity);
                    _fun00056_ip = 105; continue _fun00055;
 69:
                    golfie = global;
                    option = golfie.Reflect;
                    golfie = option.construct;
                    oscard = _closure1_slot3;
                    oscard = oscard.bind(zuuluu)(tangon);
                    oscard = oscard.constructor;
                    report = arguments;
                    entity = golfie.bind(option)(verify, report, oscard);
 105:
                    entity = michal.bind(zuuluu)(tangon, entity);
                    return entity;
                }
            };
            var _closure2_slot0 = tangon;
            report = _closure1_slot4;
            zuuluu = undefined;
            michal = argFoo;
            michal = report.bind(zuuluu)(tangon, michal);
            michal = _closure1_slot8;
            report = {};
            entity = 'getKeyString';
            report['key'] = entity;
            entity = function(argFoo, argBar) { // Original name: value
                _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                    tangon = argFoo;
                    michal = this;
                    var _closure3_slot0 = michal;
                    var _closure3_slot1 = tangon;
                    zuuluu = argBar;
                    var _closure3_slot2 = zuuluu;
                    zuuluu = michal.getKeyCodeMapItem;
                    zuuluu = zuuluu.bind(michal)(tangon);
                    report = zuuluu.length;
                    tangon = 0;
                    if(!(tangon === report)) { _fun00058_ip = 85; continue _fun00057 }
 45:
                    report = michal.cachedKeyMapEntries;
                    tangon = report.filter;
                    michal = function(argFoo) {
                        _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                            tangon = argFoo;
                            michal = tangon[Symbol.iterator];
                            tangon = michal().next;
                            entity = tangon().value;
                            entity = michal;
                            oscard = undefined;
                            zuuluu = entity === oscard;
                            entity = undefined;
                            if(zuuluu) { _fun00060_ip = 49; continue _fun00059 }
 24:
                            report = tangon().value;
                            tangon = michal;
                            tangon = tangon === oscard;
                            entity = undefined;
                            zuuluu = tangon;
                            if(tangon) { _fun00060_ip = 49; continue _fun00059 }
 43:
                            entity = report;
                            zuuluu = tangon;
 49:
                            if(zuuluu) { _fun00060_ip = 55; continue _fun00059 }
 52:
                            michal.return();
 55:
                            entity = entity == entity;
                            return entity;
                        }
                    };
                    report = tangon.bind(report)(michal);
                    tangon = report.map;
                    michal = function(argFoo) {
                        _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                            tangon = argFoo;
                            entity = tangon[Symbol.iterator];
                            tangon = entity().next;
                            michal = tangon().value;
                            zuuluu = entity;
                            golfie = undefined;
                            zuuluu = zuuluu === golfie;
                            report = undefined;
                            if(zuuluu) { _fun00062_ip = 27; continue _fun00061 }
 24:
                            report = michal;
 27:
                            michal = undefined;
                            if(zuuluu) { _fun00062_ip = 57; continue _fun00061 }
 32:
                            oscard = tangon().value;
                            tangon = entity;
                            tangon = tangon === golfie;
                            michal = undefined;
                            zuuluu = tangon;
                            if(tangon) { _fun00062_ip = 57; continue _fun00061 }
 51:
                            michal = oscard;
                            zuuluu = tangon;
 57:
                            if(zuuluu) { _fun00062_ip = 63; continue _fun00061 }
 60:
                            entity.return();
 63:
                            entity = {};
                            entity['key'] = report;
                            entity['keyCode'] = michal;
                            tangon = _closure3_slot2;
                            michal = null;
                            if(!(michal == tangon)) { _fun00062_ip = 104; continue _fun00061 }
 87:
                            tangon = _closure3_slot0;
                            michal = tangon.findCodeFromKeyboardLayoutMap;
                            michal = michal.bind(tangon)(report);
                            _fun00062_ip = 108; continue _fun00061;
 104:
                            michal = _closure3_slot2;
 108:
                            entity['code'] = michal;
                            return entity;
                        }
                    };
                    zuuluu = tangon.bind(report)(michal);
 85:
                    michal = zuuluu.find;
                    entity = function(argFoo) {
                        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                            tangon = argFoo;
                            michal = tangon.keyCode;
                            entity = _closure3_slot1;
                            report = michal === entity;
                            oscard = _closure3_slot2;
                            michal = null;
                            entity = report;
                            if(!(michal != oscard)) { _fun00064_ip = 55; continue _fun00063 }
 33:
                            michal = report;
                            if(!report) { _fun00064_ip = 52; continue _fun00063 }
 39:
                            tangon = tangon.code;
                            zuuluu = _closure3_slot2;
                            michal = tangon === zuuluu;
 52:
                            entity = michal;
 55:
                            return entity;
                        }
                    };
                    michal = michal.bind(zuuluu)(entity);
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00058_ip = 118; continue _fun00057 }
 113:
                    entity = michal.key;
 118:
                    return entity;
                }
            };
            report['value'] = entity;
            entity = new Array(5);
            entity[0] = report;
            report = {};
            golfie = 'findExactKeyboardEventMatch';
            report['key'] = golfie;
            golfie = function(argFoo, argBar, argBaz) { // Original name: value
                _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                    tangon = argFoo;
                    report = argBar;
                    michal = this;
                    var _closure3_slot0 = tangon;
                    var _closure3_slot1 = report;
                    zuuluu = argBaz;
                    var _closure3_slot2 = zuuluu;
                    zuuluu = null;
                    if(!(zuuluu == report)) { _fun00066_ip = 47; continue _fun00065 }
 32:
                    zuuluu = michal.findCodeFromKeyboardLayoutMap;
                    zuuluu = zuuluu.bind(michal)(tangon);
                    _closure3_slot1 = zuuluu;
 47:
                    tangon = michal.cachedAllEvents;
                    zuuluu = tangon.filter;
                    michal = function(argFoo) {
                        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                            tangon = argFoo;
                            michal = tangon.key;
                            entity = _closure3_slot0;
                            report = michal === entity;
                            oscard = _closure3_slot1;
                            michal = null;
                            entity = report;
                            if(!(michal != oscard)) { _fun00068_ip = 54; continue _fun00067 }
 32:
                            michal = report;
                            if(!report) { _fun00068_ip = 51; continue _fun00067 }
 38:
                            tangon = tangon.code;
                            zuuluu = _closure3_slot1;
                            michal = tangon === zuuluu;
 51:
                            entity = michal;
 54:
                            return entity;
                        }
                    };
                    zuuluu = zuuluu.bind(tangon)(michal);
                    tangon = zuuluu.length;
                    michal = 0;
                    if(!(michal === tangon)) { _fun00066_ip = 85; continue _fun00065 }
 81:
                    michal = undefined;
                    return michal;
 85:
                    michal = zuuluu.find;
                    entity = function(argFoo) {
                        _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                            tangon = argFoo;
                            michal = tangon.key;
                            entity = _closure3_slot0;
                            report = michal === entity;
                            if(!report) { _fun00070_ip = 36; continue _fun00069 }
 22:
                            michal = tangon.keyCode;
                            entity = _closure3_slot2;
                            report = michal === entity;
 36:
                            oscard = _closure3_slot1;
                            michal = null;
                            entity = report;
                            if(!(michal != oscard)) { _fun00070_ip = 71; continue _fun00069 }
 49:
                            michal = report;
                            if(!report) { _fun00070_ip = 68; continue _fun00069 }
 55:
                            tangon = tangon.code;
                            zuuluu = _closure3_slot1;
                            michal = tangon === zuuluu;
 68:
                            entity = michal;
 71:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[1] = report;
            report = {};
            golfie = 'findKeyboardEventByKey';
            report['key'] = golfie;
            golfie = function(argFoo, argBar, argBaz) { // Original name: value
                _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                    report = argFoo;
                    zuuluu = argBar;
                    michal = this;
                    var _closure3_slot0 = report;
                    var _closure3_slot1 = zuuluu;
                    tangon = argBaz;
                    var _closure3_slot2 = tangon;
                    tangon = null;
                    if(!(tangon == zuuluu)) { _fun00072_ip = 47; continue _fun00071 }
 32:
                    zuuluu = michal.findCodeFromKeyboardLayoutMap;
                    zuuluu = zuuluu.bind(michal)(report);
                    _closure3_slot1 = zuuluu;
 47:
                    report = michal.cachedAllEvents;
                    zuuluu = report.filter;
                    michal = function(argFoo) {
                        _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                            tangon = argFoo;
                            michal = tangon.key;
                            entity = _closure3_slot0;
                            report = michal === entity;
                            oscard = _closure3_slot1;
                            michal = null;
                            entity = report;
                            if(!(michal != oscard)) { _fun00074_ip = 54; continue _fun00073 }
 32:
                            michal = report;
                            if(!report) { _fun00074_ip = 51; continue _fun00073 }
 38:
                            tangon = tangon.code;
                            zuuluu = _closure3_slot1;
                            michal = tangon === zuuluu;
 51:
                            entity = michal;
 54:
                            return entity;
                        }
                    };
                    zuuluu = zuuluu.bind(report)(michal);
                    report = zuuluu.length;
                    michal = 0;
                    if(!(michal === report)) { _fun00072_ip = 85; continue _fun00071 }
 81:
                    report = undefined;
                    return report;
 85:
                    report = zuuluu.find;
                    entity = function(argFoo) {
                        _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                            tangon = argFoo;
                            michal = tangon.key;
                            entity = _closure3_slot0;
                            report = michal === entity;
                            if(!report) { _fun00076_ip = 36; continue _fun00075 }
 22:
                            michal = tangon.keyCode;
                            entity = _closure3_slot2;
                            report = michal === entity;
 36:
                            oscard = _closure3_slot1;
                            michal = null;
                            entity = report;
                            if(!(michal != oscard)) { _fun00076_ip = 71; continue _fun00075 }
 49:
                            michal = report;
                            if(!report) { _fun00076_ip = 68; continue _fun00075 }
 55:
                            tangon = tangon.code;
                            zuuluu = _closure3_slot1;
                            michal = tangon === zuuluu;
 68:
                            entity = michal;
 71:
                            return entity;
                        }
                    };
                    entity = report.bind(zuuluu)(entity);
                    if(!(tangon == entity)) { _fun00072_ip = 110; continue _fun00071 }
 106:
                    entity = zuuluu[michal];
 110:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[2] = report;
            report = {};
            golfie = 'findKeyboardEventByKeyCode';
            report['key'] = golfie;
            golfie = function(argFoo, argBar) { // Original name: value
                _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                    oscard = argFoo;
                    report = argBar;
                    tangon = this;
                    var _closure3_slot0 = oscard;
                    var _closure3_slot1 = report;
                    entity = tangon.getKeyString;
                    michal = entity.bind(tangon)(oscard, report);
                    entity = null;
                    golfie = entity == michal;
                    if(!golfie) { _fun00078_ip = 46; continue _fun00077 }
 42:
                    golfie = entity != report;
 46:
                    if(!golfie) { _fun00078_ip = 69; continue _fun00077 }
 49:
                    golfie = tangon.getLayoutMap;
                    option = golfie.bind(tangon)();
                    golfie = option.get;
                    michal = golfie.bind(option)(report);
 69:
                    if(!(entity == michal)) { _fun00078_ip = 118; continue _fun00077 }
 73:
                    golfie = tangon.getKeyCodeMapItem;
                    option = golfie.bind(tangon)(oscard);
                    golfie = option.find;
                    zuuluu = function(argFoo) {
                        _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                            tangon = argFoo;
                            michal = tangon.keyCode;
                            entity = _closure3_slot0;
                            report = michal === entity;
                            oscard = _closure3_slot1;
                            michal = null;
                            entity = report;
                            if(!(michal != oscard)) { _fun00080_ip = 55; continue _fun00079 }
 33:
                            michal = report;
                            if(!report) { _fun00080_ip = 52; continue _fun00079 }
 39:
                            tangon = tangon.code;
                            zuuluu = _closure3_slot1;
                            michal = tangon === zuuluu;
 52:
                            entity = michal;
 55:
                            return entity;
                        }
                    };
                    golfie = golfie.bind(option)(zuuluu);
                    option = entity == golfie;
                    zuuluu = undefined;
                    if(option) { _fun00078_ip = 115; continue _fun00077 }
 110:
                    zuuluu = golfie.key;
 115:
                    michal = zuuluu;
 118:
                    if(!(entity != michal)) { _fun00078_ip = 137; continue _fun00077 }
 122:
                    entity = tangon.findKeyboardEventByKey;
                    entity = entity.bind(tangon)(michal, report, oscard);
                    _fun00078_ip = 152; continue _fun00077;
 137:
                    zuuluu = tangon.getDefaultKeyboardEventShape;
                    michal = undefined;
                    entity = zuuluu.bind(tangon)(michal, oscard, report);
 152:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[3] = report;
            report = {};
            golfie = 'getDefaultKeyboardEventShape';
            report['key'] = golfie;
            oscard = function(argFoo, argBar, argBaz) { // Original name: value
                _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
                    zuuluu = argFoo;
                    option = argBar;
                    tangon = argBaz;
                    golfie = this;
                    report = null;
                    michal = report == zuuluu;
                    entity = undefined;
                    oscard = undefined;
                    if(michal) { _fun00082_ip = 35; continue _fun00081 }
 25:
                    michal = zuuluu.toLocaleUpperCase;
                    oscard = michal.bind(zuuluu)();
 35:
                    if(!(report == oscard)) { _fun00082_ip = 138; continue _fun00081 }
 39:
                    if(!(report == option)) { _fun00082_ip = 45; continue _fun00081 }
 43:
                    return entity;
 45:
                    verify = golfie.cachedKeyMapEntries;
                    zuuluu = verify.find;
                    michal = function(argFoo) {
                        _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                            tangon = argFoo;
                            michal = tangon[Symbol.iterator];
                            tangon = michal().next;
                            entity = tangon().value;
                            entity = michal;
                            oscard = undefined;
                            zuuluu = entity === oscard;
                            entity = undefined;
                            if(zuuluu) { _fun00084_ip = 49; continue _fun00083 }
 24:
                            report = tangon().value;
                            tangon = michal;
                            tangon = tangon === oscard;
                            entity = undefined;
                            zuuluu = tangon;
                            if(tangon) { _fun00084_ip = 49; continue _fun00083 }
 43:
                            entity = report;
                            zuuluu = tangon;
 49:
                            if(zuuluu) { _fun00084_ip = 55; continue _fun00083 }
 52:
                            michal.return();
 55:
                            entity = entity == entity;
                            return entity;
                        }
                    };
                    zuuluu = zuuluu.bind(verify)(michal);
                    michal = report == zuuluu;
                    offset = undefined;
                    if(michal) { _fun00082_ip = 85; continue _fun00081 }
 79:
                    michal = 0;
                    offset = zuuluu[michal];
 85:
                    if(!(report != offset)) { _fun00082_ip = 136; continue _fun00081 }
 89:
                    zuuluu = _closure1_slot22;
                    michal = {};
                    michal['keyCode'] = option;
                    michal['key'] = offset;
                    option = tangon;
                    if(!(report == tangon)) { _fun00082_ip = 125; continue _fun00081 }
 114:
                    verify = golfie.findCodeFromKeyboardLayoutMap;
                    option = verify.bind(golfie)(offset);
 125:
                    michal['code'] = option;
                    michal = zuuluu.bind(entity)(michal);
                    return michal;
 136:
                    return entity;
 138:
                    michal = golfie.keyMap;
                    option = michal[oscard];
                    if(!(report != option)) { _fun00082_ip = 196; continue _fun00081 }
 152:
                    zuuluu = _closure1_slot22;
                    michal = {};
                    michal['keyCode'] = option;
                    michal['key'] = oscard;
                    if(!(report == tangon)) { _fun00082_ip = 185; continue _fun00081 }
 174:
                    report = golfie.findCodeFromKeyboardLayoutMap;
                    tangon = report.bind(golfie)(oscard);
 185:
                    michal['code'] = tangon;
                    michal = zuuluu.bind(entity)(michal);
                    return michal;
 196:
                    return entity;
                }
            };
            report['value'] = oscard;
            entity[4] = report;
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        };
        option = option.bind(entity)(yankee);
        var _closure1_slot15 = option;
        option = null;
        var _closure1_slot16 = option;
        var _closure1_slot17 = option;
        option = 12;
        option = offset[option];
        offset = verify.bind(entity)(option);
        verify = offset.fileFinishedImporting;
        option = 'utils/web/KeyboardLayoutMapUtils.tsx';
        option = verify.bind(offset)(option);
        zuuluu['DefaultKeyboardLayout'] = golfie;
        zuuluu['initializeKeyboardMapper'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: __DEV_overrideLayoutMapKey
            _fun00085: for(var _fun00086_ip = 0; ; ) switch(_fun00086_ip) {
 0:
                report = _closure1_slot14;
                tangon = report._set;
                zuuluu = argFoo;
                entity = argBar;
                entity = tangon.bind(report)(zuuluu, entity);
                tangon = _closure1_slot16;
                entity = null;
                if(!(entity != tangon)) { _fun00086_ip = 45; continue _fun00085 }
 35:
                zuuluu = tangon._initializeInternalLayoutMap;
                zuuluu = zuuluu.bind(tangon)();
 45:
                michal = _closure1_slot16;
                if(!(entity != michal)) { _fun00086_ip = 63; continue _fun00085 }
 53:
                entity = michal.updateCaches;
                entity = entity.bind(michal)();
 63:
                entity = undefined;
                return entity;
            }
        };
        zuuluu['__DEV_overrideLayoutMapKey'] = oscard;
        zuuluu['getKeyboardMapper'] = report;
        report = function() { // Original name: resetKeyboardMapper
            entity = undefined;
            tangon = _closure1_slot26;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        zuuluu['resetKeyboardMapper'] = report;
        report = function() { // Original name: getLayoutMap
            _fun00087: for(var _fun00088_ip = 0; ; ) switch(_fun00088_ip) {
 0:
                entity = arguments[0];
                zuuluu = undefined;
                if(!(entity === zuuluu)) { _fun00088_ip = 11; continue _fun00087 }
 9:
                entity = false;
 11:
                if(entity) { _fun00088_ip = 60; continue _fun00087 }
 17:
                entity = _closure1_slot25;
                oscard = entity.bind(zuuluu)();
                tangon = null;
                report = tangon == oscard;
                entity = undefined;
                if(report) { _fun00088_ip = 46; continue _fun00087 }
 36:
                report = oscard.getLayoutMap;
                entity = report.bind(oscard)();
 46:
                if(!(tangon == entity)) { _fun00088_ip = 58; continue _fun00087 }
 50:
                tangon = _closure1_slot21;
                entity = tangon.bind(zuuluu)();
 58:
                _fun00088_ip = 68; continue _fun00087;
 60:
                michal = _closure1_slot21;
                entity = michal.bind(zuuluu)();
 68:
                return entity;
            }
        };
        zuuluu['getLayoutMap'] = report;
        zuuluu['reverseLookupCodeFromKey'] = tangon;
        tangon = function(argFoo) { // Original name: getExactKeyboardEventMatchFromAny
            _fun00089: for(var _fun00090_ip = 0; ; ) switch(_fun00090_ip) {
 0:
                zuuluu = _closure1_slot22;
                michal = undefined;
                entity = argFoo;
                zuuluu = zuuluu.bind(michal)(entity);
                entity = zuuluu.key;
                tangon = null;
                oscard = tangon != entity;
                entity = null;
                if(!oscard) { _fun00090_ip = 93; continue _fun00089 }
 33:
                report = _closure1_slot25;
                option = report.bind(michal)();
                report = tangon == option;
                michal = undefined;
                if(report) { _fun00090_ip = 81; continue _fun00089 }
 50:
                golfie = option.findExactKeyboardEventMatch;
                oscard = zuuluu.key;
                report = zuuluu.code;
                zuuluu = zuuluu.keyCode;
                michal = golfie.bind(option)(oscard, report, zuuluu);
 81:
                zuuluu = tangon != michal;
                entity = null;
                if(!zuuluu) { _fun00090_ip = 93; continue _fun00089 }
 90:
                entity = michal;
 93:
                return entity;
            }
        };
        zuuluu['getExactKeyboardEventMatchFromAny'] = tangon;
        tangon = function(argFoo) { // Original name: getKeyboardEventShapeFromAny
            _fun00091: for(var _fun00092_ip = 0; ; ) switch(_fun00092_ip) {
 0:
                michal = _closure1_slot22;
                zuuluu = undefined;
                entity = argFoo;
                tangon = michal.bind(zuuluu)(entity);
                entity = tangon.key;
                michal = null;
                if(!(michal == entity)) { _fun00092_ip = 97; continue _fun00091 }
 28:
                entity = tangon.keyCode;
                oscard = michal != entity;
                entity = null;
                if(!oscard) { _fun00092_ip = 95; continue _fun00091 }
 43:
                oscard = _closure1_slot25;
                offset = oscard.bind(zuuluu)();
                golfie = michal == offset;
                oscard = undefined;
                if(golfie) { _fun00092_ip = 83; continue _fun00091 }
 60:
                verify = offset.findKeyboardEventByKeyCode;
                option = tangon.keyCode;
                golfie = tangon.code;
                oscard = verify.bind(offset)(option, golfie);
 83:
                golfie = michal != oscard;
                entity = null;
                if(!golfie) { _fun00092_ip = 95; continue _fun00091 }
 92:
                entity = oscard;
 95:
                _fun00092_ip = 158; continue _fun00091;
 97:
                report = _closure1_slot25;
                option = report.bind(zuuluu)();
                report = michal == option;
                zuuluu = undefined;
                if(report) { _fun00092_ip = 143; continue _fun00091 }
 114:
                golfie = option.findKeyboardEventByKey;
                oscard = tangon.key;
                report = tangon.code;
                tangon = tangon.keyCode;
                zuuluu = golfie.bind(option)(oscard, report, tangon);
 143:
                tangon = michal != zuuluu;
                michal = null;
                if(!tangon) { _fun00092_ip = 155; continue _fun00091 }
 152:
                michal = zuuluu;
 155:
                entity = michal;
 158:
                return entity;
            }
        };
        zuuluu['getKeyboardEventShapeFromAny'] = tangon;
        tangon = function(argFoo) { // Original name: getKeyboardEventShapeFromKey
            _fun00093: for(var _fun00094_ip = 0; ; ) switch(_fun00094_ip) {
 0:
                michal = argFoo;
                report = undefined;
                verify = undefined;
                option = undefined;
                golfie = undefined;
                offset = undefined;
                tangon = undefined;
                entity = michal.toLocaleUpperCase;
                michal = entity.bind(michal)();
                verify = michal;
                entity = _closure1_slot27;
                option = entity.bind(report)(michal);
                entity = _closure1_slot25;
                foxtra = entity.bind(report)();
                michal = null;
                entity = michal == foxtra;
                oscard = undefined;
                if(entity) { _fun00094_ip = 77; continue _fun00093 }
 59:
                romeon = foxtra.findKeyboardEventByKey;
                yankee = verify;
                entity = option;
                oscard = romeon.bind(foxtra)(yankee, entity);
 77:
                yankee = michal != oscard;
                entity = null;
                if(!yankee) { _fun00094_ip = 89; continue _fun00093 }
 86:
                entity = oscard;
 89:
                if(!(michal == entity)) { _fun00094_ip = 237; continue _fun00093 }
 96: // try_start_0
                oscard = _closure1_slot25;
                oscard = oscard.bind(report)();
                offset = oscard;
                yankee = michal == oscard;
                oscard = undefined;
                if(yankee) { _fun00094_ip = 132; continue _fun00093 }
 116:
                yankee = offset;
                offset = yankee.getDefaultKeyboardEventShape;
                oscard = offset.bind(yankee)(verify, report, option);
 132:
                golfie = oscard;
                option = michal != oscard;
                oscard = null;
                if(!option) { _fun00094_ip = 147; continue _fun00093 }
 144:
                oscard = golfie;
 147:
                tangon = oscard;
                if(!(michal != oscard)) { _fun00094_ip = 231; continue _fun00093 }
 154:
                oscard = global;
                option = oscard.KeyboardEvent;
                kiloes = tangon;
                tangon = option.prototype;
                oscard = Object.create(tangon, {constructor: {value: option}});
                sizing = 'keydown';
                output = oscard;
                tangon = new output[option](sizing, kiloes, backup);
                oscard = tangon instanceof Object ? tangon : oscard;
                tangon = _closure1_slot22;
                zuuluu = {};
                golfie = oscard.keyCode;
                zuuluu['keyCode'] = golfie;
                golfie = oscard.key;
                zuuluu['key'] = golfie;
                oscard = oscard.code;
                zuuluu['code'] = oscard;
                zuuluu = tangon.bind(report)(zuuluu);
 229: // try_end0
                return zuuluu;
 231:
                return michal;
 233: // catch_target0
                CatchBlockStart(arg_register=2);
                return michal;
 237:
                return entity;
            }
        };
        zuuluu['getKeyboardEventShapeFromKey'] = tangon;
        michal = function(argFoo) { // Original name: getKeyboardEventShapeFromKeycode
            _fun00095: for(var _fun00096_ip = 0; ; ) switch(_fun00096_ip) {
 0:
                option = argFoo;
                report = undefined;
                golfie = undefined;
                verify = undefined;
                tangon = undefined;
                entity = _closure1_slot25;
                yankee = entity.bind(report)();
                michal = null;
                entity = michal == yankee;
                oscard = undefined;
                if(entity) { _fun00096_ip = 47; continue _fun00095 }
 33:
                offset = yankee.findKeyboardEventByKeyCode;
                entity = option;
                oscard = offset.bind(yankee)(entity);
 47:
                offset = michal != oscard;
                entity = null;
                if(!offset) { _fun00096_ip = 59; continue _fun00095 }
 56:
                entity = oscard;
 59:
                if(!(michal == entity)) { _fun00096_ip = 206; continue _fun00095 }
 66: // try_start_0
                oscard = _closure1_slot25;
                oscard = oscard.bind(report)();
                verify = oscard;
                offset = michal == oscard;
                oscard = undefined;
                if(offset) { _fun00096_ip = 101; continue _fun00095 }
 86:
                offset = verify;
                verify = offset.getDefaultKeyboardEventShape;
                oscard = verify.bind(offset)(report, option);
 101:
                golfie = oscard;
                option = michal != oscard;
                oscard = null;
                if(!option) { _fun00096_ip = 116; continue _fun00095 }
 113:
                oscard = golfie;
 116:
                tangon = oscard;
                if(!(michal != oscard)) { _fun00096_ip = 200; continue _fun00095 }
 123:
                oscard = global;
                option = oscard.KeyboardEvent;
                romeon = tangon;
                tangon = option.prototype;
                oscard = Object.create(tangon, {constructor: {value: option}});
                foxtra = 'keydown';
                backup = oscard;
                tangon = new backup[option](foxtra, romeon, yankee);
                oscard = tangon instanceof Object ? tangon : oscard;
                tangon = _closure1_slot22;
                zuuluu = {};
                golfie = oscard.keyCode;
                zuuluu['keyCode'] = golfie;
                golfie = oscard.key;
                zuuluu['key'] = golfie;
                oscard = oscard.code;
                zuuluu['code'] = oscard;
                zuuluu = tangon.bind(report)(zuuluu);
 198: // try_end0
                return zuuluu;
 200:
                return michal;
 202: // catch_target0
                CatchBlockStart(arg_register=2);
                return michal;
 206:
                return entity;
            }
        };
        zuuluu['getKeyboardEventShapeFromKeycode'] = michal;
        return entity;
    }
})();