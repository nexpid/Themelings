// app/modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun121896: for(var _fun121896_ip = 0; ; ) switch(_fun121896_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun121896_ip = 46; continue _fun121896 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun121896_ip = 55; continue _fun121896 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun121896_ip = 345; continue _fun121896 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun121896_ip = 323; continue _fun121896 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun121896_ip = 283; continue _fun121896 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun121896_ip = 270; continue _fun121896 }
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
            if(!golf) { _fun121896_ip = 163; continue _fun121896 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun121896_ip = 179; continue _fun121896 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun121896_ip = 249; continue _fun121896 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun121896_ip = 249; continue _fun121896 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun121896_ip = 234; continue _fun121896 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun121896_ip = 247; continue _fun121896 }
 234:
            verify = _closure1_slot18;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun121896_ip = 265; continue _fun121896;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun121896_ip = 283; continue _fun121896;
 270:
            golf = _closure1_slot18;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun121896_ip = 323; continue _fun121896 }
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
            if(!tango) { _fun121896_ip = 330; continue _fun121896 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun121897: for(var _fun121897_ip = 0; ; ) switch(_fun121897_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun121897_ip = 56; continue _fun121897 }
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
                    _fun121897_ip = 67; continue _fun121897;
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
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun121898: for(var _fun121898_ip = 0; ; ) switch(_fun121898_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun121898_ip = 23; continue _fun121898 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun121898_ip = 33; continue _fun121898 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun121898_ip = 70; continue _fun121898 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun121898_ip = 55; continue _fun121898 }
 70:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.setVoiceUpsellDismissed;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    verify = oscar[tango];
    verify = options.bind(entity)(verify);
    var _closure1_slot7 = verify;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RouteTypes;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PlatformTypes;
    var _closure1_slot11 = tango;
    tango = 8;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot12 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.Fragment;
    var _closure1_slot13 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot14 = tango;
    tango = new Array(0);
    var _closure1_slot15 = tango;
    options = golf.memo;
    tango = function(argFoo) {
        entity = argFoo;
        tango = entity.targetRef;
        zulu = entity.canShowTooltip;
        report = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 9;
        entity = mike[entity];
        mike = undefined;
        entity = report.bind(mike)(entity);
        entity = entity.bind(mike)(tango, zulu);
        entity = null;
        return entity;
    };
    tango = options.bind(golf)(tango);
    var _closure1_slot16 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: VoicePanelHeaderSpeaker
        _fun121900: for(var _fun121900_ip = 0; ; ) switch(_fun121900_ip) {
 0:
            entity = argFoo;
            backup = entity.isConnectedToVoiceChannel;
            var _closure2_slot0 = backup;
            romeo = entity.channelId;
            var _closure2_slot1 = romeo;
            entity = entity.style;
            var _closure2_slot2 = entity;
            zulu = undefined;
            var _closure2_slot5 = zulu;
            var _closure2_slot6 = zulu;
            var _closure2_slot9 = zulu;
            var _closure2_slot11 = zulu;
            var _closure2_slot13 = zulu;
            var _closure2_slot14 = zulu;
            var _closure2_slot15 = zulu;
            var _closure2_slot16 = zulu;
            mike = function(argFoo) { // Original name: renderButton
                _fun121901: for(var _fun121901_ip = 0; ; ) switch(_fun121901_ip) {
 0:
                    foxtrot = argFoo;
                    tango = _closure1_slot14;
                    zulu = _closure1_slot13;
                    mike = {};
                    golf = _closure1_slot12;
                    oscar = _closure1_slot16;
                    report = {};
                    entity = _closure2_slot16;
                    report['targetRef'] = entity;
                    entity = _closure2_slot13;
                    if(!entity) { _fun121901_ip = 49; continue _fun121901 }
 45:
                    entity = _closure2_slot0;
 49:
                    report['canShowTooltip'] = entity;
                    entity = undefined;
                    oscar = golf.bind(entity)(oscar, report);
                    report = new Array(2);
                    report[0] = oscar;
                    options = _closure1_slot12;
                    offset = _closure1_slot1;
                    backup = _closure1_slot2;
                    oscar = 27;
                    oscar = backup[oscar];
                    golf = offset.bind(entity)(oscar);
                    oscar = {};
                    verify = _closure2_slot2;
                    oscar['style'] = verify;
                    verify = _closure2_slot16;
                    oscar['ref'] = verify;
                    verify = 28;
                    verify = backup[verify];
                    offset = offset.bind(entity)(verify);
                    verify = {};
                    backup = null;
                    if(!(backup == foxtrot)) { _fun121901_ip = 145; continue _fun121901 }
 132:
                    kilo = {};
                    sizing = _closure2_slot14;
                    kilo['onPress'] = sizing;
                    foxtrot = kilo;
 145:
                    result = verify;
                    output = foxtrot;
                    foxtrot = copyDataProperties(result, output);
                    foxtrot = _closure2_slot0;
                    kilo = undefined;
                    if(!foxtrot) { _fun121901_ip = 179; continue _fun121901 }
 164:
                    foxtrot = _closure2_slot6;
                    kilo = undefined;
                    if(!foxtrot) { _fun121901_ip = 179; continue _fun121901 }
 173:
                    kilo = 'primary-overlay';
 179:
                    foxtrot = 'overrideVariant';
                    verify[foxtrot] = kilo;
                    foxtrot = _closure2_slot9;
                    kilo = backup != foxtrot;
                    foxtrot = 'loading';
                    verify[foxtrot] = kilo;
                    foxtrot = _closure2_slot11;
                    if(!(backup == foxtrot)) { _fun121901_ip = 219; continue _fun121901 }
 213:
                    foxtrot = _closure2_slot5;
                    _fun121901_ip = 223; continue _fun121901;
 219:
                    foxtrot = _closure2_slot11;
 223:
                    romeo = 'icon';
                    verify[romeo] = foxtrot;
                    backup = _closure1_slot0;
                    kilo = _closure1_slot2;
                    yankee = 20;
                    romeo = kilo[yankee];
                    romeo = backup.bind(entity)(romeo);
                    foxtrot = romeo.intl;
                    romeo = foxtrot.string;
                    yankee = kilo[yankee];
                    yankee = backup.bind(entity)(yankee);
                    yankee = yankee.t;
                    yankee = yankee.dnI0AA;
                    romeo = romeo.bind(foxtrot)(yankee);
                    yankee = 'accessibilityLabel';
                    verify[yankee] = romeo;
                    verify = options.bind(entity)(offset, verify);
                    oscar['children'] = verify;
                    oscar = options.bind(entity)(golf, oscar);
                    report[1] = oscar;
                    mike['children'] = report;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                }
            };
            verify = _closure1_slot1;
            foxtrot = _closure1_slot2;
            entity = 10;
            entity = foxtrot[entity];
            entity = verify.bind(zulu)(entity);
            offset = entity.bind(zulu)();
            var _closure2_slot3 = offset;
            options = _closure1_slot0;
            entity = 11;
            entity = foxtrot[entity];
            tango = options.bind(zulu)(entity);
            entity = tango.useMaskedSpeakerStates;
            entity = entity.bind(tango)();
            oscar = entity.toggleAudio;
            var _closure2_slot4 = oscar;
            tango = entity.routeSource;
            _closure2_slot5 = tango;
            entity = entity.isAudioRouteEnabled;
            _closure2_slot6 = entity;
            entity = 12;
            entity = foxtrot[entity];
            entity = verify.bind(zulu)(entity);
            tango = entity.bind(zulu)();
            var _closure2_slot7 = tango;
            entity = 13;
            entity = foxtrot[entity];
            entity = verify.bind(zulu)(entity);
            entity = entity.bind(zulu)();
            var _closure2_slot8 = entity;
            yankee = 14;
            entity = foxtrot[yankee];
            output = options.bind(zulu)(entity);
            sizing = output.useStateFromStores;
            entity = _closure1_slot6;
            kilo = new Array(1);
            kilo[0] = entity;
            entity = function() {
                mike = _closure1_slot6;
                entity = mike.getAwaitingRemoteSessionInfo;
                entity = entity.bind(mike)();
                return entity;
            };
            output = sizing.bind(output)(kilo, entity);
            _closure2_slot9 = output;
            entity = foxtrot[yankee];
            sizing = options.bind(zulu)(entity);
            kilo = sizing.useStateFromStores;
            entity = _closure1_slot10;
            options = new Array(1);
            options[0] = entity;
            entity = function() {
                _fun121903: for(var _fun121903_ip = 0; ; ) switch(_fun121903_ip) {
 0:
                    zulu = _closure1_slot10;
                    mike = zulu.getSessionById;
                    tango = _closure2_slot8;
                    entity = null;
                    oscar = entity == tango;
                    tango = undefined;
                    if(oscar) { _fun121903_ip = 41; continue _fun121903 }
 31:
                    report = _closure2_slot8;
                    tango = report.sessionId;
 41:
                    report = entity != tango;
                    entity = '';
                    if(!report) { _fun121903_ip = 55; continue _fun121903 }
 52:
                    entity = tango;
 55:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            entity = kilo.bind(sizing)(options, entity);
            var _closure2_slot10 = entity;
            sizing = _closure1_slot3;
            kilo = sizing.useMemo;
            options = new Array(2);
            options[0] = output;
            options[1] = entity;
            entity = function() {
                _fun121904: for(var _fun121904_ip = 0; ; ) switch(_fun121904_ip) {
 0:
                    mike = _closure2_slot9;
                    entity = null;
                    mike = entity == mike;
                    tango = undefined;
                    zulu = undefined;
                    if(mike) { _fun121904_ip = 29; continue _fun121904 }
 20:
                    mike = _closure2_slot9;
                    zulu = mike.type;
 29:
                    if(!(entity == zulu)) { _fun121904_ip = 74; continue _fun121904 }
 33:
                    mike = _closure2_slot10;
                    oscar = entity == mike;
                    mike = undefined;
                    if(oscar) { _fun121904_ip = 71; continue _fun121904 }
 46:
                    report = _closure2_slot10;
                    report = report.clientInfo;
                    oscar = entity == report;
                    mike = undefined;
                    if(oscar) { _fun121904_ip = 71; continue _fun121904 }
 65:
                    mike = report.os;
 71:
                    zulu = mike;
 74:
                    mike = entity != zulu;
                    entity = null;
                    if(!mike) { _fun121904_ip = 111; continue _fun121904 }
 83:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    mike = 15;
                    mike = oscar[mike];
                    mike = report.bind(tango)(mike);
                    entity = mike.bind(tango)(zulu);
 111:
                    return entity;
                }
            };
            entity = kilo.bind(sizing)(entity, options);
            _closure2_slot11 = entity;
            entity = 16;
            entity = foxtrot[entity];
            entity = verify.bind(zulu)(entity);
            kilo = entity.bind(zulu)();
            var _closure2_slot12 = kilo;
            options = kilo.length;
            entity = 0;
            entity = options > entity;
            options = 17;
            options = foxtrot[options];
            options = verify.bind(zulu)(options);
            options = options.bind(zulu)(romeo);
            foxtrot = options.canConnect;
            options = options.isAtMaxCapacity;
            if(!foxtrot) { _fun121900_ip = 394; continue _fun121900 }
 391:
            foxtrot = !options;
 394:
            if(!foxtrot) { _fun121900_ip = 409; continue _fun121900 }
 397:
            options = backup;
            if(backup) { _fun121900_ip = 406; continue _fun121900 }
 403:
            options = entity;
 406:
            foxtrot = options;
 409:
            _closure2_slot13 = foxtrot;
            options = _closure1_slot3;
            sizing = options.useCallback;
            verify = new Array(3);
            verify[0] = romeo;
            verify[1] = backup;
            verify[2] = oscar;
            oscar = function() {
                _fun121905: for(var _fun121905_ip = 0; ; ) switch(_fun121905_ip) {
 0:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 18;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.isAndroid;
                    zulu = zulu.bind(tango)();
                    if(zulu) { _fun121905_ip = 60; continue _fun121905 }
 37:
                    report = _closure2_slot4;
                    tango = _closure2_slot1;
                    zulu = _closure2_slot0;
                    zulu = report.bind(entity)(tango, zulu);
                    _fun121905_ip = 103; continue _fun121905;
 60:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 19;
                    mike = tango[mike];
                    report = zulu.bind(entity)(mike);
                    tango = report.showAudioOutputSelector;
                    zulu = _closure2_slot1;
                    mike = _closure2_slot0;
                    mike = tango.bind(report)(zulu, mike);
 103:
                    return entity;
                }
            };
            oscar = sizing.bind(options)(oscar, verify);
            _closure2_slot14 = oscar;
            verify = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[yankee];
            sizing = verify.bind(zulu)(oscar);
            yankee = sizing.useStateFromStores;
            oscar = _closure1_slot7;
            verify = new Array(1);
            verify[0] = oscar;
            oscar = function() {
                mike = _closure1_slot7;
                entity = mike.getCurrentRouteType;
                entity = entity.bind(mike)();
                return entity;
            };
            yankee = yankee.bind(sizing)(verify, oscar);
            _closure2_slot15 = yankee;
            verify = options.useMemo;
            oscar = new Array(5);
            oscar[0] = kilo;
            oscar[1] = romeo;
            oscar[2] = backup;
            oscar[3] = yankee;
            oscar[4] = tango;
            tango = function() {
                _fun121907: for(var _fun121907_ip = 0; ; ) switch(_fun121907_ip) {
 0:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 18;
                    mike = report[mike];
                    golf = undefined;
                    zulu = zulu.bind(golf)(mike);
                    mike = zulu.isAndroid;
                    mike = mike.bind(zulu)();
                    if(mike) { _fun121907_ip = 516; continue _fun121907 }
 42:
                    mike = _closure2_slot12;
                    report = mike.length;
                    mike = 0;
                    if(!(mike !== report)) { _fun121907_ip = 516; continue _fun121907 }
 63:
                    mike = new Array(0);
                    var _closure3_slot0 = mike;
                    report = _closure2_slot7;
                    if(report) { _fun121907_ip = 96; continue _fun121907 }
 78:
                    options = _closure2_slot15;
                    oscar = _closure1_slot8;
                    oscar = oscar.SPEAKER;
                    report = options !== oscar;
 96:
                    if(report) { _fun121907_ip = 209; continue _fun121907 }
 99:
                    oscar = mike.push;
                    report = {};
                    romeo = _closure1_slot0;
                    offset = _closure1_slot2;
                    options = 20;
                    verify = offset[options];
                    verify = romeo.bind(golf)(verify);
                    yankee = verify.intl;
                    verify = yankee.string;
                    options = offset[options];
                    options = romeo.bind(golf)(options);
                    options = options.t;
                    options = options.gvQIz8;
                    options = verify.bind(yankee)(options);
                    report['label'] = options;
                    verify = _closure1_slot1;
                    options = 21;
                    options = offset[options];
                    options = verify.bind(golf)(options);
                    report['iconSource'] = options;
                    options = false;
                    report['showIconFirst'] = options;
                    options = function() { // Original name: action
                        _fun121908: for(var _fun121908_ip = 0; ; ) switch(_fun121908_ip) {
 0:
                            entity = _closure1_slot4;
                            tango = entity.AudioRoutePicker;
                            entity = null;
                            mike = entity == tango;
                            entity = undefined;
                            if(mike) { _fun121908_ip = 37; continue _fun121908 }
 24:
                            zulu = tango.toggleSpeaker;
                            mike = false;
                            entity = zulu.bind(tango)(mike);
 37:
                            return entity;
                        }
                    };
                    report['action'] = options;
                    report = oscar.bind(mike)(report);
 209:
                    report = _closure2_slot7;
                    if(report) { _fun121907_ip = 234; continue _fun121907 }
 216:
                    options = _closure2_slot15;
                    oscar = _closure1_slot8;
                    oscar = oscar.RECEIVER;
                    report = options !== oscar;
 234:
                    if(report) { _fun121907_ip = 347; continue _fun121907 }
 237:
                    oscar = mike.push;
                    report = {};
                    romeo = _closure1_slot0;
                    offset = _closure1_slot2;
                    options = 20;
                    verify = offset[options];
                    verify = romeo.bind(golf)(verify);
                    yankee = verify.intl;
                    verify = yankee.string;
                    options = offset[options];
                    options = romeo.bind(golf)(options);
                    options = options.t;
                    options = options.wwTN1t;
                    options = verify.bind(yankee)(options);
                    report['label'] = options;
                    verify = _closure1_slot1;
                    options = 22;
                    options = offset[options];
                    options = verify.bind(golf)(options);
                    report['iconSource'] = options;
                    options = false;
                    report['showIconFirst'] = options;
                    options = function() { // Original name: action
                        _fun121909: for(var _fun121909_ip = 0; ; ) switch(_fun121909_ip) {
 0:
                            entity = _closure1_slot4;
                            tango = entity.AudioRoutePicker;
                            entity = null;
                            mike = entity == tango;
                            entity = undefined;
                            if(mike) { _fun121909_ip = 37; continue _fun121909 }
 24:
                            zulu = tango.toggleSpeaker;
                            mike = true;
                            entity = zulu.bind(tango)(mike);
 37:
                            return entity;
                        }
                    };
                    report['action'] = options;
                    report = oscar.bind(mike)(report);
 347:
                    oscar = mike.push;
                    report = {};
                    romeo = _closure1_slot0;
                    offset = _closure1_slot2;
                    options = 20;
                    verify = offset[options];
                    verify = romeo.bind(golf)(verify);
                    yankee = verify.intl;
                    verify = yankee.string;
                    options = offset[options];
                    options = romeo.bind(golf)(options);
                    options = options.t;
                    options = options.dnI0AA;
                    options = verify.bind(yankee)(options);
                    report['label'] = options;
                    verify = _closure1_slot1;
                    options = 23;
                    options = offset[options];
                    options = verify.bind(golf)(options);
                    report['iconSource'] = options;
                    options = false;
                    report['showIconFirst'] = options;
                    options = function() { // Original name: action
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 19;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.showAudioOutputSelector;
                        zulu = _closure2_slot1;
                        mike = _closure2_slot0;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    report['action'] = options;
                    report = oscar.bind(mike)(report);
                    oscar = function(argFoo) { // Original name: _loop
                        _fun121911: for(var _fun121911_ip = 0; ; ) switch(_fun121911_ip) {
 0:
                            report = argFoo;
                            var _closure4_slot0 = report;
                            mike = report.type;
                            entity = _closure1_slot11;
                            entity = entity.XBOX;
                            if(!(mike === entity)) { _fun121911_ip = 163; continue _fun121911 }
 34:
                            zulu = _closure3_slot0;
                            mike = zulu.push;
                            entity = {};
                            romeo = _closure1_slot0;
                            offset = _closure1_slot2;
                            golf = 20;
                            options = offset[golf];
                            verify = undefined;
                            options = romeo.bind(verify)(options);
                            yankee = options.intl;
                            options = yankee.string;
                            golf = offset[golf];
                            golf = romeo.bind(verify)(golf);
                            golf = golf.t;
                            golf = golf.qVE/VF;
                            golf = options.bind(yankee)(golf);
                            entity['label'] = golf;
                            options = _closure1_slot1;
                            golf = 15;
                            golf = offset[golf];
                            options = options.bind(verify)(golf);
                            golf = report.type;
                            golf = options.bind(verify)(golf);
                            entity['iconSource'] = golf;
                            golf = false;
                            entity['showIconFirst'] = golf;
                            golf = function() { // Original name: action
                                _fun121912: for(var _fun121912_ip = 0; ; ) switch(_fun121912_ip) {
 0:
                                    tango = _closure1_slot9;
                                    zulu = tango.getChannel;
                                    mike = _closure2_slot1;
                                    tango = zulu.bind(tango)(mike);
                                    mike = null;
                                    if(!(mike != tango)) { _fun121912_ip = 71; continue _fun121912 }
 30:
                                    zulu = _closure1_slot0;
                                    mike = _closure1_slot2;
                                    entity = 24;
                                    mike = mike[entity];
                                    entity = undefined;
                                    zulu = zulu.bind(entity)(mike);
                                    mike = zulu.onConnectToConsole;
                                    entity = _closure4_slot0;
                                    entity = mike.bind(zulu)(tango, entity);
 71:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            entity['action'] = golf;
                            entity = mike.bind(zulu)(entity);
 163:
                            mike = report.type;
                            entity = _closure1_slot11;
                            entity = entity.PLAYSTATION;
                            if(!(mike === entity)) { _fun121911_ip = 314; continue _fun121911 }
 185:
                            zulu = _closure3_slot0;
                            mike = zulu.push;
                            entity = {};
                            romeo = _closure1_slot0;
                            verify = _closure1_slot2;
                            options = 20;
                            offset = verify[options];
                            golf = undefined;
                            offset = romeo.bind(golf)(offset);
                            yankee = offset.intl;
                            offset = yankee.string;
                            options = verify[options];
                            options = romeo.bind(golf)(options);
                            options = options.t;
                            options = options.vzfxmZ;
                            options = offset.bind(yankee)(options);
                            entity['label'] = options;
                            options = _closure1_slot1;
                            oscar = 15;
                            oscar = verify[oscar];
                            oscar = options.bind(golf)(oscar);
                            report = report.type;
                            report = oscar.bind(golf)(report);
                            entity['iconSource'] = report;
                            report = false;
                            entity['showIconFirst'] = report;
                            tango = function() { // Original name: action
                                _fun121913: for(var _fun121913_ip = 0; ; ) switch(_fun121913_ip) {
 0:
                                    tango = _closure1_slot9;
                                    zulu = tango.getChannel;
                                    mike = _closure2_slot1;
                                    tango = zulu.bind(tango)(mike);
                                    mike = null;
                                    if(!(mike != tango)) { _fun121913_ip = 71; continue _fun121913 }
 30:
                                    zulu = _closure1_slot0;
                                    mike = _closure1_slot2;
                                    entity = 24;
                                    mike = mike[entity];
                                    entity = undefined;
                                    zulu = zulu.bind(entity)(mike);
                                    mike = zulu.onConnectToConsole;
                                    entity = _closure4_slot0;
                                    entity = mike.bind(zulu)(tango, entity);
 71:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            entity['action'] = tango;
                            entity = mike.bind(zulu)(entity);
 314:
                            entity = undefined;
                            return entity;
                        }
                    };
                    tango = _closure1_slot17;
                    zulu = _closure2_slot12;
                    report = tango.bind(golf)(zulu);
                    tango = report.bind(golf)();
                    zulu = tango.done;
                    if(zulu) { _fun121907_ip = 514; continue _fun121907 }
 489:
                    zulu = tango.value;
                    zulu = oscar.bind(golf)(zulu);
                    options = report.bind(golf)();
                    zulu = options.done;
                    tango = options;
                    if(!zulu) { _fun121907_ip = 489; continue _fun121907 }
 514:
                    return mike;
 516:
                    entity = _closure1_slot15;
                    return entity;
                }
            };
            romeo = verify.bind(options)(tango, oscar);
            verify = options.useCallback;
            oscar = new Array(1);
            oscar[0] = offset;
            tango = function() {
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                entity = 25;
                zulu = golf[entity];
                entity = undefined;
                report = oscar.bind(entity)(zulu);
                tango = report.markDismissibleContentAsDismissed;
                zulu = 26;
                zulu = golf[zulu];
                zulu = oscar.bind(entity)(zulu);
                zulu = zulu.DismissibleContent;
                zulu = zulu.DONUT_MOBILE_NUX;
                zulu = tango.bind(report)(zulu);
                zulu = _closure1_slot5;
                mike = true;
                mike = zulu.bind(entity)(mike);
                zulu = _closure2_slot3;
                mike = zulu.lock;
                mike = mike.bind(zulu)();
                return entity;
            };
            yankee = verify.bind(options)(tango, oscar);
            oscar = options.useRef;
            tango = null;
            kilo = oscar.bind(options)(tango);
            _closure2_slot16 = kilo;
            if(foxtrot) { _fun121900_ip = 595; continue _fun121900 }
 593:
            return tango;
 595:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 18;
            tango = oscar[tango];
            report = report.bind(zulu)(tango);
            tango = report.isAndroid;
            tango = tango.bind(report)();
            if(tango) { _fun121900_ip = 778; continue _fun121900 }
 630:
            if(!entity) { _fun121900_ip = 778; continue _fun121900 }
 636:
            report = _closure1_slot14;
            tango = _closure1_slot13;
            entity = {};
            verify = _closure1_slot12;
            options = _closure1_slot16;
            oscar = {};
            oscar['targetRef'] = kilo;
            if(!foxtrot) { _fun121900_ip = 667; continue _fun121900 }
 664:
            foxtrot = backup;
 667:
            oscar['canShowTooltip'] = foxtrot;
            options = verify.bind(zulu)(options, oscar);
            oscar = new Array(2);
            oscar[0] = options;
            verify = _closure1_slot12;
            options = _closure1_slot0;
            foxtrot = _closure1_slot2;
            golf = 29;
            golf = foxtrot[golf];
            golf = options.bind(zulu)(golf);
            options = golf.MenuPopout;
            golf = {'menuItems': null, 'position': 'bottom', 'align': 'end'};
            golf['menuItems'] = romeo;
            golf['onRequestOpen'] = yankee;
            offset = offset.unlock;
            golf['onRequestClose'] = offset;
            golf['children'] = mike;
            golf = verify.bind(zulu)(options, golf);
            oscar[1] = golf;
            entity['children'] = oscar;
            entity = report.bind(zulu)(tango, entity);
            _fun121900_ip = 782; continue _fun121900;
 778:
            entity = mike.bind(zulu)();
 782:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 30;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();