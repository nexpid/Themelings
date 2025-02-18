// app/utils/web/KeyboardUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        option = argBar;
        backup = argBaz;
        zuuluu = argFre;
        verify = argPlu;
        entity = argFoo;
        var _closure1_slot0 = entity;
        var _closure1_slot1 = option;
        var _closure1_slot2 = backup;
        var _closure1_slot3 = verify;
        oscard = function() { // Original name: getEnv
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure1_slot1;
                entity = _closure1_slot3;
                report = 2;
                entity = entity[report];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = zuuluu.isLinux;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 130; continue _fun00003 }
 38:
                zuuluu = _closure1_slot1;
                entity = _closure1_slot3;
                entity = entity[report];
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = zuuluu.isMac;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 118; continue _fun00003 }
 68:
                zuuluu = _closure1_slot1;
                entity = _closure1_slot3;
                entity = entity[report];
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = zuuluu.isWindows;
                entity = entity.bind(zuuluu)();
                zuuluu = _closure1_slot9;
                if(entity) { _fun00004_ip = 110; continue _fun00003 }
 102:
                entity = zuuluu.BROWSER;
                _fun00004_ip = 116; continue _fun00003;
 110:
                entity = zuuluu.WINDOWS;
 116:
                _fun00004_ip = 128; continue _fun00003;
 118:
                zuuluu = _closure1_slot9;
                entity = zuuluu.MACOS;
 128:
                _fun00004_ip = 140; continue _fun00003;
 130:
                michal = _closure1_slot9;
                entity = michal.LINUX;
 140:
                return entity;
            }
        };
        var _closure1_slot18 = oscard;
        report = function(argFoo) { // Original name: codeToKey
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                golfie = argFoo;
                michal = golfie[Symbol.iterator];
                golfie = michal().next;
                option = undefined;
                zuuluu = undefined;
                oscard = undefined;
                verify = golfie().value;
                offset = michal;
                offset = offset === option;
                zuuluu = offset;
                if(offset) { _fun00006_ip = 32; continue _fun00005 }
 29:
                oscard = verify;
 32:
                oscard = undefined;
                verify = zuuluu;
                if(verify) { _fun00006_ip = 60; continue _fun00005 }
 40:
                verify = golfie().value;
                offset = michal;
                offset = offset === option;
                zuuluu = offset;
                if(offset) { _fun00006_ip = 60; continue _fun00005 }
 57:
                oscard = verify;
 60:
                tangon = oscard;
                oscard = undefined;
                verify = zuuluu;
                if(verify) { _fun00006_ip = 91; continue _fun00005 }
 71:
                golfie = golfie().value;
                verify = michal;
                verify = verify === option;
                zuuluu = verify;
                if(verify) { _fun00006_ip = 91; continue _fun00005 }
 88:
                oscard = golfie;
 91:
                report = oscard;
                oscard = zuuluu;
                if(oscard) { _fun00006_ip = 103; continue _fun00005 }
 100:
                michal.return();
 103:
                golfie = report;
                oscard = _closure1_slot9;
                oscard = oscard.LINUX;
                if(!(oscard !== golfie)) { _fun00006_ip = 243; continue _fun00005 }
 123:
                oscard = _closure1_slot9;
                oscard = oscard.MACOS;
                if(!(oscard !== golfie)) { _fun00006_ip = 227; continue _fun00005 }
 137:
                oscard = _closure1_slot9;
                oscard = oscard.WINDOWS;
                if(!(oscard !== golfie)) { _fun00006_ip = 211; continue _fun00005 }
 151:
                oscard = _closure1_slot9;
                oscard = oscard.BROWSER;
                if(!(oscard !== golfie)) { _fun00006_ip = 181; continue _fun00005 }
 165:
                golfie = _closure1_slot14;
                oscard = tangon;
                oscard = '' + oscard;
                oscard = golfie[oscard];
                return oscard;
 181:
                golfie = _closure1_slot2;
                verify = _closure1_slot3;
                oscard = 4;
                oscard = verify[oscard];
                golfie = golfie.bind(option)(oscard);
                oscard = tangon;
                oscard = golfie.bind(option)(oscard);
                return oscard;
 211:
                golfie = _closure1_slot13;
                oscard = tangon;
                oscard = '' + oscard;
                oscard = golfie[oscard];
                return oscard;
 227:
                golfie = _closure1_slot12;
                oscard = tangon;
                oscard = '' + oscard;
                oscard = golfie[oscard];
                return oscard;
 243:
                report = _closure1_slot11;
                tangon = '' + tangon;
                tangon = report[tangon];
                return tangon;
 256:
                CatchBlockStart(arg_register=0);
                if(zuuluu) { _fun00006_ip = 264; continue _fun00005 }
 261:
                michal.return();
 264:
                throw entity;
            }
        };
        var _closure1_slot19 = report;
        tangon = function(argFoo) { // Original name: keyToCode
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = argFoo;
                tangon = arguments[1];
                verify = arguments[2];
                report = undefined;
                if(!(tangon === report)) { _fun00008_ip = 26; continue _fun00007 }
 15:
                entity = _closure1_slot18;
                tangon = entity.bind(report)();
 26:
                if(!(verify === report)) { _fun00008_ip = 43; continue _fun00007 }
 30:
                entity = _closure1_slot5;
                verify = entity.KEYBOARD_KEY;
 43:
                zuuluu = _closure1_slot5;
                zuuluu = zuuluu.KEYBOARD_KEY;
                if(!(zuuluu !== verify)) { _fun00008_ip = 245; continue _fun00007 }
 63:
                zuuluu = _closure1_slot5;
                zuuluu = zuuluu.KEYBOARD_MODIFIER_KEY;
                if(!(zuuluu !== verify)) { _fun00008_ip = 245; continue _fun00007 }
 80:
                zuuluu = _closure1_slot5;
                zuuluu = zuuluu.MOUSE_BUTTON;
                if(!(zuuluu !== verify)) { _fun00008_ip = 205; continue _fun00007 }
 94:
                zuuluu = _closure1_slot5;
                zuuluu = zuuluu.GAMEPAD_BUTTON;
                if(!(zuuluu !== verify)) { _fun00008_ip = 165; continue _fun00007 }
 108:
                zuuluu = global;
                golfie = zuuluu.Error;
                zuuluu = zuuluu.HermesInternal;
                option = zuuluu.concat;
                oscard = 'Unrecognized DeviceType ';
                zuuluu = '.';
                yankee = option.bind(oscard)(verify, zuuluu);
                oscard = golfie.prototype;
                oscard = Object.create(oscard, {constructor: {value: golfie}});
                romeon = oscard;
                zuuluu = new romeon[golfie](yankee, offset);
                zuuluu = zuuluu instanceof Object ? zuuluu : oscard;
                throw zuuluu;
 165:
                zuuluu = global;
                golfie = zuuluu.parseInt;
                option = michal.replace;
                oscard = 'GAMEPAD';
                zuuluu = '';
                oscard = option.bind(michal)(oscard, zuuluu);
                zuuluu = 10;
                zuuluu = golfie.bind(report)(oscard, zuuluu);
                return zuuluu;
 205:
                zuuluu = global;
                golfie = zuuluu.parseInt;
                option = michal.replace;
                oscard = 'MOUSE';
                zuuluu = '';
                oscard = option.bind(michal)(oscard, zuuluu);
                zuuluu = 10;
                zuuluu = golfie.bind(report)(oscard, zuuluu);
                return zuuluu;
 245:
                zuuluu = _closure1_slot9;
                zuuluu = zuuluu.LINUX;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 414; continue _fun00007 }
 262:
                zuuluu = _closure1_slot9;
                zuuluu = zuuluu.MACOS;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 404; continue _fun00007 }
 279:
                zuuluu = _closure1_slot9;
                zuuluu = zuuluu.WINDOWS;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 394; continue _fun00007 }
 293:
                zuuluu = _closure1_slot9;
                zuuluu = zuuluu.BROWSER;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 317; continue _fun00007 }
 307:
                zuuluu = _closure1_slot10;
                zuuluu = zuuluu[michal];
                return zuuluu;
 317:
                tangon = _closure1_slot2;
                oscard = _closure1_slot3;
                zuuluu = 4;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(report)(zuuluu);
                golfie = michal.replace;
                oscard = /^(right|left) (shift|meta|ctrl|alt)$/;
                zuuluu = '$2';
                option = golfie.bind(michal)(oscard, zuuluu);
                golfie = option.replace;
                oscard = 'meta';
                zuuluu = 'command';
                zuuluu = golfie.bind(option)(oscard, zuuluu);
                zuuluu = tangon.bind(report)(zuuluu);
                return zuuluu;
 394:
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu[michal];
                return zuuluu;
 404:
                zuuluu = _closure1_slot7;
                zuuluu = zuuluu[michal];
                return zuuluu;
 414:
                entity = _closure1_slot6;
                entity = entity[michal];
                return entity;
            }
        };
        var _closure1_slot20 = tangon;
        golfie = global;
        romeon = golfie.Object;
        yankee = romeon.defineProperty;
        offset = {};
        entity = true;
        offset['value'] = entity;
        entity = '__esModule';
        entity = yankee.bind(romeon)(zuuluu, entity, offset);
        entity = 0;
        offset = verify[entity];
        entity = undefined;
        offset = backup.bind(entity)(offset);
        var _closure1_slot4 = offset;
        offset = 1;
        offset = verify[offset];
        offset = option.bind(entity)(offset);
        yankee = offset.KeyboardDeviceTypes;
        var _closure1_slot5 = yankee;
        sizing = offset.LinuxKeyToCode;
        var _closure1_slot6 = sizing;
        source = offset.MacosKeyToCode;
        var _closure1_slot7 = source;
        result = offset.WindowsKeyToCode;
        var _closure1_slot8 = result;
        offset = offset.KeyboardEnvs;
        var _closure1_slot9 = offset;
        foxtra = 2;
        offset = verify[foxtra];
        yankee = option.bind(entity)(offset);
        offset = yankee.isLinux;
        offset = offset.bind(yankee)();
        kiloes = sizing;
        if(offset) { _fun00002_ip = 263; continue _fun00001 }
 205:
        offset = verify[foxtra];
        yankee = option.bind(entity)(offset);
        offset = yankee.isMac;
        yankee = offset.bind(yankee)();
        offset = source;
        if(yankee) { _fun00002_ip = 260; continue _fun00001 }
 230:
        yankee = verify[foxtra];
        romeon = option.bind(entity)(yankee);
        yankee = romeon.isWindows;
        romeon = yankee.bind(romeon)();
        yankee = undefined;
        if(!romeon) { _fun00002_ip = 257; continue _fun00001 }
 254:
        yankee = result;
 257:
        offset = yankee;
 260:
        kiloes = offset;
 263:
        var _closure1_slot10 = kiloes;
        yankee = 3;
        offset = verify[yankee];
        romeon = backup.bind(entity)(offset);
        offset = romeon.invert;
        echoed = offset.bind(romeon)(sizing);
        var _closure1_slot11 = echoed;
        romeon = '`';
        offset = 223;
        echoed[offset] = romeon;
        output = golfie.Object;
        sizing = output.freeze;
        sizing = sizing.bind(output)(echoed);
        echoed = golfie.Object;
        output = echoed.freeze;
        sizing = verify[yankee];
        update = backup.bind(entity)(sizing);
        sizing = update.invert;
        sizing = sizing.bind(update)(source);
        sizing = output.bind(echoed)(sizing);
        var _closure1_slot12 = sizing;
        sizing = verify[yankee];
        output = backup.bind(entity)(sizing);
        sizing = output.invert;
        result = sizing.bind(output)(result);
        var _closure1_slot13 = result;
        result[offset] = romeon;
        output = golfie.Object;
        sizing = output.freeze;
        sizing = sizing.bind(output)(result);
        yankee = verify[yankee];
        backup = backup.bind(entity)(yankee);
        yankee = backup.invert;
        sizing = null;
        if(!(sizing == kiloes)) { _fun00002_ip = 431; continue _fun00001 }
 429:
        kiloes = {};
 431:
        yankee = yankee.bind(backup)(kiloes);
        var _closure1_slot14 = yankee;
        foxtra = verify[foxtra];
        backup = option.bind(entity)(foxtra);
        foxtra = backup.isMac;
        foxtra = foxtra.bind(backup)();
        if(foxtra) { _fun00002_ip = 466; continue _fun00001 }
 462:
        yankee[offset] = romeon;
 466:
        offset = golfie.Object;
        golfie = offset.freeze;
        golfie = golfie.bind(offset)(yankee);
        golfie = new Array(22);
        offset = ['META', '⌘'];
        golfie[0] = offset;
        offset = ['RIGHT META', 'RIGHT ⌘'];
        golfie[1] = offset;
        offset = ['SHIFT', '⇧'];
        golfie[2] = offset;
        offset = ['RIGHT SHIFT', 'RIGHT ⇧'];
        golfie[3] = offset;
        offset = ['ALT', '⌥'];
        golfie[4] = offset;
        offset = ['RIGHT ALT', 'RIGHT ⌥'];
        golfie[5] = offset;
        offset = ['CTRL', '⌃'];
        golfie[6] = offset;
        offset = ['RIGHT CTRL', 'RIGHT ⌃'];
        golfie[7] = offset;
        offset = ['ENTER', '↵'];
        golfie[8] = offset;
        offset = ['BACKSPACE', '⌫'];
        golfie[9] = offset;
        offset = ['DEL', '⌦'];
        golfie[10] = offset;
        offset = ['ESC', '⎋'];
        golfie[11] = offset;
        offset = ['PAGEUP', '⇞'];
        golfie[12] = offset;
        offset = ['PAGEDOWN', '⇟'];
        golfie[13] = offset;
        offset = ['UP', '↑'];
        golfie[14] = offset;
        offset = ['DOWN', '↓'];
        golfie[15] = offset;
        offset = ['LEFT', '←'];
        golfie[16] = offset;
        offset = ['RIGHT', '→'];
        golfie[17] = offset;
        offset = ['HOME', '↖'];
        golfie[18] = offset;
        offset = ['END', '↘'];
        golfie[19] = offset;
        offset = ['TAB', '⇥'];
        golfie[20] = offset;
        offset = ['SPACE', '␣'];
        golfie[21] = offset;
        var _closure1_slot15 = golfie;
        golfie = function(argFoo) { // Original name: toPrettyKey
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = argFoo;
                verify = _closure1_slot15;
                entity = verify.length;
                option = 0;
                entity = option < entity;
                golfie = undefined;
                oscard = 2;
                report = 1;
                tangon = 0;
                if(!entity) { _fun00010_ip = 82; continue _fun00009 }
 34:
                zuuluu = _closure1_slot4;
                entity = verify[tangon];
                entity = zuuluu.bind(golfie)(entity, oscard);
                yankee = entity[option];
                entity = entity[report];
                zuuluu = michal.toUpperCase;
                zuuluu = zuuluu.bind(michal)();
                if(!(yankee !== zuuluu)) { _fun00010_ip = 84; continue _fun00009 }
 70:
                tangon = tangon + 1;
                zuuluu = verify.length;
                if(tangon < zuuluu) { _fun00010_ip = 34; continue _fun00009 }
 82:
                return michal;
 84:
                return entity;
            }
        };
        var _closure1_slot16 = golfie;
        golfie = /shift|meta|ctrl|alt$/;
        var _closure1_slot17 = golfie;
        golfie = 7;
        golfie = verify[golfie];
        verify = option.bind(entity)(golfie);
        option = verify.fileFinishedImporting;
        golfie = 'utils/web/KeyboardUtils.tsx';
        golfie = option.bind(verify)(golfie);
        zuuluu['getEnv'] = oscard;
        zuuluu['codeToKey'] = report;
        zuuluu['keyToCode'] = tangon;
        tangon = function(argFoo) { // Original name: toBrowserEvents
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = argFoo;
                michal = {'keyCode': 0, 'metaKey': false, 'shiftKey': false, 'altKey': false, 'ctrlKey': false};
                var _closure2_slot0 = michal;
                michal = null;
                if(!(michal != tangon)) { _fun00012_ip = 54; continue _fun00011 }
 29:
                zuuluu = tangon.reduce;
                michal = function(argFoo, argBar) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = argFoo;
                        report = argBar;
                        zuuluu = _closure1_slot19;
                        offset = undefined;
                        oscard = zuuluu.bind(offset)(report);
                        var _closure3_slot0 = oscard;
                        tangon = {};
                        romeon = _closure2_slot0;
                        foxtra = tangon;
                        option = copyDataProperties(foxtra, romeon);
                        option = null;
                        if(!(option != oscard)) { _fun00014_ip = 144; continue _fun00013 }
 48:
                        yankee = _closure1_slot17;
                        verify = yankee.test;
                        verify = verify.bind(yankee)(oscard);
                        if(verify) { _fun00014_ip = 107; continue _fun00013 }
 65:
                        verify = _closure1_slot20;
                        golfie = _closure1_slot9;
                        golfie = golfie.BROWSER;
                        golfie = verify.bind(offset)(oscard, golfie);
                        if(!(option != golfie)) { _fun00014_ip = 95; continue _fun00013 }
 89:
                        tangon['keyCode'] = golfie;
 95:
                        golfie = entity.push;
                        golfie = golfie.bind(entity)(tangon);
                        return entity;
 107:
                        golfie = _closure2_slot0;
                        zuuluu = 'Key';
                        oscard = oscard + zuuluu;
                        zuuluu = true;
                        golfie[oscard] = zuuluu;
                        zuuluu = entity.map;
                        michal = function(argFoo) {
                            entity = argFoo;
                            zuuluu = _closure3_slot0;
                            michal = 'Key';
                            zuuluu = zuuluu + michal;
                            michal = true;
                            entity[zuuluu] = michal;
                            return entity;
                        };
                        michal = zuuluu.bind(entity)(michal);
                        return michal;
 144:
                        zuuluu = entity.push;
                        michal = {};
                        foxtra = michal;
                        romeon = tangon;
                        tangon = copyDataProperties(foxtra, romeon);
                        tangon = 'combo';
                        michal[tangon] = report;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    }
                };
                entity = new Array(0);
                entity = zuuluu.bind(tangon)(michal, entity);
                _fun00012_ip = 58; continue _fun00011;
 54:
                entity = new Array(0);
 58:
                return entity;
            }
        };
        zuuluu['toBrowserEvents'] = tangon;
        tangon = function(argFoo) { // Original name: toCombo
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                report = argFoo;
                zuuluu = arguments[1];
                michal = arguments[2];
                oscard = undefined;
                if(!(zuuluu === oscard)) { _fun00016_ip = 28; continue _fun00015 }
 17:
                tangon = _closure1_slot18;
                zuuluu = tangon.bind(oscard)();
 28:
                var _closure2_slot0 = zuuluu;
                if(!(michal === oscard)) { _fun00016_ip = 49; continue _fun00015 }
 36:
                zuuluu = _closure1_slot5;
                michal = zuuluu.KEYBOARD_KEY;
 49:
                var _closure2_slot1 = michal;
                tangon = report.replace;
                zuuluu = /numpad plus/i;
                michal = '';
                report = tangon.bind(report)(zuuluu, michal);
                tangon = report.replace;
                zuuluu = /NUMPAD \+/i;
                michal = 'numpad plus';
                report = tangon.bind(report)(zuuluu, michal);
                tangon = report.replace;
                zuuluu = _closure1_slot2;
                golfie = _closure1_slot3;
                michal = 5;
                michal = golfie[michal];
                michal = zuuluu.bind(oscard)(michal);
                zuuluu = michal.modKey;
                michal = /mod/i;
                tangon = tangon.bind(report)(michal, zuuluu);
                zuuluu = tangon.split;
                michal = '+';
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    michal = argFoo;
                    entity = michal.trim;
                    tangon = entity.bind(michal)();
                    zuuluu = tangon.replace;
                    michal = 'plus';
                    entity = '+';
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.reduce;
                michal = function(argFoo, argBar) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        entity = argFoo;
                        romeon = argBar;
                        yankee = _closure1_slot15;
                        zuuluu = yankee.length;
                        offset = 0;
                        zuuluu = offset < zuuluu;
                        golfie = undefined;
                        verify = 2;
                        option = 1;
                        report = 0;
                        oscard = romeon;
                        if(!zuuluu) { _fun00018_ip = 103; continue _fun00017 }
 40:
                        tangon = _closure1_slot4;
                        zuuluu = yankee[report];
                        zuuluu = tangon.bind(golfie)(zuuluu, verify);
                        tangon = zuuluu[offset];
                        foxtra = zuuluu[option];
                        zuuluu = romeon.toUpperCase;
                        zuuluu = zuuluu.bind(romeon)();
                        if(!(foxtra !== zuuluu)) { _fun00018_ip = 93; continue _fun00017 }
 76:
                        report = report + 1;
                        zuuluu = yankee.length;
                        oscard = romeon;
                        if(report < zuuluu) { _fun00018_ip = 40; continue _fun00017 }
 91:
                        _fun00018_ip = 103; continue _fun00017;
 93:
                        zuuluu = tangon.toLowerCase;
                        oscard = zuuluu.bind(tangon)();
 103:
                        report = _closure1_slot20;
                        zuuluu = _closure2_slot0;
                        michal = _closure2_slot1;
                        report = report.bind(golfie)(oscard, zuuluu, michal);
                        michal = null;
                        if(!(michal != report)) { _fun00018_ip = 165; continue _fun00017 }
 131:
                        zuuluu = entity.push;
                        oscard = _closure2_slot1;
                        michal = new Array(3);
                        michal[0] = oscard;
                        michal[1] = report;
                        tangon = _closure2_slot0;
                        michal[2] = tangon;
                        michal = zuuluu.bind(entity)(michal);
 165:
                        return entity;
                    }
                };
                entity = new Array(0);
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        zuuluu['toCombo'] = tangon;
        michal = function(argFoo) { // Original name: toString
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                tangon = argFoo;
                entity = arguments[1];
                golfie = undefined;
                if(!(entity === golfie)) { _fun00020_ip = 14; continue _fun00019 }
 12:
                entity = false;
 14:
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        zuuluu = argFoo;
                        entity = zuuluu[Symbol.iterator];
                        zuuluu = entity().next;
                        tangon = zuuluu().value;
                        michal = entity;
                        oscard = undefined;
                        michal = michal === oscard;
                        verify = undefined;
                        if(michal) { _fun00022_ip = 27; continue _fun00021 }
 24:
                        verify = tangon;
 27:
                        report = undefined;
                        if(michal) { _fun00022_ip = 57; continue _fun00021 }
 32:
                        golfie = zuuluu().value;
                        tangon = entity;
                        tangon = tangon === oscard;
                        report = undefined;
                        michal = tangon;
                        if(tangon) { _fun00022_ip = 57; continue _fun00021 }
 51:
                        report = golfie;
                        michal = tangon;
 57:
                        option = undefined;
                        if(michal) { _fun00022_ip = 87; continue _fun00021 }
 62:
                        tangon = zuuluu().value;
                        zuuluu = entity;
                        zuuluu = zuuluu === oscard;
                        option = undefined;
                        michal = zuuluu;
                        if(zuuluu) { _fun00022_ip = 87; continue _fun00021 }
 81:
                        option = tangon;
                        michal = zuuluu;
 87:
                        if(michal) { _fun00022_ip = 93; continue _fun00021 }
 90:
                        entity.return();
 93:
                        entity = _closure1_slot5;
                        entity = entity.KEYBOARD_KEY;
                        if(!(verify !== entity)) { _fun00022_ip = 237; continue _fun00021 }
 113:
                        entity = _closure1_slot5;
                        entity = entity.KEYBOARD_MODIFIER_KEY;
                        if(!(verify !== entity)) { _fun00022_ip = 237; continue _fun00021 }
 127:
                        entity = _closure1_slot5;
                        entity = entity.MOUSE_BUTTON;
                        if(!(verify !== entity)) { _fun00022_ip = 213; continue _fun00021 }
 141:
                        entity = _closure1_slot5;
                        entity = entity.GAMEPAD_BUTTON;
                        if(!(verify !== entity)) { _fun00022_ip = 187; continue _fun00021 }
 155:
                        entity = global;
                        entity = entity.HermesInternal;
                        tangon = entity.concat;
                        zuuluu = 'dev';
                        entity = ',';
                        entity = tangon.bind(zuuluu)(verify, entity, report);
                        _fun00022_ip = 211; continue _fun00021;
 187:
                        zuuluu = global;
                        zuuluu = zuuluu.HermesInternal;
                        tangon = zuuluu.concat;
                        zuuluu = 'gamepad';
                        entity = tangon.bind(zuuluu)(report);
 211:
                        _fun00022_ip = 235; continue _fun00021;
 213:
                        zuuluu = global;
                        zuuluu = zuuluu.HermesInternal;
                        tangon = zuuluu.concat;
                        zuuluu = 'mouse';
                        entity = tangon.bind(zuuluu)(report);
 235:
                        _fun00022_ip = 316; continue _fun00021;
 237:
                        tangon = _closure1_slot19;
                        zuuluu = null;
                        if(!(zuuluu == option)) { _fun00022_ip = 261; continue _fun00021 }
 247:
                        michal = new Array(2);
                        michal[0] = verify;
                        michal[1] = report;
                        _fun00022_ip = 280; continue _fun00021;
 261:
                        golfie = new Array(3);
                        golfie[0] = verify;
                        golfie[1] = report;
                        golfie[2] = option;
                        michal = golfie;
 280:
                        michal = tangon.bind(oscard)(michal);
                        if(!(zuuluu == michal)) { _fun00022_ip = 313; continue _fun00021 }
 289:
                        zuuluu = global;
                        zuuluu = zuuluu.HermesInternal;
                        tangon = zuuluu.concat;
                        zuuluu = 'UNK';
                        michal = tangon.bind(zuuluu)(report);
 313:
                        entity = michal;
 316:
                        return entity;
                    }
                };
                report = zuuluu.bind(tangon)(michal);
                tangon = report.filter;
                oscard = _closure1_slot1;
                option = _closure1_slot3;
                zuuluu = 6;
                zuuluu = option[zuuluu];
                zuuluu = oscard.bind(golfie)(zuuluu);
                zuuluu = zuuluu.isNotNullish;
                report = tangon.bind(report)(zuuluu);
                if(entity) { _fun00020_ip = 91; continue _fun00019 }
 75:
                zuuluu = report.join;
                entity = '+';
                entity = zuuluu.bind(report)(entity);
                _fun00020_ip = 176; continue _fun00019;
 91:
                zuuluu = _closure1_slot0;
                zuuluu = zuuluu.navigator;
                oscard = zuuluu.appVersion;
                tangon = oscard.indexOf;
                zuuluu = 'Mac OS X';
                oscard = tangon.bind(oscard)(zuuluu);
                zuuluu = -1;
                tangon = report;
                if(!(zuuluu !== oscard)) { _fun00020_ip = 150; continue _fun00019 }
 136:
                zuuluu = report.map;
                michal = _closure1_slot16;
                tangon = zuuluu.bind(report)(michal);
 150:
                zuuluu = tangon.join;
                michal = ' + ';
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.toUpperCase;
                entity = michal.bind(zuuluu)();
 176:
                return entity;
            }
        };
        zuuluu['toString'] = michal;
        return entity;
    }
})();