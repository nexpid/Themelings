// discord_common/js/packages/libdave/package/src/DisplayableCode.ts
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    michal = '../discord_common/js/packages/libdave/package/src/DisplayableCode.ts';
    michal = tangon.bind(report)(michal);
    michal = function(argFoo, argBar, argBaz) { // Original name: generateDisplayableCode
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            foxtra = argFoo;
            romeon = argBar;
            yankee = argBaz;
            entity = foxtra.byteLength;
            if(!(!(entity < romeon))) { _fun00002_ip = 315; continue _fun00001 }
 22:
            entity = romeon % yankee;
            offset = 0;
            if(!(entity == offset)) { _fun00002_ip = 279; continue _fun00001 }
 35:
            entity = 8;
            if(!(!(yankee > entity))) { _fun00002_ip = 243; continue _fun00001 }
 45:
            entity = global;
            zuuluu = entity.BigInt;
            source = 10;
            update = yankee;
            michal = exponentiationOperator(source, update);
            verify = undefined;
            option = zuuluu.bind(verify)(michal);
            backup = offset < romeon;
            report = '';
            golfie = '0';
            oscard = 8n;
            tangon = 0;
            zuuluu = undefined;
            michal = report;
            if(!backup) { _fun00002_ip = 207; continue _fun00001 }
 98:
            backup = entity.BigInt;
            sizing = backup.bind(verify)(offset);
            backup = sizing;
            kiloes = yankee;
            if(!(kiloes > offset)) { _fun00002_ip = 167; continue _fun00001 }
 119:
            output = yankee - kiloes;
            output = tangon + output;
            output = foxtra[output];
            if(!(verify !== output)) { _fun00002_ip = 209; continue _fun00001 }
 135:
            echoed = sizing << oscard;
            result = entity.BigInt;
            result = result.bind(verify)(output);
            sizing = echoed | result;
            kiloes = kiloes - 1;
            backup = sizing;
            zuuluu = output;
            if(kiloes > offset) { _fun00002_ip = 119; continue _fun00001 }
 167:
            kiloes = backup % option;
            backup = kiloes.toString;
            kiloes = backup.bind(kiloes)();
            backup = kiloes.padStart;
            backup = backup.bind(kiloes)(yankee, golfie);
            report = report + backup;
            tangon = tangon + yankee;
            michal = report;
            if(tangon < romeon) { _fun00002_ip = 98; continue _fun00001 }
 207:
            return michal;
 209:
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            source = 'Out of bounds access from data array';
            ctrled = michal;
            entity = new ctrled[zuuluu](source, update);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
 243:
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            source = 'groupSize must be less than or equal to 8';
            ctrled = michal;
            entity = new ctrled[zuuluu](source, update);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
 279:
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            source = 'desiredLength must be a multiple of groupSize';
            ctrled = michal;
            entity = new ctrled[zuuluu](source, update);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
 315:
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            source = 'data.byteLength must be greater than or equal to desiredLength';
            ctrled = michal;
            entity = new ctrled[zuuluu](source, update);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    zuuluu['generateDisplayableCode'] = michal;
    return entity;
})();