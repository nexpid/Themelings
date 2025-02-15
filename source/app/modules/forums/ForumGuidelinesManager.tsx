// app/modules/forums/ForumGuidelinesManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun87527: for(var _fun87527_ip = 0; ; ) switch(_fun87527_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot8;
            entity = entity.bind(zulu)();
            if(entity) { _fun87527_ip = 51; continue _fun87527 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun87527_ip = 92; continue _fun87527;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun87527_ip = 71; continue _fun87527 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun87528: for(var _fun87528_ip = 0; ; ) switch(_fun87528_ip) {
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
 72: // try_end0
            _fun87528_ip = 76; continue _fun87528;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: ForumGuidelinesManager
            report = this;
            offset = 0;
            oscar = copyRestArgs(offset);
            mike = _closure1_slot2;
            tango = _closure2_slot0;
            zulu = undefined;
            mike = mike.bind(zulu)(report, tango);
            mike = _closure1_slot7;
            entity = new Array(0);
            offset = entity;
            verify = oscar;
            options = 0;
            oscar = arraySpread(offset, verify, options);
            entity = mike.bind(zulu)(report, tango, entity);
            mike = global;
            mike = mike.Set;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            yankee = zulu;
            mike = new yankee[mike](offset);
            mike = mike instanceof Object ? mike : zulu;
            entity['seenForumGuidelines'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun87533: for(var _fun87533_ip = 0; ; ) switch(_fun87533_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                tango = mike.Storage;
                zulu = tango.get;
                mike = 'formGuidelinesStorageKey';
                tango = zulu.bind(tango)(mike);
                mike = null;
                if(!(mike != tango)) { _fun87533_ip = 93; continue _fun87533 }
 53:
                mike = global;
                mike = mike.Set;
                zulu = mike.prototype;
                zulu = Object.create(zulu, {constructor: {value: mike}});
                oscar = zulu;
                report = tango;
                mike = new oscar[mike](report, tango);
                zulu = mike instanceof Object ? mike : zulu;
                mike = this;
                mike['seenForumGuidelines'] = zulu;
 93:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = '_terminate';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            report = mike.Storage;
            tango = report.set;
            mike = this;
            zulu = mike.seenForumGuidelines;
            mike = 'formGuidelinesStorageKey';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'markAsSeen';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = this;
            tango = mike.seenForumGuidelines;
            zulu = tango.add;
            entity = argFoo;
            entity = zulu.bind(tango)(entity);
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 5;
            zulu = zulu[entity];
            entity = undefined;
            zulu = tango.bind(entity)(zulu);
            report = zulu.Storage;
            tango = report.set;
            zulu = mike.seenForumGuidelines;
            mike = 'formGuidelinesStorageKey';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'hasSeen';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.seenForumGuidelines;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forums/ForumGuidelinesManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();