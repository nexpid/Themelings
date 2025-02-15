// app/utils/web/KeyboardUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun105618: for(var _fun105618_ip = 0; ; ) switch(_fun105618_ip) {
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
            _fun105619: for(var _fun105619_ip = 0; ; ) switch(_fun105619_ip) {
 0:
                zulu = _closure1_slot1;
                entity = _closure1_slot3;
                report = 2;
                entity = entity[report];
                tango = undefined;
                zulu = zulu.bind(tango)(entity);
                entity = zulu.isLinux;
                entity = entity.bind(zulu)();
                if(entity) { _fun105619_ip = 130; continue _fun105619 }
 38:
                zulu = _closure1_slot1;
                entity = _closure1_slot3;
                entity = entity[report];
                zulu = zulu.bind(tango)(entity);
                entity = zulu.isMac;
                entity = entity.bind(zulu)();
                if(entity) { _fun105619_ip = 118; continue _fun105619 }
 68:
                zulu = _closure1_slot1;
                entity = _closure1_slot3;
                entity = entity[report];
                zulu = zulu.bind(tango)(entity);
                entity = zulu.isWindows;
                entity = entity.bind(zulu)();
                zulu = _closure1_slot9;
                if(entity) { _fun105619_ip = 110; continue _fun105619 }
 102:
                entity = zulu.BROWSER;
                _fun105619_ip = 116; continue _fun105619;
 110:
                entity = zulu.WINDOWS;
 116:
                _fun105619_ip = 128; continue _fun105619;
 118:
                zulu = _closure1_slot9;
                entity = zulu.MACOS;
 128:
                _fun105619_ip = 140; continue _fun105619;
 130:
                mike = _closure1_slot9;
                entity = mike.LINUX;
 140:
                return entity;
            }
        };
        var _closure1_slot18 = oscar;
        report = function(argFoo) { // Original name: codeToKey
            _fun105620: for(var _fun105620_ip = 0; ; ) switch(_fun105620_ip) {
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
                if(offset) { _fun105620_ip = 32; continue _fun105620 }
 29:
                oscar = verify;
 32:
                oscar = undefined;
                verify = zulu;
                if(verify) { _fun105620_ip = 60; continue _fun105620 }
 40:
                verify = golf().value;
                offset = mike;
                offset = offset === options;
                zulu = offset;
                if(offset) { _fun105620_ip = 60; continue _fun105620 }
 57:
                oscar = verify;
 60:
                tango = oscar;
                oscar = undefined;
                verify = zulu;
                if(verify) { _fun105620_ip = 91; continue _fun105620 }
 71:
                golf = golf().value;
                verify = mike;
                verify = verify === options;
                zulu = verify;
                if(verify) { _fun105620_ip = 91; continue _fun105620 }
 88:
                oscar = golf;
 91:
                report = oscar;
                oscar = zulu;
                if(oscar) { _fun105620_ip = 103; continue _fun105620 }
 100:
                mike.return();
 103:
                golf = report;
                oscar = _closure1_slot9;
                oscar = oscar.LINUX;
                if(!(oscar !== golf)) { _fun105620_ip = 243; continue _fun105620 }
 123:
                oscar = _closure1_slot9;
                oscar = oscar.MACOS;
                if(!(oscar !== golf)) { _fun105620_ip = 227; continue _fun105620 }
 137:
                oscar = _closure1_slot9;
                oscar = oscar.WINDOWS;
                if(!(oscar !== golf)) { _fun105620_ip = 211; continue _fun105620 }
 151:
                oscar = _closure1_slot9;
                oscar = oscar.BROWSER;
                if(!(oscar !== golf)) { _fun105620_ip = 181; continue _fun105620 }
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
                if(zulu) { _fun105620_ip = 264; continue _fun105620 }
 261:
                mike.return();
 264:
                throw entity;
            }
        };
        var _closure1_slot19 = report;
        tango = function(argFoo) { // Original name: keyToCode
            _fun105621: for(var _fun105621_ip = 0; ; ) switch(_fun105621_ip) {
 0:
                mike = argFoo;
                tango = arguments[1];
                verify = arguments[2];
                report = undefined;
                if(!(tango === report)) { _fun105621_ip = 26; continue _fun105621 }
 15:
                entity = _closure1_slot18;
                tango = entity.bind(report)();
 26:
                if(!(verify === report)) { _fun105621_ip = 43; continue _fun105621 }
 30:
                entity = _closure1_slot5;
                verify = entity.KEYBOARD_KEY;
 43:
                zulu = _closure1_slot5;
                zulu = zulu.KEYBOARD_KEY;
                if(!(zulu !== verify)) { _fun105621_ip = 245; continue _fun105621 }
 63:
                zulu = _closure1_slot5;
                zulu = zulu.KEYBOARD_MODIFIER_KEY;
                if(!(zulu !== verify)) { _fun105621_ip = 245; continue _fun105621 }
 80:
                zulu = _closure1_slot5;
                zulu = zulu.MOUSE_BUTTON;
                if(!(zulu !== verify)) { _fun105621_ip = 205; continue _fun105621 }
 94:
                zulu = _closure1_slot5;
                zulu = zulu.GAMEPAD_BUTTON;
                if(!(zulu !== verify)) { _fun105621_ip = 165; continue _fun105621 }
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
                if(!(zulu !== tango)) { _fun105621_ip = 414; continue _fun105621 }
 262:
                zulu = _closure1_slot9;
                zulu = zulu.MACOS;
                if(!(zulu !== tango)) { _fun105621_ip = 404; continue _fun105621 }
 279:
                zulu = _closure1_slot9;
                zulu = zulu.WINDOWS;
                if(!(zulu !== tango)) { _fun105621_ip = 394; continue _fun105621 }
 293:
                zulu = _closure1_slot9;
                zulu = zulu.BROWSER;
                if(!(zulu !== tango)) { _fun105621_ip = 317; continue _fun105621 }
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
        if(offset) { _fun105618_ip = 263; continue _fun105618 }
 205:
        offset = verify[foxtrot];
        yankee = options.bind(entity)(offset);
        offset = yankee.isMac;
        yankee = offset.bind(yankee)();
        offset = source;
        if(yankee) { _fun105618_ip = 260; continue _fun105618 }
 230:
        yankee = verify[foxtrot];
        romeo = options.bind(entity)(yankee);
        yankee = romeo.isWindows;
        romeo = yankee.bind(romeo)();
        yankee = undefined;
        if(!romeo) { _fun105618_ip = 257; continue _fun105618 }
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
        if(!(sizing == kilo)) { _fun105618_ip = 431; continue _fun105618 }
 429:
        kilo = {};
 431:
        yankee = yankee.bind(backup)(kilo);
        var _closure1_slot14 = yankee;
        foxtrot = verify[foxtrot];
        backup = options.bind(entity)(foxtrot);
        foxtrot = backup.isMac;
        foxtrot = foxtrot.bind(backup)();
        if(foxtrot) { _fun105618_ip = 466; continue _fun105618 }
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
            _fun105622: for(var _fun105622_ip = 0; ; ) switch(_fun105622_ip) {
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
                if(!entity) { _fun105622_ip = 82; continue _fun105622 }
 34:
                zulu = _closure1_slot4;
                entity = verify[tango];
                entity = zulu.bind(golf)(entity, oscar);
                yankee = entity[options];
                entity = entity[report];
                zulu = mike.toUpperCase;
                zulu = zulu.bind(mike)();
                if(!(yankee !== zulu)) { _fun105622_ip = 84; continue _fun105622 }
 70:
                tango = tango + 1;
                zulu = verify.length;
                if(tango < zulu) { _fun105622_ip = 34; continue _fun105622 }
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
            _fun105623: for(var _fun105623_ip = 0; ; ) switch(_fun105623_ip) {
 0:
                tango = argFoo;
                mike = {'keyCode': 0, 'metaKey': false, 'shiftKey': false, 'altKey': false, 'ctrlKey': false};
                var _closure2_slot0 = mike;
                mike = null;
                if(!(mike != tango)) { _fun105623_ip = 54; continue _fun105623 }
 29:
                zulu = tango.reduce;
                mike = function(argFoo, argBar) {
                    _fun105624: for(var _fun105624_ip = 0; ; ) switch(_fun105624_ip) {
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
                        if(!(options != oscar)) { _fun105624_ip = 144; continue _fun105624 }
 48:
                        yankee = _closure1_slot17;
                        verify = yankee.test;
                        verify = verify.bind(yankee)(oscar);
                        if(verify) { _fun105624_ip = 107; continue _fun105624 }
 65:
                        verify = _closure1_slot20;
                        golf = _closure1_slot9;
                        golf = golf.BROWSER;
                        golf = verify.bind(offset)(oscar, golf);
                        if(!(options != golf)) { _fun105624_ip = 95; continue _fun105624 }
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
                _fun105623_ip = 58; continue _fun105623;
 54:
                entity = new Array(0);
 58:
                return entity;
            }
        };
        zulu['toBrowserEvents'] = tango;
        tango = function(argFoo) { // Original name: toCombo
            _fun105626: for(var _fun105626_ip = 0; ; ) switch(_fun105626_ip) {
 0:
                report = argFoo;
                zulu = arguments[1];
                mike = arguments[2];
                oscar = undefined;
                if(!(zulu === oscar)) { _fun105626_ip = 28; continue _fun105626 }
 17:
                tango = _closure1_slot18;
                zulu = tango.bind(oscar)();
 28:
                var _closure2_slot0 = zulu;
                if(!(mike === oscar)) { _fun105626_ip = 49; continue _fun105626 }
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
                    _fun105628: for(var _fun105628_ip = 0; ; ) switch(_fun105628_ip) {
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
                        if(!zulu) { _fun105628_ip = 103; continue _fun105628 }
 40:
                        tango = _closure1_slot4;
                        zulu = yankee[report];
                        zulu = tango.bind(golf)(zulu, verify);
                        tango = zulu[offset];
                        foxtrot = zulu[options];
                        zulu = romeo.toUpperCase;
                        zulu = zulu.bind(romeo)();
                        if(!(foxtrot !== zulu)) { _fun105628_ip = 93; continue _fun105628 }
 76:
                        report = report + 1;
                        zulu = yankee.length;
                        oscar = romeo;
                        if(report < zulu) { _fun105628_ip = 40; continue _fun105628 }
 91:
                        _fun105628_ip = 103; continue _fun105628;
 93:
                        zulu = tango.toLowerCase;
                        oscar = zulu.bind(tango)();
 103:
                        report = _closure1_slot20;
                        zulu = _closure2_slot0;
                        mike = _closure2_slot1;
                        report = report.bind(golf)(oscar, zulu, mike);
                        mike = null;
                        if(!(mike != report)) { _fun105628_ip = 165; continue _fun105628 }
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
            _fun105629: for(var _fun105629_ip = 0; ; ) switch(_fun105629_ip) {
 0:
                tango = argFoo;
                entity = arguments[1];
                golf = undefined;
                if(!(entity === golf)) { _fun105629_ip = 14; continue _fun105629 }
 12:
                entity = false;
 14:
                zulu = tango.map;
                mike = function(argFoo) {
                    _fun105630: for(var _fun105630_ip = 0; ; ) switch(_fun105630_ip) {
 0:
                        zulu = argFoo;
                        entity = zulu[Symbol.iterator];
                        zulu = entity().next;
                        tango = zulu().value;
                        mike = entity;
                        oscar = undefined;
                        mike = mike === oscar;
                        verify = undefined;
                        if(mike) { _fun105630_ip = 27; continue _fun105630 }
 24:
                        verify = tango;
 27:
                        report = undefined;
                        if(mike) { _fun105630_ip = 57; continue _fun105630 }
 32:
                        golf = zulu().value;
                        tango = entity;
                        tango = tango === oscar;
                        report = undefined;
                        mike = tango;
                        if(tango) { _fun105630_ip = 57; continue _fun105630 }
 51:
                        report = golf;
                        mike = tango;
 57:
                        options = undefined;
                        if(mike) { _fun105630_ip = 87; continue _fun105630 }
 62:
                        tango = zulu().value;
                        zulu = entity;
                        zulu = zulu === oscar;
                        options = undefined;
                        mike = zulu;
                        if(zulu) { _fun105630_ip = 87; continue _fun105630 }
 81:
                        options = tango;
                        mike = zulu;
 87:
                        if(mike) { _fun105630_ip = 93; continue _fun105630 }
 90:
                        entity.return();
 93:
                        entity = _closure1_slot5;
                        entity = entity.KEYBOARD_KEY;
                        if(!(verify !== entity)) { _fun105630_ip = 237; continue _fun105630 }
 113:
                        entity = _closure1_slot5;
                        entity = entity.KEYBOARD_MODIFIER_KEY;
                        if(!(verify !== entity)) { _fun105630_ip = 237; continue _fun105630 }
 127:
                        entity = _closure1_slot5;
                        entity = entity.MOUSE_BUTTON;
                        if(!(verify !== entity)) { _fun105630_ip = 213; continue _fun105630 }
 141:
                        entity = _closure1_slot5;
                        entity = entity.GAMEPAD_BUTTON;
                        if(!(verify !== entity)) { _fun105630_ip = 187; continue _fun105630 }
 155:
                        entity = global;
                        entity = entity.HermesInternal;
                        tango = entity.concat;
                        zulu = 'dev';
                        entity = ',';
                        entity = tango.bind(zulu)(verify, entity, report);
                        _fun105630_ip = 211; continue _fun105630;
 187:
                        zulu = global;
                        zulu = zulu.HermesInternal;
                        tango = zulu.concat;
                        zulu = 'gamepad';
                        entity = tango.bind(zulu)(report);
 211:
                        _fun105630_ip = 235; continue _fun105630;
 213:
                        zulu = global;
                        zulu = zulu.HermesInternal;
                        tango = zulu.concat;
                        zulu = 'mouse';
                        entity = tango.bind(zulu)(report);
 235:
                        _fun105630_ip = 316; continue _fun105630;
 237:
                        tango = _closure1_slot19;
                        zulu = null;
                        if(!(zulu == options)) { _fun105630_ip = 261; continue _fun105630 }
 247:
                        mike = new Array(2);
                        mike[0] = verify;
                        mike[1] = report;
                        _fun105630_ip = 280; continue _fun105630;
 261:
                        golf = new Array(3);
                        golf[0] = verify;
                        golf[1] = report;
                        golf[2] = options;
                        mike = golf;
 280:
                        mike = tango.bind(oscar)(mike);
                        if(!(zulu == mike)) { _fun105630_ip = 313; continue _fun105630 }
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
                if(entity) { _fun105629_ip = 91; continue _fun105629 }
 75:
                zulu = report.join;
                entity = '+';
                entity = zulu.bind(report)(entity);
                _fun105629_ip = 176; continue _fun105629;
 91:
                zulu = _closure1_slot0;
                zulu = zulu.navigator;
                oscar = zulu.appVersion;
                tango = oscar.indexOf;
                zulu = 'Mac OS X';
                oscar = tango.bind(oscar)(zulu);
                zulu = -1;
                tango = report;
                if(!(zulu !== oscar)) { _fun105629_ip = 150; continue _fun105629 }
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