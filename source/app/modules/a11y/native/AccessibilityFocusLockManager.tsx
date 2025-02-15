// app/modules/a11y/native/AccessibilityFocusLockManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
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
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot11;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot11;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
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
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot13;
            entity = entity.bind(zulu)();
            if(entity) { _fun00008_ip = 51; continue _fun00007 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00008_ip = 92; continue _fun00007;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00008_ip = 71; continue _fun00007 }
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
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
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
            _fun00010_ip = 74; continue _fun00009;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
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
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    verify = golf.bind(entity)(tango);
    tango = verify.prototype;
    options = Object.create(tango, {constructor: {value: verify}});
    romeo = 'AccessibilityFocusLockManager';
    foxtrot = options;
    tango = new foxtrot[verify](romeo, yankee);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot9 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: AccessibilityFocusLockManager
            report = this;
            offset = 0;
            oscar = copyRestArgs(offset);
            mike = _closure1_slot3;
            tango = _closure2_slot0;
            zulu = undefined;
            mike = mike.bind(zulu)(report, tango);
            mike = _closure1_slot12;
            entity = new Array(0);
            offset = entity;
            verify = oscar;
            options = 0;
            oscar = arraySpread(offset, verify, options);
            entity = mike.bind(zulu)(report, tango, entity);
            mike = false;
            entity['_screenReaderEnabled'] = mike;
            zulu = global;
            zulu = zulu.Map;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            yankee = tango;
            zulu = new yankee[zulu](offset);
            zulu = zulu instanceof Object ? zulu : tango;
            entity['_focusLockedNativeIDGroups'] = zulu;
            entity['_focusLockEnabled'] = mike;
            mike = -1;
            entity['_focusLockEnabledDelayTimeoutId'] = mike;
            mike = 250;
            entity['_focusLockEnabledDelayTimeout'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = '_updateAccessibilityFocusLock';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tango = arguments[0];
                zulu = this;
                entity = undefined;
                if(!(tango === entity)) { _fun00012_ip = 16; continue _fun00011 }
 14:
                tango = false;
 16:
                var _closure3_slot0 = tango;
                var _closure3_slot1 = entity;
                tango = global;
                oscar = tango.clearTimeout;
                report = zulu._focusLockEnabledDelayTimeoutId;
                report = oscar.bind(entity)(report);
                _closure3_slot1 = entity;
                golf = _closure1_slot10;
                options = zulu._focusLockedNativeIDGroups;
                oscar = options.values;
                oscar = oscar.bind(options)();
                verify = golf.bind(entity)(oscar);
                golf = verify.bind(entity)();
                oscar = golf.done;
                options = golf;
                golf = undefined;
                if(oscar) { _fun00012_ip = 118; continue _fun00011 }
 91:
                offset = options.value;
                _closure3_slot1 = offset;
                yankee = verify.bind(entity)();
                oscar = yankee.done;
                options = yankee;
                golf = offset;
                if(!oscar) { _fun00012_ip = 91; continue _fun00011 }
 118:
                oscar = null;
                if(!(oscar != golf)) { _fun00012_ip = 133; continue _fun00011 }
 124:
                oscar = zulu._screenReaderEnabled;
                if(oscar) { _fun00012_ip = 239; continue _fun00011 }
 133:
                oscar = zulu._focusLockEnabled;
                if(!oscar) { _fun00012_ip = 276; continue _fun00011 }
 145:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                oscar = 7;
                oscar = options[oscar];
                golf = golf.bind(entity)(oscar);
                oscar = golf.isAndroid;
                oscar = oscar.bind(golf)();
                if(oscar) { _fun00012_ip = 199; continue _fun00011 }
 177:
                oscar = _closure1_slot8;
                golf = oscar.DCDAccessibilityManager;
                oscar = golf.disableFocusLock;
                oscar = oscar.bind(golf)();
                _fun00012_ip = 229; continue _fun00011;
 199:
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                report = 8;
                report = golf[report];
                oscar = oscar.bind(entity)(report);
                report = oscar.disableFocusLock;
                report = report.bind(oscar)();
 229:
                report = false;
                zulu['_focusLockEnabled'] = report;
                _fun00012_ip = 276; continue _fun00011;
 239:
                report = tango.setTimeout;
                tango = zulu._focusLockEnabledDelayTimeout;
                mike = function() {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 7;
                        zulu = zulu[entity];
                        entity = undefined;
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.isAndroid;
                        zulu = zulu.bind(tango)();
                        if(zulu) { _fun00014_ip = 72; continue _fun00013 }
 37:
                        zulu = _closure1_slot8;
                        oscar = zulu.DCDAccessibilityManager;
                        report = oscar.enableFocusLock;
                        tango = _closure3_slot1;
                        zulu = _closure3_slot0;
                        zulu = report.bind(oscar)(tango, zulu);
                        _fun00014_ip = 115; continue _fun00013;
 72:
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        mike = 8;
                        mike = tango[mike];
                        report = zulu.bind(entity)(mike);
                        tango = report.enableFocusLock;
                        zulu = _closure3_slot1;
                        mike = _closure3_slot0;
                        mike = tango.bind(report)(zulu, mike);
 115:
                        return entity;
                    }
                };
                mike = report.bind(entity)(mike, tango);
                zulu['_focusLockEnabledDelayTimeoutId'] = mike;
                mike = true;
                zulu['_focusLockEnabled'] = mike;
 276:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = '_initialize';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 9;
            tango = tango[entity];
            entity = undefined;
            report = report.bind(entity)(tango);
            tango = report.addScreenReaderEnabledListener;
            mike = function(argFoo) {
                mike = _closure3_slot0;
                entity = argFoo;
                mike['_screenReaderEnabled'] = entity;
                entity = mike._updateAccessibilityFocusLock;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            mike = tango.bind(report)(mike);
            zulu['_screenReaderEnabledListener'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = '_terminate';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                mike = this;
                zulu = mike._screenReaderEnabledListener;
                entity = null;
                if(!(entity != zulu)) { _fun00016_ip = 25; continue _fun00015 }
 15:
                entity = zulu.call;
                entity = entity.bind(zulu)(mike);
 25:
                zulu = mike._focusLockedNativeIDGroups;
                entity = zulu.clear;
                entity = entity.bind(zulu)();
                entity = mike._updateAccessibilityFocusLock;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'enableAccessibilityFocusLock';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                oscar = argFoo;
                tango = this;
                entity = oscar.length;
                mike = 0;
                if(!(mike === entity)) { _fun00018_ip = 40; continue _fun00017 }
 17:
                report = _closure1_slot9;
                zulu = report.error;
                entity = 'No target view nativeIDs to add.';
                entity = zulu.bind(report)(entity);
 40:
                report = _closure1_slot10;
                zulu = tango._focusLockedNativeIDGroups;
                entity = zulu.values;
                zulu = entity.bind(zulu)();
                entity = undefined;
                yankee = report.bind(entity)(zulu);
                report = yankee.bind(entity)();
                zulu = report.done;
                offset = global;
                verify = 'Duplicate target view nativeID ';
                options = ' already accessibility focus locked.';
                golf = report;
                report = undefined;
                if(zulu) { _fun00018_ip = 208; continue _fun00017 }
 100:
                foxtrot = _closure1_slot10;
                zulu = golf.value;
                backup = foxtrot.bind(entity)(zulu);
                foxtrot = backup.bind(entity)();
                zulu = foxtrot.done;
                if(zulu) { _fun00018_ip = 193; continue _fun00017 }
 126:
                kilo = foxtrot.value;
                zulu = oscar.includes;
                zulu = zulu.bind(oscar)(kilo);
                if(!zulu) { _fun00018_ip = 175; continue _fun00017 }
 144:
                output = _closure1_slot9;
                sizing = output.error;
                zulu = offset.HermesInternal;
                zulu = zulu.concat;
                zulu = zulu.bind(verify)(kilo, options);
                zulu = sizing.bind(output)(zulu);
 175:
                sizing = backup.bind(entity)();
                zulu = sizing.done;
                foxtrot = sizing;
                report = kilo;
                if(!zulu) { _fun00018_ip = 126; continue _fun00017 }
 193:
                foxtrot = yankee.bind(entity)();
                zulu = foxtrot.done;
                golf = foxtrot;
                if(!zulu) { _fun00018_ip = 100; continue _fun00017 }
 208:
                report = tango._focusLockedNativeIDGroups;
                zulu = report.set;
                mike = oscar[mike];
                mike = zulu.bind(report)(mike, oscar);
                zulu = tango._updateAccessibilityFocusLock;
                mike = true;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'disableAccessibilityFocusLock';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                report = argFoo;
                mike = this;
                zulu = report.length;
                entity = 0;
                if(!(entity === zulu)) { _fun00020_ip = 40; continue _fun00019 }
 17:
                oscar = _closure1_slot9;
                tango = oscar.error;
                zulu = 'No target view nativeIDs to remove.';
                zulu = tango.bind(oscar)(zulu);
 40:
                oscar = mike._focusLockedNativeIDGroups;
                tango = oscar.has;
                zulu = report[entity];
                zulu = tango.bind(oscar)(zulu);
                if(zulu) { _fun00020_ip = 115; continue _fun00019 }
 63:
                oscar = _closure1_slot9;
                tango = oscar.error;
                verify = report[entity];
                zulu = global;
                zulu = zulu.HermesInternal;
                options = zulu.concat;
                golf = 'No target view nativeID ';
                zulu = ' accessibility focus locked.';
                zulu = options.bind(golf)(verify, zulu);
                zulu = tango.bind(oscar)(zulu);
 115:
                tango = mike._focusLockedNativeIDGroups;
                zulu = tango.delete;
                entity = report[entity];
                entity = zulu.bind(tango)(entity);
                entity = mike._updateAccessibilityFocusLock;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/a11y/native/AccessibilityFocusLockManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();