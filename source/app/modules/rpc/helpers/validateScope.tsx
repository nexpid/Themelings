// app/modules/rpc/helpers/validateScope.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RPC_SCOPE_CONFIG;
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/helpers/validateScope.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: validateScope
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            var _closure2_slot0 = zuuluu;
            entity = null;
            if(!(entity != michal)) { _fun00002_ip = 188; continue _fun00001 }
 21:
            tangon = typeof michal;
            entity = 'string';
            if(!(entity !== tangon)) { _fun00002_ip = 176; continue _fun00001 }
 35:
            entity = 'object';
            if(!(entity === tangon)) { _fun00002_ip = 172; continue _fun00001 }
 46:
            entity = _closure1_slot0;
            tangon = entity.ANY;
            verify = michal[tangon];
            entity = entity.ALL;
            golfie = michal[entity];
            tangon = global;
            oscard = tangon.Array;
            entity = oscard.isArray;
            entity = entity.bind(oscard)(verify);
            oscard = !entity;
            if(oscard) { _fun00002_ip = 118; continue _fun00001 }
 97:
            option = verify.some;
            entity = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.includes;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = option.bind(verify)(entity);
            oscard = !entity;
 118:
            entity = !oscard;
            if(!oscard) { _fun00002_ip = 170; continue _fun00001 }
 124:
            oscard = tangon.Array;
            tangon = oscard.isArray;
            tangon = tangon.bind(oscard)(golfie);
            tangon = !tangon;
            if(tangon) { _fun00002_ip = 167; continue _fun00001 }
 146:
            oscard = golfie.every;
            report = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.includes;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = oscard.bind(golfie)(report);
            tangon = !report;
 167:
            entity = !tangon;
 170:
            return entity;
 172:
            entity = false;
            return entity;
 176:
            entity = zuuluu.includes;
            entity = entity.bind(zuuluu)(michal);
            return entity;
 188:
            entity = true;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();