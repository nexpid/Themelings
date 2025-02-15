// app/utils/web/KeyboardUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        options = argBar;
        backup = argBaz;
        zulu = argFred;
        verify = argPlugh;
        entity = argFoo;
        var _closure1_slot0 = entity;
        var _closure1_slot1 = options;
        var _closure1_slot2 = backup;
        var _closure1_slot3 = verify;
        oscar = function() { // Original name: getEnv
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure1_slot1;
                entity = _closure1_slot3;
                report = 2;
                entity = entity[report];
                tango = undefined;
                zulu = zulu.bind(tango)(entity);
                entity = zulu.isLinux;
                entity = entity.bind(zulu)();
                if(entity) { _fun00004_ip = 130; continue _fun00003 }
 38:
                zulu = _closure1_slot1;
                entity = _closure1_slot3;
                entity = entity[report];
                zulu = zulu.bind(tango)(entity);
                entity = zulu.isMac;
                entity = entity.bind(zulu)();
                if(entity) { _fun00004_ip = 118; continue _fun00003 }
 68:
                zulu = _closure1_slot1;
                entity = _closure1_slot3;
                entity = entity[report];
                zulu = zulu.bind(tango)(entity);
                entity = zulu.isWindows;
                entity = entity.bind(zulu)();
                zulu = _closure1_slot9;
                if(entity) { _fun00004_ip = 110; continue _fun00003 }
 102:
                entity = zulu.BROWSER;
                _fun00004_ip = 116; continue _fun00003;
 110:
                entity = zulu.WINDOWS;
 116:
                _fun00004_ip = 128; continue _fun00003;
 118:
                zulu = _closure1_slot9;
                entity = zulu.MACOS;
 128:
                _fun00004_ip = 140; continue _fun00003;
 130:
                mike = _closure1_slot9;
                entity = mike.LINUX;
 140:
                return entity;
            }
        };
        var _closure1_slot18 = oscar;
        report = function(argFoo) { // Original name: codeToKey
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                golf = argFoo;
                mike = golf[Symbol.iterator];
                golf = mike().next;
                options = undefined;
                zulu = undefined;
                oscar = undefined;
                verify = golf().value;
                offset = mike;
                offset = offset === options;
                zulu = offset;
                if(offset) { _fun00006_ip = 32; continue _fun00005 }
 29:
                oscar = verify;
 32:
                oscar = undefined;
                verify = zulu;
                if(verify) { _fun00006_ip = 60; continue _fun00005 }
 40:
                verify = golf().value;
                offset = mike;
                offset = offset === options;
                zulu = offset;
                if(offset) { _fun00006_ip = 60; continue _fun00005 }
 57:
                oscar = verify;
 60:
                tango = oscar;
                oscar = undefined;
                verify = zulu;
                if(verify) { _fun00006_ip = 91; continue _fun00005 }
 71:
                golf = golf().value;
                verify = mike;
                verify = verify === options;
                zulu = verify;
                if(verify) { _fun00006_ip = 91; continue _fun00005 }
 88:
                oscar = golf;
 91:
                report = oscar;
                oscar = zulu;
                if(oscar) { _fun00006_ip = 103; continue _fun00005 }
 100:
                mike.return();
 103:
                golf = report;
                oscar = _closure1_slot9;
                oscar = oscar.LINUX;
                if(!(oscar !== golf)) { _fun00006_ip = 243; continue _fun00005 }
 123:
                oscar = _closure1_slot9;
                oscar = oscar.MACOS;
                if(!(oscar !== golf)) { _fun00006_ip = 227; continue _fun00005 }
 137:
                oscar = _closure1_slot9;
                oscar = oscar.WINDOWS;
                if(!(oscar !== golf)) { _fun00006_ip = 211; continue _fun00005 }
 151:
                oscar = _closure1_slot9;
                oscar = oscar.BROWSER;
                if(!(oscar !== golf)) { _fun00006_ip = 181; continue _fun00005 }
 165:
                golf = _closure1_slot14;
                oscar = tango;
                oscar = '' + oscar;
                oscar = golf[oscar];
                return oscar;
 181:
                golf = _closure1_slot2;
                verify = _closure1_slot3;
                oscar = 4;
                oscar = verify[oscar];
                golf = golf.bind(options)(oscar);
                oscar = tango;
                oscar = golf.bind(options)(oscar);
                return oscar;
 211:
                golf = _closure1_slot13;
                oscar = tango;
                oscar = '' + oscar;
                oscar = golf[oscar];
                return oscar;
 227:
                golf = _closure1_slot12;
                oscar = tango;
                oscar = '' + oscar;
                oscar = golf[oscar];
                return oscar;
 243:
                report = _closure1_slot11;
                tango = '' + tango;
                tango = report[tango];
                return tango;
 256:
                CatchBlockStart(arg_register=0);
                if(zulu) { _fun00006_ip = 264; continue _fun00005 }
 261:
                mike.return();
 264:
                throw entity;
            }
        };
        var _closure1_slot19 = report;
        tango = function(argFoo) { // Original name: keyToCode
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = argFoo;
                tango = arguments[1];
                verify = arguments[2];
                report = undefined;
                if(!(tango === report)) { _fun00008_ip = 26; continue _fun00007 }
 15:
                entity = _closure1_slot18;
                tango = entity.bind(report)();
 26:
                if(!(verify === report)) { _fun00008_ip = 43; continue _fun00007 }
 30:
                entity = _closure1_slot5;
                verify = entity.KEYBOARD_KEY;
 43:
                zulu = _closure1_slot5;
                zulu = zulu.KEYBOARD_KEY;
                if(!(zulu !== verify)) { _fun00008_ip = 245; continue _fun00007 }
 63:
                zulu = _closure1_slot5;
                zulu = zulu.KEYBOARD_MODIFIER_KEY;
                if(!(zulu !== verify)) { _fun00008_ip = 245; continue _fun00007 }
 80:
                zulu = _closure1_slot5;
                zulu = zulu.MOUSE_BUTTON;
                if(!(zulu !== verify)) { _fun00008_ip = 205; continue _fun00007 }
 94:
                zulu = _closure1_slot5;
                zulu = zulu.GAMEPAD_BUTTON;
                if(!(zulu !== verify)) { _fun00008_ip = 165; continue _fun00007 }
 108:
                zulu = global;
                golf = zulu.Error;
                zulu = zulu.HermesInternal;
                options = zulu.concat;
                oscar = 'Unrecognized DeviceType ';
                zulu = '.';
                yankee = options.bind(oscar)(verify, zulu);
                oscar = golf.prototype;
                oscar = Object.create(oscar, {constructor: {value: golf}});
                romeo = oscar;
                zulu = new romeo[golf](yankee, offset);
                zulu = zulu instanceof Object ? zulu : oscar;
                throw zulu;
 165:
                zulu = global;
                golf = zulu.parseInt;
                options = mike.replace;
                oscar = 'GAMEPAD';
                zulu = '';
                oscar = options.bind(mike)(oscar, zulu);
                zulu = 10;
                zulu = golf.bind(report)(oscar, zulu);
                return zulu;
 205:
                zulu = global;
                golf = zulu.parseInt;
                options = mike.replace;
                oscar = 'MOUSE';
                zulu = '';
                oscar = options.bind(mike)(oscar, zulu);
                zulu = 10;
                zulu = golf.bind(report)(oscar, zulu);
                return zulu;
 245:
                zulu = _closure1_slot9;
                zulu = zulu.LINUX;
                if(!(zulu !== tango)) { _fun00008_ip = 414; continue _fun00007 }
 262:
                zulu = _closure1_slot9;
                zulu = zulu.MACOS;
                if(!(zulu !== tango)) { _fun00008_ip = 404; continue _fun00007 }
 279:
                zulu = _closure1_slot9;
                zulu = zulu.WINDOWS;
                if(!(zulu !== tango)) { _fun00008_ip = 394; continue _fun00007 }
 293:
                zulu = _closure1_slot9;
                zulu = zulu.BROWSER;
                if(!(zulu !== tango)) { _fun00008_ip = 317; continue _fun00007 }
 307:
                zulu = _closure1_slot10;
                zulu = zulu[mike];
                return zulu;
 317:
                tango = _closure1_slot2;
                oscar = _closure1_slot3;
                zulu = 4;
                zulu = oscar[zulu];
                tango = tango.bind(report)(zulu);
                golf = mike.replace;
                oscar = /^(right|left) (shift|meta|ctrl|alt)$/;
                zulu = '$2';
                options = golf.bind(mike)(oscar, zulu);
                golf = options.replace;
                oscar = 'meta';
                zulu = 'command';
                zulu = golf.bind(options)(oscar, zulu);
                zulu = tango.bind(report)(zulu);
                return zulu;
 394:
                zulu = _closure1_slot8;
                zulu = zulu[mike];
                return zulu;
 404:
                zulu = _closure1_slot7;
                zulu = zulu[mike];
                return zulu;
 414:
                entity = _closure1_slot6;
                entity = entity[mike];
                return entity;
            }
        };
        var _closure1_slot20 = tango;
        golf = global;
        romeo = golf.Object;
        yankee = romeo.defineProperty;
        offset = {};
        entity = true;
        offset['value'] = entity;
        entity = '__esModule';
        entity = yankee.bind(romeo)(zulu, entity, offset);
        entity = 0;
        offset = verify[entity];
        entity = undefined;
        offset = backup.bind(entity)(offset);
        var _closure1_slot4 = offset;
        offset = 1;
        offset = verify[offset];
        offset = options.bind(entity)(offset);
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
        foxtrot = 2;
        offset = verify[foxtrot];
        yankee = options.bind(entity)(offset);
        offset = yankee.isLinux;
        offset = offset.bind(yankee)();
        kilo = sizing;
        if(offset) { _fun00002_ip = 263; continue _fun00001 }
 205:
        offset = verify[foxtrot];
        yankee = options.bind(entity)(offset);
        offset = yankee.isMac;
        yankee = offset.bind(yankee)();
        offset = source;
        if(yankee) { _fun00002_ip = 260; continue _fun00001 }
 230:
        yankee = verify[foxtrot];
        romeo = options.bind(entity)(yankee);
        yankee = romeo.isWindows;
        romeo = yankee.bind(romeo)();
        yankee = undefined;
        if(!romeo) { _fun00002_ip = 257; continue _fun00001 }
 254:
        yankee = result;
 257:
        offset = yankee;
 260:
        kilo = offset;
 263:
        var _closure1_slot10 = kilo;
        yankee = 3;
        offset = verify[yankee];
        romeo = backup.bind(entity)(offset);
        offset = romeo.invert;
        echo = offset.bind(romeo)(sizing);
        var _closure1_slot11 = echo;
        romeo = '`';
        offset = 223;
        echo[offset] = romeo;
        output = golf.Object;
        sizing = output.freeze;
        sizing = sizing.bind(output)(echo);
        echo = golf.Object;
        output = echo.freeze;
        sizing = verify[yankee];
        update = backup.bind(entity)(sizing);
        sizing = update.invert;
        sizing = sizing.bind(update)(source);
        sizing = output.bind(echo)(sizing);
        var _closure1_slot12 = sizing;
        sizing = verify[yankee];
        output = backup.bind(entity)(sizing);
        sizing = output.invert;
        result = sizing.bind(output)(result);
        var _closure1_slot13 = result;
        result[offset] = romeo;
        output = golf.Object;
        sizing = output.freeze;
        sizing = sizing.bind(output)(result);
        yankee = verify[yankee];
        backup = backup.bind(entity)(yankee);
        yankee = backup.invert;
        sizing = null;
        if(!(sizing == kilo)) { _fun00002_ip = 431; continue _fun00001 }
 429:
        kilo = {};
 431:
        yankee = yankee.bind(backup)(kilo);
        var _closure1_slot14 = yankee;
        foxtrot = verify[foxtrot];
        backup = options.bind(entity)(foxtrot);
        foxtrot = backup.isMac;
        foxtrot = foxtrot.bind(backup)();
        if(foxtrot) { _fun00002_ip = 466; continue _fun00001 }
 462:
        yankee[offset] = romeo;
 466:
        offset = golf.Object;
        golf = offset.freeze;
        golf = golf.bind(offset)(yankee);
        golf = new Array(22);
        offset = ['META', '⌘'];
        golf[0] = offset;
        offset = ['RIGHT META', 'RIGHT ⌘'];
        golf[1] = offset;
        offset = ['SHIFT', '⇧'];
        golf[2] = offset;
        offset = ['RIGHT SHIFT', 'RIGHT ⇧'];
        golf[3] = offset;
        offset = ['ALT', '⌥'];
        golf[4] = offset;
        offset = ['RIGHT ALT', 'RIGHT ⌥'];
        golf[5] = offset;
        offset = ['CTRL', '⌃'];
        golf[6] = offset;
        offset = ['RIGHT CTRL', 'RIGHT ⌃'];
        golf[7] = offset;
        offset = ['ENTER', '↵'];
        golf[8] = offset;
        offset = ['BACKSPACE', '⌫'];
        golf[9] = offset;
        offset = ['DEL', '⌦'];
        golf[10] = offset;
        offset = ['ESC', '⎋'];
        golf[11] = offset;
        offset = ['PAGEUP', '⇞'];
        golf[12] = offset;
        offset = ['PAGEDOWN', '⇟'];
        golf[13] = offset;
        offset = ['UP', '↑'];
        golf[14] = offset;
        offset = ['DOWN', '↓'];
        golf[15] = offset;
        offset = ['LEFT', '←'];
        golf[16] = offset;
        offset = ['RIGHT', '→'];
        golf[17] = offset;
        offset = ['HOME', '↖'];
        golf[18] = offset;
        offset = ['END', '↘'];
        golf[19] = offset;
        offset = ['TAB', '⇥'];
        golf[20] = offset;
        offset = ['SPACE', '␣'];
        golf[21] = offset;
        var _closure1_slot15 = golf;
        golf = function(argFoo) { // Original name: toPrettyKey
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = argFoo;
                verify = _closure1_slot15;
                entity = verify.length;
                options = 0;
                entity = options < entity;
                golf = undefined;
                oscar = 2;
                report = 1;
                tango = 0;
                if(!entity) { _fun00010_ip = 82; continue _fun00009 }
 34:
                zulu = _closure1_slot4;
                entity = verify[tango];
                entity = zulu.bind(golf)(entity, oscar);
                yankee = entity[options];
                entity = entity[report];
                zulu = mike.toUpperCase;
                zulu = zulu.bind(mike)();
                if(!(yankee !== zulu)) { _fun00010_ip = 84; continue _fun00009 }
 70:
                tango = tango + 1;
                zulu = verify.length;
                if(tango < zulu) { _fun00010_ip = 34; continue _fun00009 }
 82:
                return mike;
 84:
                return entity;
            }
        };
        var _closure1_slot16 = golf;
        golf = /shift|meta|ctrl|alt$/;
        var _closure1_slot17 = golf;
        golf = 7;
        golf = verify[golf];
        verify = options.bind(entity)(golf);
        options = verify.fileFinishedImporting;
        golf = 'utils/web/KeyboardUtils.tsx';
        golf = options.bind(verify)(golf);
        zulu['getEnv'] = oscar;
        zulu['codeToKey'] = report;
        zulu['keyToCode'] = tango;
        tango = function(argFoo) { // Original name: toBrowserEvents
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tango = argFoo;
                mike = {'keyCode': 0, 'metaKey': false, 'shiftKey': false, 'altKey': false, 'ctrlKey': false};
                var _closure2_slot0 = mike;
                mike = null;
                if(!(mike != tango)) { _fun00012_ip = 54; continue _fun00011 }
 29:
                zulu = tango.reduce;
                mike = function(argFoo, argBar) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = argFoo;
                        report = argBar;
                        zulu = _closure1_slot19;
                        offset = undefined;
                        oscar = zulu.bind(offset)(report);
                        var _closure3_slot0 = oscar;
                        tango = {};
                        romeo = _closure2_slot0;
                        foxtrot = tango;
                        options = copyDataProperties(foxtrot, romeo);
                        options = null;
                        if(!(options != oscar)) { _fun00014_ip = 144; continue _fun00013 }
 48:
                        yankee = _closure1_slot17;
                        verify = yankee.test;
                        verify = verify.bind(yankee)(oscar);
                        if(verify) { _fun00014_ip = 107; continue _fun00013 }
 65:
                        verify = _closure1_slot20;
                        golf = _closure1_slot9;
                        golf = golf.BROWSER;
                        golf = verify.bind(offset)(oscar, golf);
                        if(!(options != golf)) { _fun00014_ip = 95; continue _fun00013 }
 89:
                        tango['keyCode'] = golf;
 95:
                        golf = entity.push;
                        golf = golf.bind(entity)(tango);
                        return entity;
 107:
                        golf = _closure2_slot0;
                        zulu = 'Key';
                        oscar = oscar + zulu;
                        zulu = true;
                        golf[oscar] = zulu;
                        zulu = entity.map;
                        mike = function(argFoo) {
                            entity = argFoo;
                            zulu = _closure3_slot0;
                            mike = 'Key';
                            zulu = zulu + mike;
                            mike = true;
                            entity[zulu] = mike;
                            return entity;
                        };
                        mike = zulu.bind(entity)(mike);
                        return mike;
 144:
                        zulu = entity.push;
                        mike = {};
                        foxtrot = mike;
                        romeo = tango;
                        tango = copyDataProperties(foxtrot, romeo);
                        tango = 'combo';
                        mike[tango] = report;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    }
                };
                entity = new Array(0);
                entity = zulu.bind(tango)(mike, entity);
                _fun00012_ip = 58; continue _fun00011;
 54:
                entity = new Array(0);
 58:
                return entity;
            }
        };
        zulu['toBrowserEvents'] = tango;
        tango = function(argFoo) { // Original name: toCombo
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                report = argFoo;
                zulu = arguments[1];
                mike = arguments[2];
                oscar = undefined;
                if(!(zulu === oscar)) { _fun00016_ip = 28; continue _fun00015 }
 17:
                tango = _closure1_slot18;
                zulu = tango.bind(oscar)();
 28:
                var _closure2_slot0 = zulu;
                if(!(mike === oscar)) { _fun00016_ip = 49; continue _fun00015 }
 36:
                zulu = _closure1_slot5;
                mike = zulu.KEYBOARD_KEY;
 49:
                var _closure2_slot1 = mike;
                tango = report.replace;
                zulu = /numpad plus/i;
                mike = '';
                report = tango.bind(report)(zulu, mike);
                tango = report.replace;
                zulu = /NUMPAD \+/i;
                mike = 'numpad plus';
                report = tango.bind(report)(zulu, mike);
                tango = report.replace;
                zulu = _closure1_slot2;
                golf = _closure1_slot3;
                mike = 5;
                mike = golf[mike];
                mike = zulu.bind(oscar)(mike);
                zulu = mike.modKey;
                mike = /mod/i;
                tango = tango.bind(report)(mike, zulu);
                zulu = tango.split;
                mike = '+';
                tango = zulu.bind(tango)(mike);
                zulu = tango.map;
                mike = function(argFoo) {
                    mike = argFoo;
                    entity = mike.trim;
                    tango = entity.bind(mike)();
                    zulu = tango.replace;
                    mike = 'plus';
                    entity = '+';
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                tango = zulu.bind(tango)(mike);
                zulu = tango.reduce;
                mike = function(argFoo, argBar) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        entity = argFoo;
                        romeo = argBar;
                        yankee = _closure1_slot15;
                        zulu = yankee.length;
                        offset = 0;
                        zulu = offset < zulu;
                        golf = undefined;
                        verify = 2;
                        options = 1;
                        report = 0;
                        oscar = romeo;
                        if(!zulu) { _fun00018_ip = 103; continue _fun00017 }
 40:
                        tango = _closure1_slot4;
                        zulu = yankee[report];
                        zulu = tango.bind(golf)(zulu, verify);
                        tango = zulu[offset];
                        foxtrot = zulu[options];
                        zulu = romeo.toUpperCase;
                        zulu = zulu.bind(romeo)();
                        if(!(foxtrot !== zulu)) { _fun00018_ip = 93; continue _fun00017 }
 76:
                        report = report + 1;
                        zulu = yankee.length;
                        oscar = romeo;
                        if(report < zulu) { _fun00018_ip = 40; continue _fun00017 }
 91:
                        _fun00018_ip = 103; continue _fun00017;
 93:
                        zulu = tango.toLowerCase;
                        oscar = zulu.bind(tango)();
 103:
                        report = _closure1_slot20;
                        zulu = _closure2_slot0;
                        mike = _closure2_slot1;
                        report = report.bind(golf)(oscar, zulu, mike);
                        mike = null;
                        if(!(mike != report)) { _fun00018_ip = 165; continue _fun00017 }
 131:
                        zulu = entity.push;
                        oscar = _closure2_slot1;
                        mike = new Array(3);
                        mike[0] = oscar;
                        mike[1] = report;
                        tango = _closure2_slot0;
                        mike[2] = tango;
                        mike = zulu.bind(entity)(mike);
 165:
                        return entity;
                    }
                };
                entity = new Array(0);
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        zulu['toCombo'] = tango;
        mike = function(argFoo) { // Original name: toString
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                tango = argFoo;
                entity = arguments[1];
                golf = undefined;
                if(!(entity === golf)) { _fun00020_ip = 14; continue _fun00019 }
 12:
                entity = false;
 14:
                zulu = tango.map;
                mike = function(argFoo) {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        zulu = argFoo;
                        entity = zulu[Symbol.iterator];
                        zulu = entity().next;
                        tango = zulu().value;
                        mike = entity;
                        oscar = undefined;
                        mike = mike === oscar;
                        verify = undefined;
                        if(mike) { _fun00022_ip = 27; continue _fun00021 }
 24:
                        verify = tango;
 27:
                        report = undefined;
                        if(mike) { _fun00022_ip = 57; continue _fun00021 }
 32:
                        golf = zulu().value;
                        tango = entity;
                        tango = tango === oscar;
                        report = undefined;
                        mike = tango;
                        if(tango) { _fun00022_ip = 57; continue _fun00021 }
 51:
                        report = golf;
                        mike = tango;
 57:
                        options = undefined;
                        if(mike) { _fun00022_ip = 87; continue _fun00021 }
 62:
                        tango = zulu().value;
                        zulu = entity;
                        zulu = zulu === oscar;
                        options = undefined;
                        mike = zulu;
                        if(zulu) { _fun00022_ip = 87; continue _fun00021 }
 81:
                        options = tango;
                        mike = zulu;
 87:
                        if(mike) { _fun00022_ip = 93; continue _fun00021 }
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
                        tango = entity.concat;
                        zulu = 'dev';
                        entity = ',';
                        entity = tango.bind(zulu)(verify, entity, report);
                        _fun00022_ip = 211; continue _fun00021;
 187:
                        zulu = global;
                        zulu = zulu.HermesInternal;
                        tango = zulu.concat;
                        zulu = 'gamepad';
                        entity = tango.bind(zulu)(report);
 211:
                        _fun00022_ip = 235; continue _fun00021;
 213:
                        zulu = global;
                        zulu = zulu.HermesInternal;
                        tango = zulu.concat;
                        zulu = 'mouse';
                        entity = tango.bind(zulu)(report);
 235:
                        _fun00022_ip = 316; continue _fun00021;
 237:
                        tango = _closure1_slot19;
                        zulu = null;
                        if(!(zulu == options)) { _fun00022_ip = 261; continue _fun00021 }
 247:
                        mike = new Array(2);
                        mike[0] = verify;
                        mike[1] = report;
                        _fun00022_ip = 280; continue _fun00021;
 261:
                        golf = new Array(3);
                        golf[0] = verify;
                        golf[1] = report;
                        golf[2] = options;
                        mike = golf;
 280:
                        mike = tango.bind(oscar)(mike);
                        if(!(zulu == mike)) { _fun00022_ip = 313; continue _fun00021 }
 289:
                        zulu = global;
                        zulu = zulu.HermesInternal;
                        tango = zulu.concat;
                        zulu = 'UNK';
                        mike = tango.bind(zulu)(report);
 313:
                        entity = mike;
 316:
                        return entity;
                    }
                };
                report = zulu.bind(tango)(mike);
                tango = report.filter;
                oscar = _closure1_slot1;
                options = _closure1_slot3;
                zulu = 6;
                zulu = options[zulu];
                zulu = oscar.bind(golf)(zulu);
                zulu = zulu.isNotNullish;
                report = tango.bind(report)(zulu);
                if(entity) { _fun00020_ip = 91; continue _fun00019 }
 75:
                zulu = report.join;
                entity = '+';
                entity = zulu.bind(report)(entity);
                _fun00020_ip = 176; continue _fun00019;
 91:
                zulu = _closure1_slot0;
                zulu = zulu.navigator;
                oscar = zulu.appVersion;
                tango = oscar.indexOf;
                zulu = 'Mac OS X';
                oscar = tango.bind(oscar)(zulu);
                zulu = -1;
                tango = report;
                if(!(zulu !== oscar)) { _fun00020_ip = 150; continue _fun00019 }
 136:
                zulu = report.map;
                mike = _closure1_slot16;
                tango = zulu.bind(report)(mike);
 150:
                zulu = tango.join;
                mike = ' + ';
                zulu = zulu.bind(tango)(mike);
                mike = zulu.toUpperCase;
                entity = mike.bind(zulu)();
 176:
                return entity;
            }
        };
        zulu['toString'] = mike;
        return entity;
    }
})();