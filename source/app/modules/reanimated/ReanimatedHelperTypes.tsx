// app/modules/reanimated/ReanimatedHelperTypes.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    report = entity.Object;
    tango = report.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(report)(zulu, entity, mike);
    mike = argPlugh;
    entity = 0;
    tango = mike[entity];
    mike = argBar;
    entity = undefined;
    report = mike.bind(entity)(tango);
    tango = report.fileFinishedImporting;
    mike = 'modules/reanimated/ReanimatedHelperTypes.tsx';
    mike = tango.bind(report)(mike);
    mike = function(argFoo) { // Original name: createFakeSharedValue
        entity = {};
        zulu = argFoo;
        entity['value'] = zulu;
        zulu = function() { // Original name: get
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = 'FakeSharedValue: You cannot get a value on fake shared value';
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        };
        entity['get'] = zulu;
        zulu = function() { // Original name: set
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = 'FakeSharedValue: You cannot set a value on fake shared value';
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        };
        entity['set'] = zulu;
        zulu = function() { // Original name: addListener
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = 'FakeSharedValue: You cannot add a listener to a fake shared value, please use a real one';
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        };
        entity['addListener'] = zulu;
        zulu = function() { // Original name: removeListener
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = 'FakeSharedValue: You cannot remove a listener to a fake shared value, please use a real one';
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        };
        entity['removeListener'] = zulu;
        mike = function() { // Original name: modify
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = 'FakeSharedValue: You cannot modify a shared value, please use a real one';
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        };
        entity['modify'] = mike;
        return entity;
    };
    zulu['createFakeSharedValue'] = mike;
    return entity;
})();