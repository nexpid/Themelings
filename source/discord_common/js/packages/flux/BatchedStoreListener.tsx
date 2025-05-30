// discord_common/js/packages/flux/BatchedStoreListener.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo, argBar, argBaz) { // Original name: BatchedStoreListener
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            report = _closure1_slot3;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            michal = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
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
            michal = argBaz;
            zuuluu['libDiscoreContextId'] = michal;
            michal = argBar;
            zuuluu['changeCallback'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'attach';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = this;
                var _closure3_slot0 = michal;
                zuuluu = argFoo;
                var _closure3_slot1 = zuuluu;
                tangon = michal.stores;
                report = michal.libDiscoreContextId;
                zuuluu = tangon.forEach;
                entity = function(argFoo, argBar) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = argFoo;
                        entity = null;
                        if(!(entity != zuuluu)) { _fun00006_ip = 37; continue _fun00005 }
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
                entity = zuuluu.bind(tangon)(entity);
                entity = undefined;
                if(!(entity !== report)) { _fun00004_ip = 90; continue _fun00003 }
 49:
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 3;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.attachContextListener;
                michal = michal.handleStoreChange;
                michal = zuuluu.bind(tangon)(report, michal);
 90:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'detach';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = this;
                var _closure3_slot0 = michal;
                zuuluu = michal.stores;
                tangon = michal.libDiscoreContextId;
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
                if(!(entity !== tangon)) { _fun00008_ip = 76; continue _fun00007 }
 42:
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                michal = 3;
                michal = report[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.destroyContext;
                michal = michal.bind(zuuluu)(tangon);
 76:
                return entity;
            }
        };
        entity['value'] = report;
        michal[1] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/flux/BatchedStoreListener.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['BatchedStoreListener'] = michal;
    return entity;
})();