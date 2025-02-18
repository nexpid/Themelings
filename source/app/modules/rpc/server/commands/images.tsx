// app/modules/rpc/server/commands/images.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    verify = michal.RPC_LOCAL_SCOPE;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.RPCCommands;
    michal = michal.RPCErrors;
    var _closure1_slot4 = michal;
    michal = {};
    golfie = tangon.GET_IMAGE;
    tangon = {};
    tangon['scope'] = verify;
    verify = function(argFoo) { // Original name: validation
        report = argFoo;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        entity = michal[entity];
        michal = undefined;
        entity = zuuluu.bind(michal)(entity);
        michal = entity.bind(michal)(report);
        entity = michal.required;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.keys;
        entity = {};
        tangon = report.string;
        oscard = tangon.bind(report)();
        tangon = oscard.required;
        golfie = tangon.bind(oscard)();
        oscard = golfie.valid;
        tangon = ['user'];
        tangon = oscard.bind(golfie)(tangon);
        entity['type'] = tangon;
        tangon = report.string;
        oscard = tangon.bind(report)();
        tangon = oscard.required;
        tangon = tangon.bind(oscard)();
        entity['id'] = tangon;
        tangon = report.string;
        oscard = tangon.bind(report)();
        tangon = oscard.required;
        golfie = tangon.bind(oscard)();
        oscard = golfie.valid;
        tangon = ['png', 'webp', 'jpg'];
        tangon = oscard.bind(golfie)(tangon);
        entity['format'] = tangon;
        tangon = report.number;
        report = tangon.bind(report)();
        tangon = report.required;
        oscard = tangon.bind(report)();
        report = oscard.valid;
        tangon = [16, 32, 64, 128, 256, 512, 1024];
        tangon = report.bind(oscard)(tangon);
        entity['size'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['validation'] = verify;
    option = function(argFoo) { // Original name: handler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.args;
            zuuluu = entity.type;
            report = entity.id;
            romeon = entity.format;
            tangon = undefined;
            if(!(romeon === tangon)) { _fun00002_ip = 38; continue _fun00001 }
 32:
            romeon = 'png';
 38:
            yankee = entity.size;
            if(!(yankee === tangon)) { _fun00002_ip = 50; continue _fun00001 }
 47:
            yankee = 128;
 50:
            entity = 'user';
            oscard = undefined;
            if(!(entity === zuuluu)) { _fun00002_ip = 197; continue _fun00001 }
 63:
            golfie = _closure1_slot3;
            zuuluu = golfie.getUser;
            offset = zuuluu.bind(golfie)(report);
            zuuluu = null;
            if(!(zuuluu != offset)) { _fun00002_ip = 340; continue _fun00001 }
 90:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 4;
            golfie = verify[golfie];
            verify = option.bind(tangon)(golfie);
            option = verify.getUserAvatarURL;
            kiloes = false;
            output = verify;
            sizing = offset;
            backup = yankee;
            foxtra = romeon;
            golfie = output[option](sizing, kiloes, backup, foxtra, romeon);
            option = global;
            option = option.window;
            option = option.GLOBAL_ENV;
            verify = option.CDN_HOST;
            zuuluu = zuuluu != verify;
            if(!zuuluu) { _fun00002_ip = 181; continue _fun00001 }
 161:
            option = golfie.indexOf;
            verify = option.bind(golfie)(verify);
            option = -1;
            zuuluu = option !== verify;
 181:
            oscard = golfie;
            if(!zuuluu) { _fun00002_ip = 197; continue _fun00001 }
 187:
            zuuluu = '&_=';
            oscard = golfie + zuuluu;
 197:
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00002_ip = 269; continue _fun00001 }
 203:
            zuuluu = global;
            zuuluu = zuuluu.fetch;
            golfie = zuuluu.bind(tangon)(oscard);
            oscard = golfie.then;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = michal.blob;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = oscard.bind(golfie)(zuuluu);
            oscard = golfie.then;
            zuuluu = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.readFileAsBase64;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = oscard.bind(golfie)(zuuluu);
            zuuluu = oscard.then;
            michal = function(argFoo) {
                entity = {};
                michal = argFoo;
                entity['data_url'] = michal;
                return entity;
            };
            michal = zuuluu.bind(oscard)(michal);
            return michal;
 269:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 5;
            zuuluu = golfie[zuuluu];
            golfie = oscard.bind(tangon)(zuuluu);
            oscard = {};
            michal = _closure1_slot4;
            michal = michal.INVALID_COMMAND;
            oscard['errorCode'] = michal;
            michal = golfie.prototype;
            zuuluu = Object.create(michal, {constructor: {value: golfie}});
            kiloes = 'No valid type.';
            output = zuuluu;
            sizing = oscard;
            michal = new output[golfie](sizing, kiloes, backup);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 340:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 5;
            michal = oscard[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = {};
            entity = _closure1_slot4;
            entity = entity.INVALID_USER;
            zuuluu['errorCode'] = entity;
            entity = global;
            entity = entity.HermesInternal;
            michal = entity.concat;
            entity = 'Invalid user id: ';
            kiloes = michal.bind(entity)(report);
            michal = tangon.prototype;
            michal = Object.create(michal, {constructor: {value: tangon}});
            output = michal;
            sizing = zuuluu;
            entity = new output[tangon](sizing, kiloes, backup);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    tangon['handler'] = option;
    michal[golfie] = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/commands/images.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();