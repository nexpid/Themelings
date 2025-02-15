// app/modules/voice_panel/native/hooks/useVoicePanelParticipants.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun121606: for(var _fun121606_ip = 0; ; ) switch(_fun121606_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun121606_ip = 46; continue _fun121606 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun121606_ip = 55; continue _fun121606 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun121606_ip = 345; continue _fun121606 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun121606_ip = 323; continue _fun121606 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun121606_ip = 283; continue _fun121606 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun121606_ip = 270; continue _fun121606 }
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
            if(!golf) { _fun121606_ip = 163; continue _fun121606 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun121606_ip = 179; continue _fun121606 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun121606_ip = 249; continue _fun121606 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun121606_ip = 249; continue _fun121606 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun121606_ip = 234; continue _fun121606 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun121606_ip = 247; continue _fun121606 }
 234:
            verify = _closure1_slot16;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun121606_ip = 265; continue _fun121606;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun121606_ip = 283; continue _fun121606;
 270:
            golf = _closure1_slot16;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun121606_ip = 323; continue _fun121606 }
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
            if(!tango) { _fun121606_ip = 330; continue _fun121606 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun121607: for(var _fun121607_ip = 0; ; ) switch(_fun121607_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun121607_ip = 56; continue _fun121607 }
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
                    _fun121607_ip = 67; continue _fun121607;
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
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun121608: for(var _fun121608_ip = 0; ; ) switch(_fun121608_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun121608_ip = 23; continue _fun121608 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun121608_ip = 33; continue _fun121608 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun121608_ip = 70; continue _fun121608 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun121608_ip = 55; continue _fun121608 }
 70:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: getMemoizedParticipant
        _fun121609: for(var _fun121609_ip = 0; ; ) switch(_fun121609_ip) {
 0:
            mike = argFoo;
            report = argBar;
            golf = mike.type;
            oscar = mike.id;
            entity = global;
            entity = entity.HermesInternal;
            tango = entity.concat;
            zulu = '';
            entity = '-';
            tango = tango.bind(zulu)(golf, entity, oscar);
            entity = report.get;
            entity = entity.bind(report)(tango);
            zulu = null;
            if(!(zulu == entity)) { _fun121609_ip = 74; continue _fun121609 }
 60:
            zulu = report.set;
            zulu = zulu.bind(report)(tango, mike);
            entity = mike;
 74:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.VoicePanelCardItemType;
    var _closure1_slot11 = golf;
    tango = tango.VoicePanelCTACard;
    var _closure1_slot12 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RTCConnectionStates;
    var _closure1_slot13 = tango;
    tango = new Array(0);
    var _closure1_slot14 = tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/hooks/useVoicePanelParticipants.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: useVoicePanelCards
        _fun121610: for(var _fun121610_ip = 0; ; ) switch(_fun121610_ip) {
 0:
            foxtrot = argFoo;
            romeo = argBar;
            var _closure2_slot0 = foxtrot;
            var _closure2_slot1 = romeo;
            mike = _closure1_slot6;
            entity = mike.getId;
            verify = entity.bind(mike)();
            var _closure2_slot2 = verify;
            mike = _closure1_slot7;
            entity = mike.getChannel;
            oscar = entity.bind(mike)(foxtrot);
            mike = null;
            report = mike == oscar;
            golf = undefined;
            entity = undefined;
            if(report) { _fun121610_ip = 74; continue _fun121610 }
 64:
            report = oscar.isDM;
            entity = report.bind(oscar)();
 74:
            offset = mike != entity;
            if(!offset) { _fun121610_ip = 84; continue _fun121610 }
 81:
            offset = entity;
 84:
            var _closure2_slot3 = offset;
            mike = _closure1_slot1;
            kilo = _closure1_slot2;
            entity = 10;
            entity = kilo[entity];
            entity = mike.bind(golf)(entity);
            mike = entity.bind(golf)(foxtrot);
            var _closure2_slot4 = mike;
            options = _closure1_slot4;
            report = options.useState;
            entity = function() {
                entity = global;
                entity = entity.Map;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                zulu = mike;
                entity = new zulu[entity](mike);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            };
            oscar = report.bind(options)(entity);
            report = _closure1_slot3;
            entity = 1;
            report = report.bind(golf)(oscar, entity);
            entity = 0;
            yankee = report[entity];
            var _closure2_slot5 = yankee;
            oscar = options.useEffect;
            report = new Array(1);
            report[0] = yankee;
            entity = function() {
                entity = function() {
                    mike = _closure2_slot5;
                    entity = mike.clear;
                    entity = entity.bind(mike)();
                    return entity;
                };
                return entity;
            };
            entity = oscar.bind(options)(entity, report);
            oscar = _closure1_slot0;
            report = 11;
            entity = kilo[report];
            sizing = oscar.bind(golf)(entity);
            backup = sizing.useStateFromStores;
            entity = _closure1_slot8;
            options = new Array(1);
            options[0] = entity;
            entity = function() {
                zulu = _closure1_slot8;
                mike = zulu.getState;
                mike = mike.bind(zulu)();
                entity = _closure1_slot13;
                entity = entity.RTC_CONNECTED;
                entity = mike === entity;
                return entity;
            };
            options = backup.bind(sizing)(options, entity);
            var _closure2_slot6 = options;
            entity = 12;
            entity = kilo[entity];
            backup = oscar.bind(golf)(entity);
            entity = backup.useDesyncedChannelParticipants;
            backup = entity.bind(backup)(foxtrot);
            var _closure2_slot7 = backup;
            entity = {};
            report = kilo[report];
            golf = oscar.bind(golf)(report);
            oscar = golf.useStateFromStoresArray;
            kilo = _closure1_slot5;
            report = new Array(2);
            report[0] = kilo;
            tango = _closure1_slot10;
            report[1] = tango;
            tango = new Array(8);
            tango[0] = mike;
            tango[1] = backup;
            tango[2] = foxtrot;
            tango[3] = romeo;
            tango[4] = yankee;
            tango[5] = offset;
            tango[6] = verify;
            tango[7] = options;
            zulu = function() {
                _fun121615: for(var _fun121615_ip = 0; ; ) switch(_fun121615_ip) {
 0:
                    entity = _closure2_slot4;
                    if(entity) { _fun121615_ip = 73; continue _fun121615 }
 13:
                    oscar = _closure1_slot10;
                    report = oscar.getVoiceStatesForChannelAlt;
                    tango = _closure2_slot0;
                    entity = _closure2_slot1;
                    report = report.bind(oscar)(tango, entity);
                    tango = report.map;
                    entity = function(argFoo) {
                        tango = _closure1_slot17;
                        zulu = {};
                        entity = _closure1_slot11;
                        entity = entity.PARTICIPANT;
                        zulu['type'] = entity;
                        entity = argFoo;
                        entity = entity.user;
                        entity = entity.id;
                        zulu['id'] = entity;
                        mike = _closure2_slot5;
                        entity = undefined;
                        entity = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    entity = tango.bind(report)(entity);
                    report = entity.length;
                    tango = 0;
                    if(!(!(report > tango))) { _fun121615_ip = 71; continue _fun121615 }
 67:
                    entity = _closure1_slot14;
 71:
                    return entity;
 73:
                    golf = _closure1_slot5;
                    entity = golf.getVoiceParticipantsHidden;
                    tango = _closure2_slot0;
                    report = entity.bind(golf)(tango);
                    oscar = new Array(0);
                    entity = golf.getFilteredParticipants;
                    options = entity.bind(golf)(tango);
                    entity = options.length;
                    tango = 0;
                    entity = tango < entity;
                    golf = 0;
                    if(!entity) { _fun121615_ip = 149; continue _fun121615 }
 123:
                    verify = options[golf];
                    entity = oscar.push;
                    entity = entity.bind(oscar)(verify);
                    golf = golf + 1;
                    entity = options.length;
                    if(golf < entity) { _fun121615_ip = 123; continue _fun121615 }
 149:
                    if(report) { _fun121615_ip = 219; continue _fun121615 }
 152:
                    golf = _closure2_slot7;
                    entity = null;
                    if(!(entity != golf)) { _fun121615_ip = 219; continue _fun121615 }
 162:
                    golf = _closure1_slot15;
                    entity = _closure2_slot7;
                    verify = undefined;
                    options = golf.bind(verify)(entity);
                    golf = options.bind(verify)();
                    entity = golf.done;
                    if(entity) { _fun121615_ip = 219; continue _fun121615 }
 189:
                    offset = golf.value;
                    entity = oscar.push;
                    entity = entity.bind(oscar)(offset);
                    offset = options.bind(verify)();
                    entity = offset.done;
                    golf = offset;
                    if(!entity) { _fun121615_ip = 189; continue _fun121615 }
 219:
                    entity = new Array(0);
                    golf = oscar.length;
                    golf = tango < golf;
                    options = undefined;
                    yankee = undefined;
                    offset = 0;
                    verify = undefined;
                    if(!golf) { _fun121615_ip = 340; continue _fun121615 }
 243:
                    golf = oscar[offset];
                    foxtrot = _closure1_slot17;
                    romeo = {};
                    backup = _closure1_slot11;
                    backup = backup.PARTICIPANT;
                    romeo['type'] = backup;
                    golf = golf.id;
                    romeo['id'] = golf;
                    golf = _closure2_slot5;
                    foxtrot = foxtrot.bind(options)(romeo, golf);
                    golf = _closure2_slot3;
                    if(!golf) { _fun121615_ip = 309; continue _fun121615 }
 293:
                    backup = foxtrot.id;
                    golf = _closure2_slot2;
                    romeo = foxtrot;
                    if(!(backup !== golf)) { _fun121615_ip = 322; continue _fun121615 }
 309:
                    golf = entity.push;
                    golf = golf.bind(entity)(foxtrot);
                    romeo = yankee;
 322:
                    offset = offset + 1;
                    golf = oscar.length;
                    yankee = romeo;
                    verify = yankee;
                    if(offset < golf) { _fun121615_ip = 243; continue _fun121615 }
 340:
                    golf = null;
                    if(!(golf != verify)) { _fun121615_ip = 356; continue _fun121615 }
 346:
                    golf = entity.push;
                    golf = golf.bind(entity)(verify);
 356:
                    golf = _closure2_slot4;
                    if(!golf) { _fun121615_ip = 518; continue _fun121615 }
 366:
                    golf = _closure2_slot3;
                    if(!golf) { _fun121615_ip = 377; continue _fun121615 }
 373:
                    golf = _closure2_slot6;
 377:
                    if(!golf) { _fun121615_ip = 392; continue _fun121615 }
 380:
                    offset = entity.length;
                    verify = 1;
                    golf = verify === offset;
 392:
                    if(!golf) { _fun121615_ip = 449; continue _fun121615 }
 395:
                    verify = entity.push;
                    yankee = _closure1_slot17;
                    offset = {};
                    golf = _closure1_slot11;
                    golf = golf.CTA;
                    offset['type'] = golf;
                    golf = _closure1_slot12;
                    golf = golf.CALLER_DISCONNECTED;
                    offset['id'] = golf;
                    golf = _closure2_slot5;
                    golf = yankee.bind(options)(offset, golf);
                    golf = verify.bind(entity)(golf);
 449:
                    if(!report) { _fun121615_ip = 461; continue _fun121615 }
 452:
                    oscar = oscar.length;
                    report = tango === oscar;
 461:
                    if(!report) { _fun121615_ip = 518; continue _fun121615 }
 464:
                    report = entity.push;
                    golf = _closure1_slot17;
                    oscar = {};
                    verify = _closure1_slot11;
                    verify = verify.CTA;
                    oscar['type'] = verify;
                    verify = _closure1_slot12;
                    verify = verify.NO_VIDEO_PARTICIPANTS;
                    oscar['id'] = verify;
                    zulu = _closure2_slot5;
                    zulu = golf.bind(options)(oscar, zulu);
                    zulu = report.bind(entity)(zulu);
 518:
                    zulu = entity.length;
                    if(!(!(zulu > tango))) { _fun121615_ip = 531; continue _fun121615 }
 527:
                    entity = _closure1_slot14;
 531:
                    return entity;
                }
            };
            zulu = oscar.bind(golf)(report, zulu, tango);
            entity['items'] = zulu;
            entity['isConnected'] = mike;
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo, argBar) { // Original name: useChunkedParticipants
        yankee = argFoo;
        options = argBar;
        var _closure2_slot0 = yankee;
        var _closure2_slot1 = options;
        tango = _closure1_slot6;
        zulu = tango.getId;
        oscar = zulu.bind(tango)();
        var _closure2_slot2 = oscar;
        kilo = _closure1_slot4;
        tango = kilo.useContext;
        golf = _closure1_slot1;
        romeo = _closure1_slot2;
        zulu = 13;
        zulu = romeo[zulu];
        report = undefined;
        zulu = golf.bind(report)(zulu);
        zulu = tango.bind(kilo)(zulu);
        verify = zulu.layoutManager;
        var _closure2_slot3 = verify;
        tango = _closure1_slot0;
        zulu = 14;
        zulu = romeo[zulu];
        golf = tango.bind(report)(zulu);
        zulu = golf.useManagerSubscription;
        golf = zulu.bind(golf)(verify);
        var _closure2_slot4 = golf;
        offset = kilo.useState;
        zulu = function() {
            entity = global;
            entity = entity.Map;
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            zulu = mike;
            entity = new zulu[entity](mike);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        foxtrot = offset.bind(kilo)(zulu);
        offset = _closure1_slot3;
        zulu = 1;
        offset = offset.bind(report)(foxtrot, zulu);
        zulu = 0;
        offset = offset[zulu];
        var _closure2_slot5 = offset;
        backup = kilo.useEffect;
        foxtrot = new Array(1);
        foxtrot[0] = offset;
        zulu = function() {
            entity = function() {
                mike = _closure2_slot5;
                entity = mike.clear;
                entity = entity.bind(mike)();
                return entity;
            };
            return entity;
        };
        zulu = backup.bind(kilo)(zulu, foxtrot);
        zulu = 11;
        zulu = romeo[zulu];
        report = tango.bind(report)(zulu);
        tango = report.useStateFromStoresArray;
        romeo = _closure1_slot9;
        zulu = new Array(2);
        zulu[0] = romeo;
        mike = _closure1_slot5;
        zulu[1] = mike;
        mike = new Array(6);
        mike[0] = yankee;
        mike[1] = offset;
        mike[2] = verify;
        mike[3] = options;
        mike[4] = golf;
        mike[5] = oscar;
        entity = function() {
            _fun121621: for(var _fun121621_ip = 0; ; ) switch(_fun121621_ip) {
 0:
                entity = _closure2_slot4;
                tango = 0;
                if(!(!(entity < tango))) { _fun121621_ip = 353; continue _fun121621 }
 16:
                golf = _closure1_slot9;
                oscar = golf.isInChannel;
                report = _closure2_slot0;
                entity = _closure2_slot2;
                report = oscar.bind(golf)(report, entity);
                entity = new Array(0);
                if(report) { _fun121621_ip = 52; continue _fun121621 }
 50:
                return entity;
 52:
                oscar = _closure1_slot15;
                offset = global;
                options = offset.Set;
                report = new Array(0);
                golf = _closure2_slot1;
                verify = golf.start;
                golf = golf.end;
                if(!(verify <= golf)) { _fun121621_ip = 164; continue _fun121621 }
 86:
                yankee = _closure2_slot3;
                golf = yankee.getChunk;
                foxtrot = golf.bind(yankee)(verify);
                yankee = report.push;
                romeo = offset.Array;
                golf = romeo.from;
                kilo = golf.bind(romeo)(foxtrot);
                golf = new Array(0);
                sizing = golf;
                backup = 0;
                romeo = arraySpread(sizing, kilo, backup);
                sizing = yankee;
                kilo = golf;
                backup = report;
                golf = apply(sizing, kilo, backup);
                verify = verify + 1;
                golf = _closure2_slot1;
                golf = golf.end;
                if(verify <= golf) { _fun121621_ip = 86; continue _fun121621 }
 164:
                golf = options.prototype;
                golf = Object.create(golf, {constructor: {value: options}});
                output = golf;
                sizing = report;
                report = new output[options](sizing, kilo);
                report = report instanceof Object ? report : golf;
                options = undefined;
                golf = oscar.bind(options)(report);
                oscar = golf.bind(options)();
                report = oscar.done;
                if(report) { _fun121621_ip = 250; continue _fun121621 }
 206:
                yankee = oscar.value;
                verify = entity.push;
                offset = _closure1_slot17;
                report = _closure2_slot5;
                report = offset.bind(options)(yankee, report);
                report = verify.bind(entity)(report);
                verify = golf.bind(options)();
                report = verify.done;
                oscar = verify;
                if(!report) { _fun121621_ip = 206; continue _fun121621 }
 250:
                golf = _closure1_slot5;
                oscar = golf.getVoiceParticipantsHidden;
                report = _closure2_slot0;
                report = oscar.bind(golf)(report);
                if(!report) { _fun121621_ip = 281; continue _fun121621 }
 272:
                oscar = entity.length;
                report = tango === oscar;
 281:
                if(!report) { _fun121621_ip = 338; continue _fun121621 }
 284:
                report = entity.push;
                golf = _closure1_slot17;
                oscar = {};
                verify = _closure1_slot11;
                verify = verify.CTA;
                oscar['type'] = verify;
                verify = _closure1_slot12;
                verify = verify.NO_VIDEO_PARTICIPANTS;
                oscar['id'] = verify;
                zulu = _closure2_slot5;
                zulu = golf.bind(options)(oscar, zulu);
                zulu = report.bind(entity)(zulu);
 338:
                zulu = entity.length;
                if(!(!(zulu > tango))) { _fun121621_ip = 351; continue _fun121621 }
 347:
                entity = _closure1_slot14;
 351:
                return entity;
 353:
                entity = _closure1_slot14;
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useChunkedParticipants'] = mike;
    return entity;
})();