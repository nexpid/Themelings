// discord_common/js/packages/flux/BatchedStoreListener.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function(argFoo, argBar) { // Original name: BatchedStoreListener
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            report = _closure1_slot2;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            michal = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot1;
                    entity = 2;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.getChangeSentinel;
                    zuuluu = michal.bind(zuuluu)();
                    tangon = _closure3_slot0;
                    tangon = tangon.storeVersionHandled;
                    if(!(tangon !== zuuluu)) { _fun00002_ip = 72; continue _fun00001 }
 52:
                    michal = _closure3_slot0;
                    tangon = michal.changeCallback;
                    tangon = tangon.bind(michal)();
                    michal['storeVersionHandled'] = zuuluu;
 72:
                    return entity;
                }
            };
            zuuluu['handleStoreChange'] = michal;
            michal = argFoo;
            zuuluu['stores'] = michal;
            michal = argBar;
            zuuluu['changeCallback'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'attach';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            michal = this;
            var _closure3_slot0 = michal;
            zuuluu = argFoo;
            var _closure3_slot1 = zuuluu;
            zuuluu = michal.stores;
            michal = zuuluu.forEach;
            entity = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00004_ip = 37; continue _fun00003 }
 9:
                    michal = zuuluu.addReactChangeListener;
                    entity = _closure3_slot0;
                    entity = entity.handleStoreChange;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
 37:
                    entity = global;
                    zuuluu = entity.Error;
                    yankee = _closure3_slot1;
                    entity = entity.HermesInternal;
                    oscard = entity.concat;
                    romeon = '';
                    offset = " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded ";
                    verify = argBar;
                    option = ' stores before error.';
                    yankee = romeon[oscard](yankee, offset, verify, option, golfie);
                    michal = zuuluu.prototype;
                    michal = Object.create(michal, {constructor: {value: zuuluu}});
                    romeon = michal;
                    entity = new romeon[zuuluu](yankee, offset);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'detach';
        entity['key'] = oscard;
        report = function() { // Original name: value
            michal = this;
            var _closure3_slot0 = michal;
            zuuluu = michal.stores;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                zuuluu = argFoo;
                michal = zuuluu.removeReactChangeListener;
                entity = _closure3_slot0;
                entity = entity.handleStoreChange;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[1] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 3;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/flux/BatchedStoreListener.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['BatchedStoreListener'] = michal;
    return entity;
})();