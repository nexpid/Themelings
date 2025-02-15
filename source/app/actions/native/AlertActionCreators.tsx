// app/actions/native/AlertActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    golf = oscar[entity];
    mike = argCorge;
    entity = undefined;
    mike = mike.bind(entity)(golf);
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot3 = mike;
    mike = {};
    golf = function(argFoo) { // Original name: openLazy
        _fun53202: for(var _fun53202_ip = 0; ; ) switch(_fun53202_ip) {
 0:
            tango = argFoo;
            zulu = tango.importer;
            report = tango.hideActionSheet;
            mike = undefined;
            if(!(report === mike)) { _fun53202_ip = 25; continue _fun53202 }
 23:
            report = true;
 25:
            var _closure2_slot0 = report;
            tango = tango.isDismissable;
            if(!(tango === mike)) { _fun53202_ip = 41; continue _fun53202 }
 39:
            tango = false;
 41:
            var _closure2_slot1 = tango;
            zulu = zulu.bind(mike)();
            mike = zulu.then;
            entity = function(argFoo) {
                _fun53203: for(var _fun53203_ip = 0; ; ) switch(_fun53203_ip) {
 0:
                    entity = _closure2_slot0;
                    if(!entity) { _fun53203_ip = 45; continue _fun53203 }
 10:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 2;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.hideActionSheet;
                    entity = entity.bind(mike)();
 45:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 3;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    oscar = 'ALERT_OPEN';
                    mike['type'] = oscar;
                    oscar = argFoo;
                    mike['alert'] = oscar;
                    report = _closure2_slot1;
                    mike['isDismissable'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    mike['openLazy'] = golf;
    golf = function() { // Original name: close
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'ALERT_CLOSE';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['close'] = golf;
    golf = function(argFoo) { // Original name: show
        _fun53205: for(var _fun53205_ip = 0; ; ) switch(_fun53205_ip) {
 0:
            options = argFoo;
            tango = this;
            oscar = options.hideActionSheet;
            report = options.isDismissable;
            mike = options.confirmText;
            entity = undefined;
            if(!(mike === entity)) { _fun53205_ip = 90; continue _fun53205 }
 32:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            zulu = 4;
            verify = romeo[zulu];
            verify = yankee.bind(entity)(verify);
            offset = verify.intl;
            verify = offset.string;
            zulu = romeo[zulu];
            zulu = yankee.bind(entity)(zulu);
            zulu = zulu.t;
            zulu = zulu.BddRzc;
            mike = verify.bind(offset)(zulu);
 90:
            var _closure2_slot0 = mike;
            zulu = {'hideActionSheet': 0, 'isDismissable': 0, 'confirmText': 0};
            backup = null;
            kilo = zulu;
            mike = silentSetPrototypeOf(kilo, backup);
            kilo = {};
            backup = options;
            foxtrot = zulu;
            mike = copyDataProperties(kilo, backup, foxtrot);
            var _closure2_slot1 = mike;
            zulu = tango.openLazy;
            mike = {};
            golf = function() { // Original name: importer
                zulu = _closure1_slot0;
                entity = _closure1_slot2;
                mike = 6;
                mike = entity[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = 5;
                mike = entity[mike];
                entity = entity.paths;
                zulu = zulu.bind(tango)(mike, entity);
                mike = zulu.then;
                entity = function(argFoo) {
                    mike = argFoo;
                    mike = mike.default;
                    var _closure4_slot0 = mike;
                    entity = function(argFoo) {
                        tango = _closure1_slot3;
                        zulu = _closure4_slot0;
                        mike = {};
                        oscar = argFoo;
                        golf = mike;
                        entity = copyDataProperties(golf, oscar);
                        oscar = _closure2_slot1;
                        golf = mike;
                        report = copyDataProperties(golf, oscar);
                        report = _closure2_slot0;
                        entity = 'confirmText';
                        mike[entity] = report;
                        entity = undefined;
                        entity = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['importer'] = golf;
            mike['hideActionSheet'] = oscar;
            mike['isDismissable'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['show'] = golf;
    tango = function(argFoo) { // Original name: confirm
        mike = this;
        var _closure2_slot0 = mike;
        mike = argFoo;
        var _closure2_slot1 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        tango = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure2_slot0;
            zulu = tango.show;
            mike = {};
            entity = function() { // Original name: onConfirm
                zulu = _closure3_slot0;
                entity = undefined;
                mike = true;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike['onConfirm'] = entity;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            golf = 4;
            options = yankee[golf];
            entity = undefined;
            options = offset.bind(entity)(options);
            verify = options.intl;
            options = verify.string;
            golf = yankee[golf];
            golf = offset.bind(entity)(golf);
            golf = golf.t;
            golf = golf.ETE/oK;
            golf = options.bind(verify)(golf);
            mike['cancelText'] = golf;
            oscar = function() { // Original name: onCancel
                zulu = _closure3_slot0;
                entity = undefined;
                mike = false;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike['onCancel'] = oscar;
            romeo = _closure2_slot1;
            foxtrot = mike;
            report = copyDataProperties(foxtrot, romeo);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    mike['confirm'] = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/native/AlertActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();