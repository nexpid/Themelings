// app/modules/gateway/GatewayEncoding.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        golfie = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
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
        var _closure1_slot0 = tangon;
        tangon = 1;
        tangon = oscard[tangon];
        tangon = golfie.bind(entity)(tangon);
        var _closure1_slot1 = tangon;
        tangon = 2;
        tangon = oscard[tangon];
        golfie = report.bind(entity)(tangon);
        tangon = golfie.getErlpackEncoding;
        golfie = tangon.bind(golfie)();
        michal = function() {
            tangon = _closure1_slot1;
            zuuluu = function() { // Original name: JSONEncoding
                tangon = _closure1_slot0;
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = this;
                michal = tangon.bind(entity)(michal, zuuluu);
                return entity;
            };
            var _closure2_slot0 = zuuluu;
            entity = {};
            michal = 'pack';
            entity['key'] = michal;
            michal = function(argFoo) { // Original name: value
                entity = global;
                zuuluu = entity.JSON;
                michal = zuuluu.stringify;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity['value'] = michal;
            michal = new Array(4);
            michal[0] = entity;
            entity = {};
            oscard = 'unpack';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    michal = typeof report;
                    entity = 'string';
                    if(!(entity === michal)) { _fun00004_ip = 35; continue _fun00003 }
 14:
                    entity = global;
                    zuuluu = entity.JSON;
                    entity = zuuluu.parse;
                    entity = entity.bind(zuuluu)(report);
                    return entity;
 35:
                    entity = global;
                    zuuluu = entity.Error;
                    tangon = null;
                    report = tangon == report;
                    if(report) { _fun00004_ip = 55; continue _fun00003 }
 52:
                    tangon = michal;
 55:
                    entity = entity.HermesInternal;
                    michal = entity.concat;
                    entity = 'Expected a string to be passed to JSONEncoding.unpack, got ';
                    oscard = michal.bind(entity)(tangon);
                    michal = zuuluu.prototype;
                    michal = Object.create(michal, {constructor: {value: zuuluu}});
                    golfie = michal;
                    entity = new golfie[zuuluu](oscard, report);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
                }
            };
            entity['value'] = oscard;
            michal[1] = entity;
            entity = {};
            oscard = 'getName';
            entity['key'] = oscard;
            oscard = function() { // Original name: value
                entity = 'json';
                return entity;
            };
            entity['value'] = oscard;
            michal[2] = entity;
            entity = {};
            oscard = 'wantsString';
            entity['key'] = oscard;
            report = function() { // Original name: value
                entity = true;
                return entity;
            };
            entity['value'] = report;
            michal[3] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        tangon = michal.bind(entity)();
        michal = tangon;
        if(!(entity !== golfie)) { _fun00002_ip = 120; continue _fun00001 }
 117:
        michal = golfie;
 120:
        golfie = 3;
        golfie = oscard[golfie];
        golfie = report.bind(entity)(golfie);
        option = golfie.ProcessArgs;
        golfie = option.isDiscordGatewayPlaintextSet;
        golfie = golfie.bind(option)();
        if(!golfie) { _fun00002_ip = 154; continue _fun00001 }
 151:
        michal = tangon;
 154:
        tangon = 4;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'modules/gateway/GatewayEncoding.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();