// app/lib/Keybinds.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun105642: for(var _fun105642_ip = 0; ; ) switch(_fun105642_ip) {
 0:
        report = argBar;
        romeo = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = romeo;
        var _closure1_slot2 = oscar;
        entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
            _fun105643: for(var _fun105643_ip = 0; ; ) switch(_fun105643_ip) {
 0:
                zulu = argFoo;
                var _closure2_slot0 = zulu;
                report = global;
                mike = report.Symbol;
                tango = 'undefined';
                mike = typeof mike;
                mike = tango !== mike;
                if(!mike) { _fun105643_ip = 46; continue _fun105643 }
 30:
                tango = report.Symbol;
                tango = tango.iterator;
                mike = zulu[tango];
 46:
                if(mike) { _fun105643_ip = 55; continue _fun105643 }
 49:
                mike = zulu.@@iterator;
 55:
                if(mike) { _fun105643_ip = 345; continue _fun105643 }
 61:
                oscar = report.Array;
                tango = oscar.isArray;
                oscar = tango.bind(oscar)(zulu);
                tango = mike;
                if(oscar) { _fun105643_ip = 323; continue _fun105643 }
 86:
                options = undefined;
                oscar = undefined;
                if(!zulu) { _fun105643_ip = 283; continue _fun105643 }
 96:
                verify = 'string';
                golf = typeof zulu;
                if(!(verify !== golf)) { _fun105643_ip = 270; continue _fun105643 }
 110:
                golf = {};
                verify = golf.toString;
                golf = verify.call;
                yankee = golf.bind(verify)(zulu);
                offset = yankee.slice;
                verify = 8;
                golf = -1;
                verify = offset.bind(yankee)(verify, golf);
                golf = 'Object';
                golf = golf === verify;
                if(!golf) { _fun105643_ip = 163; continue _fun105643 }
 158:
                golf = zulu.constructor;
 163:
                offset = verify;
                if(!golf) { _fun105643_ip = 179; continue _fun105643 }
 169:
                golf = zulu.constructor;
                offset = golf.name;
 179:
                golf = 'Map';
                if(!(golf !== offset)) { _fun105643_ip = 249; continue _fun105643 }
 187:
                golf = 'Set';
                if(!(golf !== offset)) { _fun105643_ip = 249; continue _fun105643 }
 195:
                golf = 'Arguments';
                if(!(golf !== offset)) { _fun105643_ip = 234; continue _fun105643 }
 205:
                verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                golf = verify.test;
                verify = golf.bind(verify)(offset);
                golf = undefined;
                if(!verify) { _fun105643_ip = 247; continue _fun105643 }
 234:
                verify = _closure1_slot14;
                golf = verify.bind(options)(zulu, options);
 247:
                _fun105643_ip = 265; continue _fun105643;
 249:
                offset = report.Array;
                verify = offset.from;
                golf = verify.bind(offset)(zulu);
 265:
                oscar = golf;
                _fun105643_ip = 283; continue _fun105643;
 270:
                golf = _closure1_slot14;
                oscar = golf.bind(options)(zulu, options);
 283:
                tango = oscar;
                if(tango) { _fun105643_ip = 323; continue _fun105643 }
 289:
                golf = report.TypeError;
                report = golf.prototype;
                oscar = Object.create(report, {constructor: {value: golf}});
                foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                backup = oscar;
                report = new backup[golf](foxtrot, romeo);
                report = report instanceof Object ? report : oscar;
                throw report;
 323:
                if(!tango) { _fun105643_ip = 330; continue _fun105643 }
 326:
                _closure2_slot0 = tango;
 330:
                tango = 0;
                var _closure2_slot1 = tango;
                entity = function() {
                    _fun105644: for(var _fun105644_ip = 0; ; ) switch(_fun105644_ip) {
 0:
                        mike = _closure2_slot1;
                        entity = _closure2_slot0;
                        entity = entity.length;
                        if(!(!(mike >= entity))) { _fun105644_ip = 56; continue _fun105644 }
 20:
                        entity = {};
                        mike = false;
                        entity['done'] = mike;
                        zulu = _closure2_slot0;
                        mike = _closure2_slot1;
                        mike = parseFloat(mike);
                        tango = mike + 1;
                        _closure2_slot1 = tango;
                        mike = zulu[mike];
                        entity['value'] = mike;
                        _fun105644_ip = 67; continue _fun105644;
 56:
                        mike = {};
                        zulu = true;
                        mike['done'] = zulu;
                        entity = mike;
 67:
                        return entity;
                    }
                };
                return entity;
 345:
                entity = mike.call;
                zulu = entity.bind(mike)(zulu);
                mike = zulu.next;
                entity = mike.bind;
                entity = entity.bind(mike)(zulu);
                return entity;
            }
        };
        var _closure1_slot13 = entity;
        entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
            _fun105645: for(var _fun105645_ip = 0; ; ) switch(_fun105645_ip) {
 0:
                tango = argFoo;
                entity = null;
                zulu = undefined;
                entity = entity == zulu;
                if(entity) { _fun105645_ip = 23; continue _fun105645 }
 14:
                mike = tango.length;
                entity = zulu > mike;
 23:
                mike = undefined;
                if(!entity) { _fun105645_ip = 33; continue _fun105645 }
 28:
                mike = tango.length;
 33:
                entity = global;
                entity = entity.Array;
                entity = entity.bind(zulu)(mike);
                zulu = 0;
                report = zulu < mike;
                if(!report) { _fun105645_ip = 70; continue _fun105645 }
 55:
                report = tango[zulu];
                entity[zulu] = report;
                zulu = zulu + 1;
                if(zulu < mike) { _fun105645_ip = 55; continue _fun105645 }
 70:
                return entity;
            }
        };
        var _closure1_slot14 = entity;
        entity = function(argFoo) { // Original name: getAllKeybinds
            _fun105646: for(var _fun105646_ip = 0; ; ) switch(_fun105646_ip) {
 0:
                zulu = new Array(0);
                entity = global;
                tango = entity.Object;
                mike = tango.values;
                entity = argFoo;
                oscar = mike.bind(tango)(entity);
                entity = oscar.length;
                report = 0;
                entity = report < entity;
                tango = null;
                mike = 0;
                if(!entity) { _fun105646_ip = 100; continue _fun105646 }
 43:
                entity = oscar[mike];
                if(!(tango != entity)) { _fun105646_ip = 88; continue _fun105646 }
 51:
                golf = zulu.push;
                offset = entity.binds;
                entity = new Array(0);
                yankee = entity;
                verify = 0;
                options = arraySpread(yankee, offset, verify);
                yankee = golf;
                offset = entity;
                verify = zulu;
                entity = apply(yankee, offset, verify);
 88:
                mike = mike + 1;
                entity = oscar.length;
                if(mike < entity) { _fun105646_ip = 43; continue _fun105646 }
 100:
                mike = zulu.map;
                entity = function(argFoo) {
                    tango = argFoo;
                    zulu = tango.replace;
                    mike = _closure1_slot9;
                    entity = 'mod';
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        var _closure1_slot15 = entity;
        entity = function(argFoo, argBar) { // Original name: wrapBind
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = argBar;
            var _closure2_slot1 = mike;
            entity = function(argFoo, argBar) {
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 6;
                mike = tango[mike];
                tango = undefined;
                oscar = zulu.bind(tango)(mike);
                report = oscar.track;
                entity = _closure1_slot4;
                zulu = entity.KEYBOARD_SHORTCUT_USED;
                mike = {};
                golf = _closure2_slot0;
                mike['shortcut_name'] = golf;
                mike = report.bind(oscar)(zulu, mike);
                zulu = _closure2_slot1;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            return entity;
        };
        var _closure1_slot16 = entity;
        entity = function(argFoo) { // Original name: registerBinds
            _fun105650: for(var _fun105650_ip = 0; ; ) switch(_fun105650_ip) {
 0:
                verify = function() { // Original name: _loop
                    _fun105651: for(var _fun105651_ip = 0; ; ) switch(_fun105651_ip) {
 0:
                        entity = _closure2_slot1;
                        oscar = null;
                        if(!(oscar != entity)) { _fun105651_ip = 481; continue _fun105651 }
 18:
                        entity = _closure1_slot11;
                        mike = undefined;
                        options = entity.bind(mike)();
                        var _closure3_slot0 = options;
                        golf = _closure1_slot0;
                        verify = _closure1_slot2;
                        entity = 4;
                        entity = verify[entity];
                        entity = golf.bind(mike)(entity);
                        entity = entity.isPlatformEmbedded;
                        if(entity) { _fun105651_ip = 82; continue _fun105651 }
 64:
                        golf = options.concat;
                        entity = _closure1_slot10;
                        entity = golf.bind(options)(entity);
                        _closure3_slot0 = entity;
 82:
                        entity = _closure2_slot1;
                        options = entity.binds;
                        golf = options.filter;
                        entity = function(argFoo) {
                            tango = argFoo;
                            zulu = tango.replace;
                            mike = _closure1_slot9;
                            entity = 'mod';
                            zulu = zulu.bind(tango)(entity, mike);
                            mike = _closure3_slot0;
                            entity = mike.indexOf;
                            mike = entity.bind(mike)(zulu);
                            entity = 0;
                            entity = mike < entity;
                            return entity;
                        };
                        options = golf.bind(options)(entity);
                        golf = options.length;
                        entity = 0;
                        if(!(entity !== golf)) { _fun105651_ip = 479; continue _fun105651 }
 123:
                        golf = _closure2_slot1;
                        golf = golf.comboKeysBindGlobal;
                        verify = _closure1_slot8;
                        if(golf) { _fun105651_ip = 147; continue _fun105651 }
 140:
                        golf = verify.bind;
                        _fun105651_ip = 153; continue _fun105651;
 147:
                        golf = verify.bindGlobal;
 153:
                        verify = _closure2_slot1;
                        verify = verify.action;
                        if(!(oscar != verify)) { _fun105651_ip = 205; continue _fun105651 }
 166:
                        yankee = golf.call;
                        offset = _closure1_slot8;
                        foxtrot = _closure1_slot16;
                        romeo = _closure2_slot0;
                        verify = _closure2_slot1;
                        verify = verify.action;
                        verify = foxtrot.bind(mike)(romeo, verify);
                        verify = yankee.bind(golf)(offset, options, verify);
 205:
                        verify = _closure2_slot1;
                        verify = verify.keyup;
                        if(!(oscar != verify)) { _fun105651_ip = 269; continue _fun105651 }
 219:
                        romeo = golf.call;
                        yankee = _closure1_slot8;
                        foxtrot = _closure1_slot16;
                        offset = _closure2_slot0;
                        verify = _closure2_slot1;
                        verify = verify.keyup;
                        kilo = foxtrot.bind(mike)(offset, verify);
                        backup = 'keyup';
                        result = golf;
                        output = yankee;
                        sizing = options;
                        verify = result[romeo](output, sizing, kilo, backup, foxtrot);
 269:
                        verify = _closure2_slot1;
                        verify = verify.keydown;
                        if(!(oscar != verify)) { _fun105651_ip = 413; continue _fun105651 }
 286:
                        offset = options.indexOf;
                        verify = 'any-character';
                        offset = offset.bind(options)(verify);
                        verify = -1;
                        if(!(verify !== offset)) { _fun105651_ip = 354; continue _fun105651 }
 312:
                        verify = _closure2_slot1;
                        yankee = verify.keydown;
                        verify = function(argFoo, argBar) { // Original name: nativeBind
                            report = 'keydown';
                            var _closure4_slot0 = report;
                            mike = argBar;
                            var _closure4_slot1 = mike;
                            tango = function(argFoo) { // Original name: wrappedCallback
                                tango = argFoo;
                                zulu = _closure4_slot1;
                                mike = tango.key;
                                entity = undefined;
                                entity = zulu.bind(entity)(tango, mike);
                                return entity;
                            };
                            var _closure4_slot2 = tango;
                            mike = global;
                            zulu = mike.document;
                            mike = zulu.addEventListener;
                            mike = mike.bind(zulu)(report, tango);
                            zulu = _closure1_slot12;
                            mike = zulu.push;
                            entity = function() {
                                entity = global;
                                tango = entity.document;
                                zulu = tango.removeEventListener;
                                mike = _closure4_slot0;
                                entity = _closure4_slot2;
                                entity = zulu.bind(tango)(mike, entity);
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        report = 'keydown';
                        report = verify.bind(mike)(report, yankee);
                        verify = options.splice;
                        report = 1;
                        report = verify.bind(options)(offset, report);
 354:
                        report = options.length;
                        if(!(report > entity)) { _fun105651_ip = 413; continue _fun105651 }
 363:
                        yankee = golf.call;
                        offset = _closure1_slot8;
                        romeo = _closure1_slot16;
                        verify = _closure2_slot0;
                        report = _closure2_slot1;
                        report = report.keydown;
                        kilo = romeo.bind(mike)(verify, report);
                        backup = 'keydown';
                        result = golf;
                        output = offset;
                        sizing = options;
                        report = result[yankee](output, sizing, kilo, backup, foxtrot);
 413:
                        report = _closure2_slot1;
                        report = report.keypress;
                        if(!(oscar != report)) { _fun105651_ip = 477; continue _fun105651 }
 427:
                        oscar = golf.call;
                        report = _closure1_slot8;
                        verify = _closure1_slot16;
                        tango = _closure2_slot0;
                        zulu = _closure2_slot1;
                        zulu = zulu.keypress;
                        kilo = verify.bind(mike)(tango, zulu);
                        backup = 'keypress';
                        result = golf;
                        output = report;
                        sizing = options;
                        zulu = result[oscar](output, sizing, kilo, backup, foxtrot);
 477:
                        return mike;
 479:
                        return entity;
 481:
                        entity = 0;
                        return entity;
                    }
                };
                entity = global;
                zulu = entity.Object;
                mike = zulu.entries;
                entity = argFoo;
                options = mike.bind(zulu)(entity);
                entity = options.length;
                golf = 0;
                mike = golf < entity;
                entity = undefined;
                report = 2;
                tango = 1;
                zulu = 0;
                if(!mike) { _fun105650_ip = 104; continue _fun105650 }
 58:
                yankee = options[zulu];
                mike = _closure1_slot3;
                mike = mike.bind(entity)(yankee, report);
                yankee = mike[golf];
                var _closure2_slot0 = yankee;
                mike = mike[tango];
                var _closure2_slot1 = mike;
                mike = verify.bind(entity)();
                zulu = zulu + 1;
                mike = options.length;
                if(zulu < mike) { _fun105650_ip = 58; continue _fun105650 }
 104:
                return entity;
            }
        };
        var _closure1_slot17 = entity;
        mike = global;
        verify = mike.Object;
        options = verify.defineProperty;
        golf = {};
        entity = true;
        golf['value'] = entity;
        entity = '__esModule';
        entity = options.bind(verify)(zulu, entity, golf);
        kilo = 0;
        golf = oscar[kilo];
        entity = undefined;
        golf = romeo.bind(entity)(golf);
        var _closure1_slot3 = golf;
        output = 1;
        golf = oscar[output];
        golf = report.bind(entity)(golf);
        golf = golf.AnalyticEvents;
        var _closure1_slot4 = golf;
        golf = {};
        var _closure1_slot5 = golf;
        golf = new Array(0);
        var _closure1_slot6 = golf;
        golf = false;
        var _closure1_slot7 = golf;
        golf = 2;
        golf = oscar[golf];
        options = romeo.bind(entity)(golf);
        yankee = 3;
        golf = oscar[yankee];
        offset = romeo.bind(entity)(golf);
        update = mike.window;
        verify = offset.prototype;
        verify = Object.create(verify, {constructor: {value: offset}});
        source = verify;
        golf = new source[offset](update, echo);
        golf = golf instanceof Object ? golf : verify;
        offset = options.bind(entity)(golf);
        var _closure1_slot8 = offset;
        foxtrot = 4;
        golf = oscar[foxtrot];
        options = report.bind(entity)(golf);
        golf = options.isMac;
        golf = golf.bind(options)();
        if(golf) { _fun105642_ip = 281; continue _fun105642 }
 255:
        golf = oscar[foxtrot];
        options = report.bind(entity)(golf);
        golf = options.isMacWeb;
        golf = golf.bind(options)();
        verify = 'ctrl';
        if(!golf) { _fun105642_ip = 285; continue _fun105642 }
 281:
        verify = 'cmd';
 285:
        var _closure1_slot9 = verify;
        golf = oscar[foxtrot];
        options = report.bind(entity)(golf);
        golf = options.isMac;
        golf = golf.bind(options)();
        if(golf) { _fun105642_ip = 337; continue _fun105642 }
 311:
        golf = oscar[foxtrot];
        options = report.bind(entity)(golf);
        golf = options.isMacWeb;
        golf = golf.bind(options)();
        options = 'alt';
        if(!golf) { _fun105642_ip = 341; continue _fun105642 }
 337:
        options = 'opt';
 341:
        golf = oscar[foxtrot];
        backup = report.bind(entity)(golf);
        golf = backup.isMac;
        golf = golf.bind(backup)();
        if(golf) { _fun105642_ip = 389; continue _fun105642 }
 363:
        golf = oscar[foxtrot];
        backup = report.bind(entity)(golf);
        golf = backup.isMacWeb;
        backup = golf.bind(backup)();
        golf = 'enter';
        if(!backup) { _fun105642_ip = 393; continue _fun105642 }
 389:
        golf = 'return';
 393:
        backup = 5;
        backup = oscar[backup];
        backup = report.bind(entity)(backup);
        backup = backup.JUMP_TO_GUILD;
        echo = backup.binds;
        sizing = new Array(14);
        update = sizing;
        result = 0;
        backup = arraySpread(update, echo, result);
        kilo = 'mod+shift+[';
        sizing[backup] = kilo;
        backup = backup + output;
        kilo = 'mod+shift+]';
        sizing[backup] = kilo;
        backup = backup + output;
        kilo = 'mod+[';
        sizing[backup] = kilo;
        backup = backup + output;
        kilo = 'mod+]';
        sizing[backup] = kilo;
        backup = backup + output;
        kilo = 'alt+[';
        sizing[backup] = kilo;
        backup = backup + output;
        kilo = 'alt+]';
        sizing[backup] = kilo;
        backup = backup + output;
        kilo = 'ctrl+shift+tab';
        sizing[backup] = kilo;
        backup = backup + output;
        kilo = 'ctrl+tab';
        sizing[backup] = kilo;
        backup = backup + output;
        kilo = 'mod+n';
        sizing[backup] = kilo;
        backup = backup + output;
        kilo = 'mod+t';
        sizing[backup] = kilo;
        backup = backup + output;
        kilo = 'mod+shift+t';
        sizing[backup] = kilo;
        backup = backup + output;
        kilo = 'mod+plus';
        sizing[backup] = kilo;
        backup = backup + output;
        kilo = 'mod+minus';
        sizing[backup] = kilo;
        kilo = 'mod+0';
        backup = backup + output;
        sizing[backup] = kilo;
        kilo = sizing.map;
        backup = function(argFoo) {
            tango = argFoo;
            zulu = tango.replace;
            mike = _closure1_slot9;
            entity = 'mod';
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        backup = kilo.bind(sizing)(backup);
        var _closure1_slot10 = backup;
        backup = function() { // Original name: getKeybindList
            entity = new Array(0);
            return entity;
        };
        var _closure1_slot11 = backup;
        backup = new Array(0);
        var _closure1_slot12 = backup;
        foxtrot = oscar[foxtrot];
        backup = report.bind(entity)(foxtrot);
        foxtrot = backup.isDesktop;
        foxtrot = foxtrot.bind(backup)();
        if(!foxtrot) { _fun105642_ip = 761; continue _fun105642 }
 698:
        yankee = oscar[yankee];
        romeo = romeo.bind(entity)(yankee);
        mike = mike.document;
        update = mike.documentElement;
        yankee = romeo.prototype;
        yankee = Object.create(yankee, {constructor: {value: romeo}});
        source = yankee;
        mike = new source[romeo](update, echo);
        foxtrot = mike instanceof Object ? mike : yankee;
        romeo = foxtrot.bind;
        yankee = 'backspace';
        mike = function(argFoo) {
            mike = argFoo;
            entity = mike.preventDefault;
            entity = entity.bind(mike)();
            return entity;
        };
        mike = romeo.bind(foxtrot)(yankee, mike);
 761:
        mike = {};
        mike['combokeys'] = offset;
        mike['modKey'] = verify;
        mike['altKey'] = options;
        mike['returnKey'] = golf;
        golf = function(argFoo) { // Original name: setGetKeybindList
            entity = argFoo;
            _closure1_slot11 = entity;
            entity = undefined;
            return entity;
        };
        mike['setGetKeybindList'] = golf;
        golf = function(argFoo) { // Original name: checkDupes
            _fun105660: for(var _fun105660_ip = 0; ; ) switch(_fun105660_ip) {
 0:
                entity = global;
                entity = entity.Set;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                yankee = mike;
                entity = new yankee[entity](offset);
                golf = entity instanceof Object ? entity : mike;
                report = new Array(0);
                tango = _closure1_slot13;
                oscar = _closure1_slot15;
                entity = undefined;
                zulu = argFoo;
                zulu = oscar.bind(entity)(zulu);
                oscar = tango.bind(entity)(zulu);
                tango = oscar.bind(entity)();
                zulu = tango.done;
                if(zulu) { _fun105660_ip = 123; continue _fun105660 }
 70:
                options = tango.value;
                zulu = golf.has;
                zulu = zulu.bind(golf)(options);
                if(!zulu) { _fun105660_ip = 98; continue _fun105660 }
 88:
                zulu = report.push;
                zulu = zulu.bind(report)(options);
 98:
                zulu = golf.add;
                zulu = zulu.bind(golf)(options);
                options = oscar.bind(entity)();
                zulu = options.done;
                tango = options;
                if(!zulu) { _fun105660_ip = 70; continue _fun105660 }
 123:
                tango = report.length;
                zulu = 0;
                if(!(tango > zulu)) { _fun105660_ip = 197; continue _fun105660 }
 134:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 7;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                mike = tango.prototype;
                zulu = Object.create(mike, {constructor: {value: tango}});
                offset = 'Keybinds';
                yankee = zulu;
                mike = new yankee[tango](offset, verify);
                tango = mike instanceof Object ? mike : zulu;
                zulu = tango.warn;
                mike = 'Duplicate keyboard shortcuts defined:';
                mike = zulu.bind(tango)(mike, report);
 197:
                return entity;
            }
        };
        mike['checkDupes'] = golf;
        golf = function(argFoo) { // Original name: setLayout
            entity = argFoo;
            _closure1_slot5 = entity;
            entity = undefined;
            return entity;
        };
        mike['setLayout'] = golf;
        golf = function() { // Original name: enable
            _fun105662: for(var _fun105662_ip = 0; ; ) switch(_fun105662_ip) {
 0:
                tango = this;
                mike = _closure1_slot7;
                if(mike) { _fun105662_ip = 49; continue _fun105662 }
 13:
                mike = true;
                _closure1_slot7 = mike;
                zulu = tango.checkDupes;
                mike = _closure1_slot5;
                mike = zulu.bind(tango)(mike);
                zulu = _closure1_slot17;
                mike = _closure1_slot5;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
 49:
                entity = undefined;
                return entity;
            }
        };
        mike['enable'] = golf;
        golf = function(argFoo) { // Original name: enableTemp
            tango = argFoo;
            report = _closure1_slot6;
            mike = report.push;
            entity = _closure1_slot5;
            entity = mike.bind(report)(entity);
            _closure1_slot5 = tango;
            mike = _closure1_slot17;
            entity = undefined;
            mike = mike.bind(entity)(tango);
            mike = true;
            _closure1_slot7 = mike;
            return entity;
        };
        mike['enableTemp'] = golf;
        golf = function() { // Original name: disableTemp
            _fun105664: for(var _fun105664_ip = 0; ; ) switch(_fun105664_ip) {
 0:
                mike = this;
                tango = _closure1_slot6;
                entity = tango.pop;
                entity = entity.bind(tango)();
                tango = null;
                if(!(tango != entity)) { _fun105664_ip = 30; continue _fun105664 }
 26:
                _closure1_slot5 = entity;
 30:
                entity = mike.disable;
                entity = entity.bind(mike)();
                entity = mike.enable;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        mike['disableTemp'] = golf;
        golf = function() { // Original name: disable
            _fun105665: for(var _fun105665_ip = 0; ; ) switch(_fun105665_ip) {
 0:
                mike = _closure1_slot7;
                if(!mike) { _fun105665_ip = 61; continue _fun105665 }
 10:
                mike = false;
                _closure1_slot7 = mike;
                tango = _closure1_slot12;
                zulu = tango.forEach;
                mike = function(argFoo) {
                    mike = argFoo;
                    entity = undefined;
                    entity = mike.bind(entity)();
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                mike = new Array(0);
                _closure1_slot12 = mike;
                mike = _closure1_slot8;
                entity = mike.reset;
                entity = entity.bind(mike)();
 61:
                entity = undefined;
                return entity;
            }
        };
        mike['disable'] = golf;
        golf = function(argFoo) { // Original name: validateKeybind
            _fun105667: for(var _fun105667_ip = 0; ; ) switch(_fun105667_ip) {
 0:
                zulu = argFoo;
                report = this;
                mike = _closure1_slot7;
                if(!mike) { _fun105667_ip = 27; continue _fun105667 }
 16:
                tango = report.hasBind;
                mike = tango.bind(report)(zulu);
 27:
                if(!mike) { _fun105667_ip = 45; continue _fun105667 }
 30:
                mike = _closure1_slot8;
                entity = mike.unbind;
                entity = entity.bind(mike)(zulu);
 45:
                entity = undefined;
                return entity;
            }
        };
        mike['validateKeybind'] = golf;
        tango = function(argFoo) { // Original name: hasBind
            report = argFoo;
            zulu = _closure1_slot15;
            mike = _closure1_slot5;
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            tango = report.replace;
            mike = 'meta';
            entity = 'cmd';
            report = tango.bind(report)(mike, entity);
            tango = report.replace;
            mike = /right |left /i;
            entity = '';
            mike = tango.bind(report)(mike, entity);
            entity = mike.trim;
            mike = entity.bind(mike)();
            entity = zulu.includes;
            entity = entity.bind(zulu)(mike);
            return entity;
        };
        mike['hasBind'] = tango;
        tango = 8;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'lib/Keybinds.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();