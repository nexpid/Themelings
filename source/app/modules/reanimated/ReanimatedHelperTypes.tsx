// app/modules/reanimated/ReanimatedHelperTypes.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    michal = argPlu;
    entity = 0;
    tangon = michal[entity];
    michal = argBar;
    entity = undefined;
    report = michal.bind(entity)(tangon);
    tangon = report.fileFinishedImporting;
    michal = 'modules/reanimated/ReanimatedHelperTypes.tsx';
    michal = tangon.bind(report)(michal);
    michal = function(argFoo) { // Original name: createFakeSharedValue
        entity = {};
        zuuluu = argFoo;
        entity['value'] = zuuluu;
        zuuluu = function() { // Original name: get
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            tangon = 'FakeSharedValue: You cannot get a value on fake shared value';
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        };
        entity['get'] = zuuluu;
        zuuluu = function() { // Original name: set
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            tangon = 'FakeSharedValue: You cannot set a value on fake shared value';
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        };
        entity['set'] = zuuluu;
        zuuluu = function() { // Original name: addListener
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            tangon = 'FakeSharedValue: You cannot add a listener to a fake shared value, please use a real one';
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        };
        entity['addListener'] = zuuluu;
        zuuluu = function() { // Original name: removeListener
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            tangon = 'FakeSharedValue: You cannot remove a listener to a fake shared value, please use a real one';
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        };
        entity['removeListener'] = zuuluu;
        michal = function() { // Original name: modify
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            tangon = 'FakeSharedValue: You cannot modify a shared value, please use a real one';
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        };
        entity['modify'] = michal;
        return entity;
    };
    zuuluu['createFakeSharedValue'] = michal;
    return entity;
})();