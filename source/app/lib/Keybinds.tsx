// app/lib/Keybinds.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        romeon = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = romeon;
        var _closure1_slot2 = oscard;
        entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                var _closure2_slot0 = zuuluu;
                report = global;
                michal = report.Symbol;
                tangon = 'undefined';
                michal = typeof michal;
                michal = tangon !== michal;
                if(!michal) { _fun00004_ip = 46; continue _fun00003 }
 30:
                tangon = report.Symbol;
                tangon = tangon.iterator;
                michal = zuuluu[tangon];
 46:
                if(michal) { _fun00004_ip = 55; continue _fun00003 }
 49:
                michal = zuuluu.@@iterator;
 55:
                if(michal) { _fun00004_ip = 345; continue _fun00003 }
 61:
                oscard = report.Array;
                tangon = oscard.isArray;
                oscard = tangon.bind(oscard)(zuuluu);
                tangon = michal;
                if(oscard) { _fun00004_ip = 323; continue _fun00003 }
 86:
                option = undefined;
                oscard = undefined;
                if(!zuuluu) { _fun00004_ip = 283; continue _fun00003 }
 96:
                verify = 'string';
                golfie = typeof zuuluu;
                if(!(verify !== golfie)) { _fun00004_ip = 270; continue _fun00003 }
 110:
                golfie = {};
                verify = golfie.toString;
                golfie = verify.call;
                yankee = golfie.bind(verify)(zuuluu);
                offset = yankee.slice;
                verify = 8;
                golfie = -1;
                verify = offset.bind(yankee)(verify, golfie);
                golfie = 'Object';
                golfie = golfie === verify;
                if(!golfie) { _fun00004_ip = 163; continue _fun00003 }
 158:
                golfie = zuuluu.constructor;
 163:
                offset = verify;
                if(!golfie) { _fun00004_ip = 179; continue _fun00003 }
 169:
                golfie = zuuluu.constructor;
                offset = golfie.name;
 179:
                golfie = 'Map';
                if(!(golfie !== offset)) { _fun00004_ip = 249; continue _fun00003 }
 187:
                golfie = 'Set';
                if(!(golfie !== offset)) { _fun00004_ip = 249; continue _fun00003 }
 195:
                golfie = 'Arguments';
                if(!(golfie !== offset)) { _fun00004_ip = 234; continue _fun00003 }
 205:
                verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                golfie = verify.test;
                verify = golfie.bind(verify)(offset);
                golfie = undefined;
                if(!verify) { _fun00004_ip = 247; continue _fun00003 }
 234:
                verify = _closure1_slot14;
                golfie = verify.bind(option)(zuuluu, option);
 247:
                _fun00004_ip = 265; continue _fun00003;
 249:
                offset = report.Array;
                verify = offset.from;
                golfie = verify.bind(offset)(zuuluu);
 265:
                oscard = golfie;
                _fun00004_ip = 283; continue _fun00003;
 270:
                golfie = _closure1_slot14;
                oscard = golfie.bind(option)(zuuluu, option);
 283:
                tangon = oscard;
                if(tangon) { _fun00004_ip = 323; continue _fun00003 }
 289:
                golfie = report.TypeError;
                report = golfie.prototype;
                oscard = Object.create(report, {constructor: {value: golfie}});
                foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                backup = oscard;
                report = new backup[golfie](foxtra, romeon);
                report = report instanceof Object ? report : oscard;
                throw report;
 323:
                if(!tangon) { _fun00004_ip = 330; continue _fun00003 }
 326:
                _closure2_slot0 = tangon;
 330:
                tangon = 0;
                var _closure2_slot1 = tangon;
                entity = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = _closure2_slot1;
                        entity = _closure2_slot0;
                        entity = entity.length;
                        if(!(!(michal >= entity))) { _fun00006_ip = 56; continue _fun00005 }
 20:
                        entity = {};
                        michal = false;
                        entity['done'] = michal;
                        zuuluu = _closure2_slot0;
                        michal = _closure2_slot1;
                        michal = parseFloat(michal);
                        tangon = michal + 1;
                        _closure2_slot1 = tangon;
                        michal = zuuluu[michal];
                        entity['value'] = michal;
                        _fun00006_ip = 67; continue _fun00005;
 56:
                        michal = {};
                        zuuluu = true;
                        michal['done'] = zuuluu;
                        entity = michal;
 67:
                        return entity;
                    }
                };
                return entity;
 345:
                entity = michal.call;
                zuuluu = entity.bind(michal)(zuuluu);
                michal = zuuluu.next;
                entity = michal.bind;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            }
        };
        var _closure1_slot13 = entity;
        entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                entity = null;
                zuuluu = undefined;
                entity = entity == zuuluu;
                if(entity) { _fun00008_ip = 23; continue _fun00007 }
 14:
                michal = tangon.length;
                entity = zuuluu > michal;
 23:
                michal = undefined;
                if(!entity) { _fun00008_ip = 33; continue _fun00007 }
 28:
                michal = tangon.length;
 33:
                entity = global;
                entity = entity.Array;
                entity = entity.bind(zuuluu)(michal);
                zuuluu = 0;
                report = zuuluu < michal;
                if(!report) { _fun00008_ip = 70; continue _fun00007 }
 55:
                report = tangon[zuuluu];
                entity[zuuluu] = report;
                zuuluu = zuuluu + 1;
                if(zuuluu < michal) { _fun00008_ip = 55; continue _fun00007 }
 70:
                return entity;
            }
        };
        var _closure1_slot14 = entity;
        entity = function(argFoo) { // Original name: getAllKeybinds
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = new Array(0);
                entity = global;
                tangon = entity.Object;
                michal = tangon.values;
                entity = argFoo;
                oscard = michal.bind(tangon)(entity);
                entity = oscard.length;
                report = 0;
                entity = report < entity;
                tangon = null;
                michal = 0;
                if(!entity) { _fun00010_ip = 100; continue _fun00009 }
 43:
                entity = oscard[michal];
                if(!(tangon != entity)) { _fun00010_ip = 88; continue _fun00009 }
 51:
                golfie = zuuluu.push;
                offset = entity.binds;
                entity = new Array(0);
                yankee = entity;
                verify = 0;
                option = arraySpread(yankee, offset, verify);
                yankee = golfie;
                offset = entity;
                verify = zuuluu;
                entity = apply(yankee, offset, verify);
 88:
                michal = michal + 1;
                entity = oscard.length;
                if(michal < entity) { _fun00010_ip = 43; continue _fun00009 }
 100:
                michal = zuuluu.map;
                entity = function(argFoo) {
                    tangon = argFoo;
                    zuuluu = tangon.replace;
                    michal = _closure1_slot9;
                    entity = 'mod';
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        var _closure1_slot15 = entity;
        entity = function(argFoo, argBar) { // Original name: wrapBind
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            entity = function(argFoo, argBar) {
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 6;
                michal = tangon[michal];
                tangon = undefined;
                oscard = zuuluu.bind(tangon)(michal);
                report = oscard.track;
                entity = _closure1_slot4;
                zuuluu = entity.KEYBOARD_SHORTCUT_USED;
                michal = {};
                golfie = _closure2_slot0;
                michal['shortcut_name'] = golfie;
                michal = report.bind(oscard)(zuuluu, michal);
                zuuluu = _closure2_slot1;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            return entity;
        };
        var _closure1_slot16 = entity;
        entity = function(argFoo) { // Original name: registerBinds
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                verify = function() { // Original name: _loop
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = _closure2_slot1;
                        oscard = null;
                        if(!(oscard != entity)) { _fun00014_ip = 481; continue _fun00013 }
 18:
                        entity = _closure1_slot11;
                        michal = undefined;
                        option = entity.bind(michal)();
                        var _closure3_slot0 = option;
                        golfie = _closure1_slot0;
                        verify = _closure1_slot2;
                        entity = 4;
                        entity = verify[entity];
                        entity = golfie.bind(michal)(entity);
                        entity = entity.isPlatformEmbedded;
                        if(entity) { _fun00014_ip = 82; continue _fun00013 }
 64:
                        golfie = option.concat;
                        entity = _closure1_slot10;
                        entity = golfie.bind(option)(entity);
                        _closure3_slot0 = entity;
 82:
                        entity = _closure2_slot1;
                        option = entity.binds;
                        golfie = option.filter;
                        entity = function(argFoo) {
                            tangon = argFoo;
                            zuuluu = tangon.replace;
                            michal = _closure1_slot9;
                            entity = 'mod';
                            zuuluu = zuuluu.bind(tangon)(entity, michal);
                            michal = _closure3_slot0;
                            entity = michal.indexOf;
                            michal = entity.bind(michal)(zuuluu);
                            entity = 0;
                            entity = michal < entity;
                            return entity;
                        };
                        option = golfie.bind(option)(entity);
                        golfie = option.length;
                        entity = 0;
                        if(!(entity !== golfie)) { _fun00014_ip = 479; continue _fun00013 }
 123:
                        golfie = _closure2_slot1;
                        golfie = golfie.comboKeysBindGlobal;
                        verify = _closure1_slot8;
                        if(golfie) { _fun00014_ip = 147; continue _fun00013 }
 140:
                        golfie = verify.bind;
                        _fun00014_ip = 153; continue _fun00013;
 147:
                        golfie = verify.bindGlobal;
 153:
                        verify = _closure2_slot1;
                        verify = verify.action;
                        if(!(oscard != verify)) { _fun00014_ip = 205; continue _fun00013 }
 166:
                        yankee = golfie.call;
                        offset = _closure1_slot8;
                        foxtra = _closure1_slot16;
                        romeon = _closure2_slot0;
                        verify = _closure2_slot1;
                        verify = verify.action;
                        verify = foxtra.bind(michal)(romeon, verify);
                        verify = yankee.bind(golfie)(offset, option, verify);
 205:
                        verify = _closure2_slot1;
                        verify = verify.keyup;
                        if(!(oscard != verify)) { _fun00014_ip = 269; continue _fun00013 }
 219:
                        romeon = golfie.call;
                        yankee = _closure1_slot8;
                        foxtra = _closure1_slot16;
                        offset = _closure2_slot0;
                        verify = _closure2_slot1;
                        verify = verify.keyup;
                        kiloes = foxtra.bind(michal)(offset, verify);
                        backup = 'keyup';
                        result = golfie;
                        output = yankee;
                        sizing = option;
                        verify = result[romeon](output, sizing, kiloes, backup, foxtra);
 269:
                        verify = _closure2_slot1;
                        verify = verify.keydown;
                        if(!(oscard != verify)) { _fun00014_ip = 413; continue _fun00013 }
 286:
                        offset = option.indexOf;
                        verify = 'any-character';
                        offset = offset.bind(option)(verify);
                        verify = -1;
                        if(!(verify !== offset)) { _fun00014_ip = 354; continue _fun00013 }
 312:
                        verify = _closure2_slot1;
                        yankee = verify.keydown;
                        verify = function(argFoo, argBar) { // Original name: nativeBind
                            report = 'keydown';
                            var _closure4_slot0 = report;
                            michal = argBar;
                            var _closure4_slot1 = michal;
                            tangon = function(argFoo) { // Original name: wrappedCallback
                                tangon = argFoo;
                                zuuluu = _closure4_slot1;
                                michal = tangon.key;
                                entity = undefined;
                                entity = zuuluu.bind(entity)(tangon, michal);
                                return entity;
                            };
                            var _closure4_slot2 = tangon;
                            michal = global;
                            zuuluu = michal.document;
                            michal = zuuluu.addEventListener;
                            michal = michal.bind(zuuluu)(report, tangon);
                            zuuluu = _closure1_slot12;
                            michal = zuuluu.push;
                            entity = function() {
                                entity = global;
                                tangon = entity.document;
                                zuuluu = tangon.removeEventListener;
                                michal = _closure4_slot0;
                                entity = _closure4_slot2;
                                entity = zuuluu.bind(tangon)(michal, entity);
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        report = 'keydown';
                        report = verify.bind(michal)(report, yankee);
                        verify = option.splice;
                        report = 1;
                        report = verify.bind(option)(offset, report);
 354:
                        report = option.length;
                        if(!(report > entity)) { _fun00014_ip = 413; continue _fun00013 }
 363:
                        yankee = golfie.call;
                        offset = _closure1_slot8;
                        romeon = _closure1_slot16;
                        verify = _closure2_slot0;
                        report = _closure2_slot1;
                        report = report.keydown;
                        kiloes = romeon.bind(michal)(verify, report);
                        backup = 'keydown';
                        result = golfie;
                        output = offset;
                        sizing = option;
                        report = result[yankee](output, sizing, kiloes, backup, foxtra);
 413:
                        report = _closure2_slot1;
                        report = report.keypress;
                        if(!(oscard != report)) { _fun00014_ip = 477; continue _fun00013 }
 427:
                        oscard = golfie.call;
                        report = _closure1_slot8;
                        verify = _closure1_slot16;
                        tangon = _closure2_slot0;
                        zuuluu = _closure2_slot1;
                        zuuluu = zuuluu.keypress;
                        kiloes = verify.bind(michal)(tangon, zuuluu);
                        backup = 'keypress';
                        result = golfie;
                        output = report;
                        sizing = option;
                        zuuluu = result[oscard](output, sizing, kiloes, backup, foxtra);
 477:
                        return michal;
 479:
                        return entity;
 481:
                        entity = 0;
                        return entity;
                    }
                };
                entity = global;
                zuuluu = entity.Object;
                michal = zuuluu.entries;
                entity = argFoo;
                option = michal.bind(zuuluu)(entity);
                entity = option.length;
                golfie = 0;
                michal = golfie < entity;
                entity = undefined;
                report = 2;
                tangon = 1;
                zuuluu = 0;
                if(!michal) { _fun00012_ip = 104; continue _fun00011 }
 58:
                yankee = option[zuuluu];
                michal = _closure1_slot3;
                michal = michal.bind(entity)(yankee, report);
                yankee = michal[golfie];
                var _closure2_slot0 = yankee;
                michal = michal[tangon];
                var _closure2_slot1 = michal;
                michal = verify.bind(entity)();
                zuuluu = zuuluu + 1;
                michal = option.length;
                if(zuuluu < michal) { _fun00012_ip = 58; continue _fun00011 }
 104:
                return entity;
            }
        };
        var _closure1_slot17 = entity;
        michal = global;
        verify = michal.Object;
        option = verify.defineProperty;
        golfie = {};
        entity = true;
        golfie['value'] = entity;
        entity = '__esModule';
        entity = option.bind(verify)(zuuluu, entity, golfie);
        kiloes = 0;
        golfie = oscard[kiloes];
        entity = undefined;
        golfie = romeon.bind(entity)(golfie);
        var _closure1_slot3 = golfie;
        output = 1;
        golfie = oscard[output];
        golfie = report.bind(entity)(golfie);
        golfie = golfie.AnalyticEvents;
        var _closure1_slot4 = golfie;
        golfie = {};
        var _closure1_slot5 = golfie;
        golfie = new Array(0);
        var _closure1_slot6 = golfie;
        golfie = false;
        var _closure1_slot7 = golfie;
        golfie = 2;
        golfie = oscard[golfie];
        option = romeon.bind(entity)(golfie);
        yankee = 3;
        golfie = oscard[yankee];
        offset = romeon.bind(entity)(golfie);
        update = michal.window;
        verify = offset.prototype;
        verify = Object.create(verify, {constructor: {value: offset}});
        source = verify;
        golfie = new source[offset](update, echoed);
        golfie = golfie instanceof Object ? golfie : verify;
        offset = option.bind(entity)(golfie);
        var _closure1_slot8 = offset;
        foxtra = 4;
        golfie = oscard[foxtra];
        option = report.bind(entity)(golfie);
        golfie = option.isMac;
        golfie = golfie.bind(option)();
        if(golfie) { _fun00002_ip = 281; continue _fun00001 }
 255:
        golfie = oscard[foxtra];
        option = report.bind(entity)(golfie);
        golfie = option.isMacWeb;
        golfie = golfie.bind(option)();
        verify = 'ctrl';
        if(!golfie) { _fun00002_ip = 285; continue _fun00001 }
 281:
        verify = 'cmd';
 285:
        var _closure1_slot9 = verify;
        golfie = oscard[foxtra];
        option = report.bind(entity)(golfie);
        golfie = option.isMac;
        golfie = golfie.bind(option)();
        if(golfie) { _fun00002_ip = 337; continue _fun00001 }
 311:
        golfie = oscard[foxtra];
        option = report.bind(entity)(golfie);
        golfie = option.isMacWeb;
        golfie = golfie.bind(option)();
        option = 'alt';
        if(!golfie) { _fun00002_ip = 341; continue _fun00001 }
 337:
        option = 'opt';
 341:
        golfie = oscard[foxtra];
        backup = report.bind(entity)(golfie);
        golfie = backup.isMac;
        golfie = golfie.bind(backup)();
        if(golfie) { _fun00002_ip = 389; continue _fun00001 }
 363:
        golfie = oscard[foxtra];
        backup = report.bind(entity)(golfie);
        golfie = backup.isMacWeb;
        backup = golfie.bind(backup)();
        golfie = 'enter';
        if(!backup) { _fun00002_ip = 393; continue _fun00001 }
 389:
        golfie = 'return';
 393:
        backup = 5;
        backup = oscard[backup];
        backup = report.bind(entity)(backup);
        backup = backup.JUMP_TO_GUILD;
        echoed = backup.binds;
        sizing = new Array(14);
        update = sizing;
        result = 0;
        backup = arraySpread(update, echoed, result);
        kiloes = 'mod+shift+[';
        sizing[backup] = kiloes;
        backup = backup + output;
        kiloes = 'mod+shift+]';
        sizing[backup] = kiloes;
        backup = backup + output;
        kiloes = 'mod+[';
        sizing[backup] = kiloes;
        backup = backup + output;
        kiloes = 'mod+]';
        sizing[backup] = kiloes;
        backup = backup + output;
        kiloes = 'alt+[';
        sizing[backup] = kiloes;
        backup = backup + output;
        kiloes = 'alt+]';
        sizing[backup] = kiloes;
        backup = backup + output;
        kiloes = 'ctrl+shift+tab';
        sizing[backup] = kiloes;
        backup = backup + output;
        kiloes = 'ctrl+tab';
        sizing[backup] = kiloes;
        backup = backup + output;
        kiloes = 'mod+n';
        sizing[backup] = kiloes;
        backup = backup + output;
        kiloes = 'mod+t';
        sizing[backup] = kiloes;
        backup = backup + output;
        kiloes = 'mod+shift+t';
        sizing[backup] = kiloes;
        backup = backup + output;
        kiloes = 'mod+plus';
        sizing[backup] = kiloes;
        backup = backup + output;
        kiloes = 'mod+minus';
        sizing[backup] = kiloes;
        kiloes = 'mod+0';
        backup = backup + output;
        sizing[backup] = kiloes;
        kiloes = sizing.map;
        backup = function(argFoo) {
            tangon = argFoo;
            zuuluu = tangon.replace;
            michal = _closure1_slot9;
            entity = 'mod';
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        backup = kiloes.bind(sizing)(backup);
        var _closure1_slot10 = backup;
        backup = function() { // Original name: getKeybindList
            entity = new Array(0);
            return entity;
        };
        var _closure1_slot11 = backup;
        backup = new Array(0);
        var _closure1_slot12 = backup;
        foxtra = oscard[foxtra];
        backup = report.bind(entity)(foxtra);
        foxtra = backup.isDesktop;
        foxtra = foxtra.bind(backup)();
        if(!foxtra) { _fun00002_ip = 761; continue _fun00001 }
 698:
        yankee = oscard[yankee];
        romeon = romeon.bind(entity)(yankee);
        michal = michal.document;
        update = michal.documentElement;
        yankee = romeon.prototype;
        yankee = Object.create(yankee, {constructor: {value: romeon}});
        source = yankee;
        michal = new source[romeon](update, echoed);
        foxtra = michal instanceof Object ? michal : yankee;
        romeon = foxtra.bind;
        yankee = 'backspace';
        michal = function(argFoo) {
            michal = argFoo;
            entity = michal.preventDefault;
            entity = entity.bind(michal)();
            return entity;
        };
        michal = romeon.bind(foxtra)(yankee, michal);
 761:
        michal = {};
        michal['combokeys'] = offset;
        michal['modKey'] = verify;
        michal['altKey'] = option;
        michal['returnKey'] = golfie;
        golfie = function(argFoo) { // Original name: setGetKeybindList
            entity = argFoo;
            _closure1_slot11 = entity;
            entity = undefined;
            return entity;
        };
        michal['setGetKeybindList'] = golfie;
        golfie = function(argFoo) { // Original name: checkDupes
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = global;
                entity = entity.Set;
                michal = entity.prototype;
                michal = Object.create(michal, {constructor: {value: entity}});
                yankee = michal;
                entity = new yankee[entity](offset);
                golfie = entity instanceof Object ? entity : michal;
                report = new Array(0);
                tangon = _closure1_slot13;
                oscard = _closure1_slot15;
                entity = undefined;
                zuuluu = argFoo;
                zuuluu = oscard.bind(entity)(zuuluu);
                oscard = tangon.bind(entity)(zuuluu);
                tangon = oscard.bind(entity)();
                zuuluu = tangon.done;
                if(zuuluu) { _fun00016_ip = 123; continue _fun00015 }
 70:
                option = tangon.value;
                zuuluu = golfie.has;
                zuuluu = zuuluu.bind(golfie)(option);
                if(!zuuluu) { _fun00016_ip = 98; continue _fun00015 }
 88:
                zuuluu = report.push;
                zuuluu = zuuluu.bind(report)(option);
 98:
                zuuluu = golfie.add;
                zuuluu = zuuluu.bind(golfie)(option);
                option = oscard.bind(entity)();
                zuuluu = option.done;
                tangon = option;
                if(!zuuluu) { _fun00016_ip = 70; continue _fun00015 }
 123:
                tangon = report.length;
                zuuluu = 0;
                if(!(tangon > zuuluu)) { _fun00016_ip = 197; continue _fun00015 }
 134:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 7;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                michal = tangon.prototype;
                zuuluu = Object.create(michal, {constructor: {value: tangon}});
                offset = 'Keybinds';
                yankee = zuuluu;
                michal = new yankee[tangon](offset, verify);
                tangon = michal instanceof Object ? michal : zuuluu;
                zuuluu = tangon.warn;
                michal = 'Duplicate keyboard shortcuts defined:';
                michal = zuuluu.bind(tangon)(michal, report);
 197:
                return entity;
            }
        };
        michal['checkDupes'] = golfie;
        golfie = function(argFoo) { // Original name: setLayout
            entity = argFoo;
            _closure1_slot5 = entity;
            entity = undefined;
            return entity;
        };
        michal['setLayout'] = golfie;
        golfie = function() { // Original name: enable
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tangon = this;
                michal = _closure1_slot7;
                if(michal) { _fun00018_ip = 49; continue _fun00017 }
 13:
                michal = true;
                _closure1_slot7 = michal;
                zuuluu = tangon.checkDupes;
                michal = _closure1_slot5;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = _closure1_slot17;
                michal = _closure1_slot5;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
 49:
                entity = undefined;
                return entity;
            }
        };
        michal['enable'] = golfie;
        golfie = function(argFoo) { // Original name: enableTemp
            tangon = argFoo;
            report = _closure1_slot6;
            michal = report.push;
            entity = _closure1_slot5;
            entity = michal.bind(report)(entity);
            _closure1_slot5 = tangon;
            michal = _closure1_slot17;
            entity = undefined;
            michal = michal.bind(entity)(tangon);
            michal = true;
            _closure1_slot7 = michal;
            return entity;
        };
        michal['enableTemp'] = golfie;
        golfie = function() { // Original name: disableTemp
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = this;
                tangon = _closure1_slot6;
                entity = tangon.pop;
                entity = entity.bind(tangon)();
                tangon = null;
                if(!(tangon != entity)) { _fun00020_ip = 30; continue _fun00019 }
 26:
                _closure1_slot5 = entity;
 30:
                entity = michal.disable;
                entity = entity.bind(michal)();
                entity = michal.enable;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            }
        };
        michal['disableTemp'] = golfie;
        golfie = function() { // Original name: disable
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                michal = _closure1_slot7;
                if(!michal) { _fun00022_ip = 61; continue _fun00021 }
 10:
                michal = false;
                _closure1_slot7 = michal;
                tangon = _closure1_slot12;
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    michal = argFoo;
                    entity = undefined;
                    entity = michal.bind(entity)();
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                michal = new Array(0);
                _closure1_slot12 = michal;
                michal = _closure1_slot8;
                entity = michal.reset;
                entity = entity.bind(michal)();
 61:
                entity = undefined;
                return entity;
            }
        };
        michal['disable'] = golfie;
        golfie = function(argFoo) { // Original name: validateKeybind
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                zuuluu = argFoo;
                report = this;
                michal = _closure1_slot7;
                if(!michal) { _fun00024_ip = 27; continue _fun00023 }
 16:
                tangon = report.hasBind;
                michal = tangon.bind(report)(zuuluu);
 27:
                if(!michal) { _fun00024_ip = 45; continue _fun00023 }
 30:
                michal = _closure1_slot8;
                entity = michal.unbind;
                entity = entity.bind(michal)(zuuluu);
 45:
                entity = undefined;
                return entity;
            }
        };
        michal['validateKeybind'] = golfie;
        tangon = function(argFoo) { // Original name: hasBind
            report = argFoo;
            zuuluu = _closure1_slot15;
            michal = _closure1_slot5;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            tangon = report.replace;
            michal = 'meta';
            entity = 'cmd';
            report = tangon.bind(report)(michal, entity);
            tangon = report.replace;
            michal = /right |left /i;
            entity = '';
            michal = tangon.bind(report)(michal, entity);
            entity = michal.trim;
            michal = entity.bind(michal)();
            entity = zuuluu.includes;
            entity = entity.bind(zuuluu)(michal);
            return entity;
        };
        michal['hasBind'] = tangon;
        tangon = 8;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'lib/Keybinds.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();