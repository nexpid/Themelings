// app/modules/native_permissions/mobile/NativePermissionUtils.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun56511: for(var _fun56511_ip = 0; ; ) switch(_fun56511_ip) {
 0:
        report = argBar;
        tango = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = tango;
        var _closure1_slot2 = oscar;
        entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
            _fun56512: for(var _fun56512_ip = 0; ; ) switch(_fun56512_ip) {
 0:
                zulu = argFoo;
                var _closure2_slot0 = zulu;
                report = global;
                mike = report.Symbol;
                tango = 'undefined';
                mike = typeof mike;
                mike = tango !== mike;
                if(!mike) { _fun56512_ip = 46; continue _fun56512 }
 30:
                tango = report.Symbol;
                tango = tango.iterator;
                mike = zulu[tango];
 46:
                if(mike) { _fun56512_ip = 55; continue _fun56512 }
 49:
                mike = zulu.@@iterator;
 55:
                if(mike) { _fun56512_ip = 343; continue _fun56512 }
 61:
                oscar = report.Array;
                tango = oscar.isArray;
                oscar = tango.bind(oscar)(zulu);
                tango = mike;
                if(oscar) { _fun56512_ip = 323; continue _fun56512 }
 86:
                options = undefined;
                oscar = undefined;
                if(!zulu) { _fun56512_ip = 283; continue _fun56512 }
 96:
                verify = 'string';
                golf = typeof zulu;
                if(!(verify !== golf)) { _fun56512_ip = 270; continue _fun56512 }
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
                if(!golf) { _fun56512_ip = 163; continue _fun56512 }
 158:
                golf = zulu.constructor;
 163:
                offset = verify;
                if(!golf) { _fun56512_ip = 179; continue _fun56512 }
 169:
                golf = zulu.constructor;
                offset = golf.name;
 179:
                golf = 'Map';
                if(!(golf !== offset)) { _fun56512_ip = 249; continue _fun56512 }
 187:
                golf = 'Set';
                if(!(golf !== offset)) { _fun56512_ip = 249; continue _fun56512 }
 195:
                golf = 'Arguments';
                if(!(golf !== offset)) { _fun56512_ip = 234; continue _fun56512 }
 205:
                verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                golf = verify.test;
                verify = golf.bind(verify)(offset);
                golf = undefined;
                if(!verify) { _fun56512_ip = 247; continue _fun56512 }
 234:
                verify = _closure1_slot14;
                golf = verify.bind(options)(zulu, options);
 247:
                _fun56512_ip = 265; continue _fun56512;
 249:
                offset = report.Array;
                verify = offset.from;
                golf = verify.bind(offset)(zulu);
 265:
                oscar = golf;
                _fun56512_ip = 283; continue _fun56512;
 270:
                golf = _closure1_slot14;
                oscar = golf.bind(options)(zulu, options);
 283:
                tango = oscar;
                if(tango) { _fun56512_ip = 323; continue _fun56512 }
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
                if(!tango) { _fun56512_ip = 330; continue _fun56512 }
 326:
                _closure2_slot0 = tango;
 330:
                tango = 0;
                var _closure2_slot1 = tango;
                entity = function() {
                    _fun56513: for(var _fun56513_ip = 0; ; ) switch(_fun56513_ip) {
 0:
                        mike = _closure2_slot1;
                        entity = _closure2_slot0;
                        entity = entity.length;
                        if(!(!(mike >= entity))) { _fun56513_ip = 56; continue _fun56513 }
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
                        _fun56513_ip = 67; continue _fun56513;
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
 343:
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
            _fun56514: for(var _fun56514_ip = 0; ; ) switch(_fun56514_ip) {
 0:
                tango = argFoo;
                entity = null;
                zulu = undefined;
                entity = entity == zulu;
                if(entity) { _fun56514_ip = 23; continue _fun56514 }
 14:
                mike = tango.length;
                entity = zulu > mike;
 23:
                mike = undefined;
                if(!entity) { _fun56514_ip = 33; continue _fun56514 }
 28:
                mike = tango.length;
 33:
                entity = global;
                entity = entity.Array;
                entity = entity.bind(zulu)(mike);
                zulu = 0;
                report = zulu < mike;
                if(!report) { _fun56514_ip = 70; continue _fun56514 }
 55:
                report = tango[zulu];
                entity[zulu] = report;
                zulu = zulu + 1;
                if(zulu < mike) { _fun56514_ip = 55; continue _fun56514 }
 70:
                return entity;
            }
        };
        var _closure1_slot14 = entity;
        entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
            _fun56515: for(var _fun56515_ip = 0; ; ) switch(_fun56515_ip) {
 0:
                tango = argFoo;
                oscar = argBaz;
                mike = _closure1_slot6;
                zulu = undefined;
                entity = argBar;
                verify = mike.bind(zulu)(entity);
                mike = _closure1_slot5;
                entity = _closure1_slot16;
                entity = entity.bind(zulu)();
                if(entity) { _fun56515_ip = 51; continue _fun56515 }
 38:
                entity = verify.apply;
                entity = entity.bind(verify)(tango, oscar);
                _fun56515_ip = 92; continue _fun56515;
 51:
                golf = global;
                options = golf.Reflect;
                golf = options.construct;
                if(oscar) { _fun56515_ip = 71; continue _fun56515 }
 67:
                oscar = new Array(0);
 71:
                report = _closure1_slot6;
                report = report.bind(zulu)(tango);
                report = report.constructor;
                entity = golf.bind(options)(verify, oscar, report);
 92:
                entity = mike.bind(zulu)(tango, entity);
                return entity;
            }
        };
        var _closure1_slot15 = entity;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun56516: for(var _fun56516_ip = 0; ; ) switch(_fun56516_ip) {
 0:
 2: // try_start_0
                mike = global;
                zulu = mike.Boolean;
                zulu = zulu.prototype;
                tango = zulu.valueOf;
                zulu = tango.call;
                options = mike.Reflect;
                golf = options.construct;
                oscar = mike.Boolean;
                report = new Array(0);
                mike = function() {
                    entity = undefined;
                    return entity;
                };
                mike = golf.bind(options)(oscar, report, mike);
                mike = zulu.bind(tango)(mike);
                mike = !mike;
                var _closure2_slot0 = mike;
 70: // try_end0
                _fun56516_ip = 74; continue _fun56516;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                mike = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot16 = mike;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot16 = entity;
        entity = function() { // Original name: combineStatuses
            entity = undefined;
            tango = _closure1_slot18;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot17 = entity;
        entity = function() { // Original name: _combineStatuses
            report = undefined;
            entity = undefined;
            tango = _closure1_slot8;
            zulu = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun56522: for(var _fun56522_ip = 0; ; ) switch(_fun56522_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun56522_ip = 108; continue _fun56522 }
 7:
                        tango = _closure1_slot13;
                        golf = undefined;
                        zulu = argFoo;
                        oscar = tango.bind(golf)(zulu);
                        tango = oscar.bind(golf)();
                        zulu = tango.done;
                        report = tango;
                        if(zulu) { _fun56522_ip = 95; continue _fun56522 }
 39:
                        zulu = report.value;
                        zulu = zulu.bind(golf)();
                        SaveGenerator(address=52);
 50:
                        return zulu;
 52:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(tango) { _fun56522_ip = 92; continue _fun56522 }
 58:
                        tango = _closure1_slot11;
                        tango = tango.AUTHORIZED;
                        if(!(zulu === tango)) { _fun56522_ip = 89; continue _fun56522 }
 72:
                        options = oscar.bind(golf)();
                        tango = options.done;
                        report = options;
                        if(tango) { _fun56522_ip = 95; continue _fun56522 }
 87:
                        _fun56522_ip = 39; continue _fun56522;
 89:
                        return zulu;
 92:
                        return zulu;
 95:
                        mike = _closure1_slot11;
                        mike = mike.AUTHORIZED;
                        return mike;
 108:
                        return entity;
                    }
                };
                return entity;
            };
            tango = tango.bind(report)(zulu);
            _closure1_slot18 = tango;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot18 = entity;
        entity = global;
        verify = entity.Object;
        options = verify.defineProperty;
        mike = {};
        entity = true;
        mike['value'] = entity;
        entity = '__esModule';
        entity = options.bind(verify)(zulu, entity, mike);
        entity = 0;
        mike = oscar[entity];
        entity = undefined;
        mike = tango.bind(entity)(mike);
        var _closure1_slot3 = mike;
        mike = 1;
        mike = oscar[mike];
        mike = tango.bind(entity)(mike);
        var _closure1_slot4 = mike;
        mike = 2;
        mike = oscar[mike];
        mike = tango.bind(entity)(mike);
        var _closure1_slot5 = mike;
        mike = 3;
        mike = oscar[mike];
        mike = tango.bind(entity)(mike);
        var _closure1_slot6 = mike;
        mike = 4;
        mike = oscar[mike];
        mike = tango.bind(entity)(mike);
        var _closure1_slot7 = mike;
        mike = 5;
        mike = oscar[mike];
        mike = tango.bind(entity)(mike);
        var _closure1_slot8 = mike;
        mike = 6;
        tango = oscar[mike];
        mike = argCorge;
        mike = mike.bind(entity)(tango);
        var _closure1_slot9 = mike;
        mike = 7;
        mike = oscar[mike];
        mike = report.bind(entity)(mike);
        verify = mike.NativeModules;
        var _closure1_slot10 = verify;
        mike = mike.Platform;
        tango = 8;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        options = tango.NativePermissionTypes;
        tango = tango.NativePermissionStatus;
        var _closure1_slot11 = tango;
        tango = 9;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.jsx;
        var _closure1_slot12 = tango;
        yankee = 10;
        tango = oscar[yankee];
        offset = report.bind(entity)(tango);
        tango = offset.isAndroid;
        offset = tango.bind(offset)();
        if(!offset) { _fun56511_ip = 348; continue _fun56511 }
 329:
        mike = mike.constants;
        tango = mike.Version;
        mike = 28;
        offset = tango <= mike;
 348:
        mike = 17;
        mike = oscar[mike];
        mike = report.bind(entity)(mike);
        tango = mike.NativePermissionBaseUtils;
        mike = function(argFoo) {
            tango = function() { // Original name: NativePermissionIOSUtils
                report = this;
                tango = undefined;
                entity = undefined;
                oscar = _closure1_slot3;
                zulu = _closure2_slot0;
                oscar = oscar.bind(tango)(report, zulu);
                mike = _closure1_slot15;
                entity = arguments;
                entity = mike.bind(tango)(report, zulu, entity);
                return entity;
            };
            var _closure2_slot0 = tango;
            report = _closure1_slot7;
            zulu = undefined;
            mike = argFoo;
            mike = report.bind(zulu)(tango, mike);
            mike = _closure1_slot4;
            report = {};
            entity = 'requestPermissionCore';
            report['key'] = entity;
            entity = function(argFoo, argBar) { // Original name: value
                report = this;
                tango = report.performRequest;
                entity = _closure2_slot0;
                zulu = entity.requestPermissionLookup;
                mike = argFoo;
                entity = argBar;
                entity = tango.bind(report)(zulu, mike, entity);
                return entity;
            };
            report['value'] = entity;
            entity = new Array(6);
            entity[0] = report;
            report = {};
            golf = 'hasPermissionCore';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                report = this;
                tango = report.performRequest;
                entity = _closure2_slot0;
                zulu = entity.hasPermissionLookup;
                mike = argFoo;
                entity = argBar;
                entity = tango.bind(report)(zulu, mike, entity);
                return entity;
            };
            report['value'] = golf;
            entity[1] = report;
            report = {};
            golf = 'performRequest';
            report['key'] = golf;
            golf = function(argFoo, argBar, argBaz) { // Original name: value
                _fun56527: for(var _fun56527_ip = 0; ; ) switch(_fun56527_ip) {
 0:
                    golf = argBar;
                    tango = this;
                    entity = argFoo;
                    zulu = entity[golf];
                    entity = null;
                    if(!(entity != zulu)) { _fun56527_ip = 39; continue _fun56527 }
 19:
                    mike = tango.requestAuthorization;
                    entity = argBaz;
                    entity = mike.bind(tango)(golf, zulu, entity);
                    _fun56527_ip = 143; continue _fun56527;
 39:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 11;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    mike = tango.prototype;
                    zulu = Object.create(mike, {constructor: {value: tango}});
                    offset = 'NativePermissionUtils';
                    yankee = zulu;
                    mike = new yankee[tango](offset, verify);
                    report = mike instanceof Object ? mike : zulu;
                    tango = report.error;
                    mike = global;
                    zulu = mike.HermesInternal;
                    oscar = zulu.concat;
                    zulu = 'Unable to locate permission type ';
                    zulu = oscar.bind(zulu)(golf);
                    zulu = tango.bind(report)(zulu);
                    tango = mike.Promise;
                    zulu = tango.resolve;
                    mike = false;
                    entity = zulu.bind(tango)(mike);
 143:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[2] = report;
            report = {};
            golf = 'didHavePermission';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                entity = this;
                zulu = entity.storage;
                mike = zulu.hasPermission;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report['value'] = golf;
            entity[3] = report;
            report = {};
            golf = 'openSettings';
            report['key'] = golf;
            golf = function() { // Original name: value
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = mike.bind(entity)();
                return entity;
            };
            report['value'] = golf;
            entity[4] = report;
            report = {};
            golf = 'openAlertModal';
            report['key'] = golf;
            oscar = function(argFoo) { // Original name: value
                entity = argFoo;
                options = entity.body;
                golf = entity.onConfirm;
                tango = _closure1_slot9;
                zulu = tango.lazy;
                entity = function() {
                    zulu = _closure1_slot0;
                    entity = _closure1_slot2;
                    mike = 14;
                    mike = entity[mike];
                    tango = undefined;
                    zulu = zulu.bind(tango)(mike);
                    mike = 13;
                    mike = entity[mike];
                    entity = entity.paths;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                oscar = zulu.bind(tango)(entity);
                romeo = _closure1_slot0;
                foxtrot = _closure1_slot2;
                entity = 15;
                zulu = foxtrot[entity];
                entity = undefined;
                report = romeo.bind(entity)(zulu);
                tango = report.openAlert;
                zulu = _closure1_slot12;
                mike = {};
                verify = 16;
                offset = foxtrot[verify];
                offset = romeo.bind(entity)(offset);
                yankee = offset.intl;
                offset = yankee.string;
                verify = foxtrot[verify];
                verify = romeo.bind(entity)(verify);
                verify = verify.t;
                verify = verify.sMFVra;
                verify = offset.bind(yankee)(verify);
                mike['title'] = verify;
                mike['body'] = options;
                mike['onConfirm'] = golf;
                zulu = zulu.bind(entity)(oscar, mike);
                mike = 'permission-denied';
                mike = tango.bind(report)(mike, zulu);
                return entity;
            };
            report['value'] = oscar;
            entity[5] = report;
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        };
        mike = mike.bind(entity)(tango);
        tango = {};
        foxtrot = options.CAMERA;
        if(offset) { _fun56511_ip = 401; continue _fun56511 }
 387:
        romeo = verify.NativePermissionManager;
        romeo = romeo.requestCameraAuthorization;
        _fun56511_ip = 406; continue _fun56511;
 401:
        romeo = function() {
            zulu = _closure1_slot17;
            entity = _closure1_slot10;
            mike = entity.NativePermissionManager;
            tango = mike.requestExternalStorageAuthorization;
            mike = new Array(2);
            mike[0] = tango;
            entity = entity.NativePermissionManager;
            entity = entity.requestCameraAuthorization;
            mike[1] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
 406:
        tango[foxtrot] = romeo;
        foxtrot = options.AUDIO;
        romeo = oscar[yankee];
        backup = report.bind(entity)(romeo);
        romeo = backup.isAndroid;
        romeo = romeo.bind(backup)();
        if(romeo) { _fun56511_ip = 452; continue _fun56511 }
 438:
        romeo = verify.NativePermissionManager;
        romeo = romeo.requestMicrophoneAuthorization;
        _fun56511_ip = 457; continue _fun56511;
 452:
        romeo = function() {
            zulu = _closure1_slot17;
            entity = _closure1_slot10;
            mike = entity.NativePermissionManager;
            tango = mike.requestMicrophoneAuthorization;
            mike = new Array(2);
            mike[0] = tango;
            entity = entity.NativePermissionManager;
            entity = entity.requestModifyAudioAuthorization;
            mike[1] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
 457:
        tango[foxtrot] = romeo;
        foxtrot = options.PHOTOS;
        romeo = verify.NativePermissionManager;
        romeo = romeo.requestPhotoAuthorization;
        tango[foxtrot] = romeo;
        foxtrot = options.CONTACTS;
        romeo = verify.NativePermissionManager;
        romeo = romeo.requestContactsAuthorization;
        tango[foxtrot] = romeo;
        foxtrot = options.INPUT_MONITORING;
        romeo = function() {
            entity = global;
            zulu = entity.Promise;
            mike = zulu.resolve;
            entity = _closure1_slot11;
            entity = entity.AUTHORIZED;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        tango[foxtrot] = romeo;
        mike['requestPermissionLookup'] = tango;
        tango = {};
        romeo = options.CAMERA;
        if(offset) { _fun56511_ip = 557; continue _fun56511 }
 543:
        offset = verify.NativePermissionManager;
        offset = offset.hasCameraAuthorization;
        _fun56511_ip = 562; continue _fun56511;
 557:
        offset = function() {
            zulu = _closure1_slot17;
            entity = _closure1_slot10;
            mike = entity.NativePermissionManager;
            tango = mike.hasExternalStorageAuthorization;
            mike = new Array(2);
            mike[0] = tango;
            entity = entity.NativePermissionManager;
            entity = entity.hasCameraAuthorization;
            mike[1] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
 562:
        tango[romeo] = offset;
        offset = options.AUDIO;
        yankee = oscar[yankee];
        romeo = report.bind(entity)(yankee);
        yankee = romeo.isAndroid;
        yankee = yankee.bind(romeo)();
        if(yankee) { _fun56511_ip = 608; continue _fun56511 }
 594:
        verify = verify.NativePermissionManager;
        verify = verify.hasMicrophoneAuthorization;
        _fun56511_ip = 613; continue _fun56511;
 608:
        verify = function() {
            zulu = _closure1_slot17;
            entity = _closure1_slot10;
            mike = entity.NativePermissionManager;
            tango = mike.hasMicrophoneAuthorization;
            mike = new Array(2);
            mike[0] = tango;
            entity = entity.NativePermissionManager;
            entity = entity.hasModifyAudioAuthorization;
            mike[1] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
 613:
        tango[offset] = verify;
        options = options.INPUT_MONITORING;
        golf = function() {
            entity = global;
            zulu = entity.Promise;
            mike = zulu.resolve;
            entity = _closure1_slot11;
            entity = entity.AUTHORIZED;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        tango[options] = golf;
        mike['hasPermissionLookup'] = tango;
        tango = mike.prototype;
        tango = Object.create(tango, {constructor: {value: mike}});
        result = tango;
        mike = new result[mike](output);
        mike = mike instanceof Object ? mike : tango;
        tango = 18;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'modules/native_permissions/mobile/NativePermissionUtils.native.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();