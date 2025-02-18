// discord_common/js/packages/secure-frames/DisplayableCode.tsx
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
    michal = '../discord_common/js/packages/secure-frames/DisplayableCode.tsx';
    michal = tangon.bind(report)(michal);
    michal = function(argFoo, argBar, argBaz) { // Original name: generateDisplayableCode
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            romeon = argFoo;
            yankee = argBar;
            offset = argBaz;
            entity = romeon.byteLength;
            if(!(!(entity < yankee))) { _fun00002_ip = 272; continue _fun00001 }
 22:
            entity = yankee % offset;
            verify = 0;
            if(!(entity == verify)) { _fun00002_ip = 236; continue _fun00001 }
 35:
            entity = 8;
            if(!(!(offset > entity))) { _fun00002_ip = 200; continue _fun00001 }
 45:
            option = global;
            michal = option.BigInt;
            update = 10;
            echoed = offset;
            entity = exponentiationOperator(update, echoed);
            golfie = undefined;
            oscard = michal.bind(golfie)(entity);
            foxtra = verify < yankee;
            zuuluu = '';
            report = '0';
            tangon = 8n;
            michal = 0;
            entity = zuuluu;
            if(!foxtra) { _fun00002_ip = 198; continue _fun00001 }
 96:
            foxtra = option.BigInt;
            kiloes = foxtra.bind(golfie)(verify);
            foxtra = kiloes;
            backup = offset;
            if(!(backup > verify)) { _fun00002_ip = 158; continue _fun00001 }
 117:
            output = kiloes << tangon;
            result = option.BigInt;
            sizing = offset - backup;
            sizing = michal + sizing;
            sizing = romeon[sizing];
            sizing = result.bind(golfie)(sizing);
            kiloes = output | sizing;
            backup = backup - 1;
            foxtra = kiloes;
            if(backup > verify) { _fun00002_ip = 117; continue _fun00001 }
 158:
            backup = foxtra % oscard;
            foxtra = backup.toString;
            backup = foxtra.bind(backup)();
            foxtra = backup.padStart;
            foxtra = foxtra.bind(backup)(offset, report);
            zuuluu = zuuluu + foxtra;
            michal = michal + offset;
            entity = zuuluu;
            if(michal < yankee) { _fun00002_ip = 96; continue _fun00001 }
 198:
            return entity;
 200:
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            update = 'groupSize must be less than or equal to 8';
            source = michal;
            entity = new source[zuuluu](update, echoed);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
 236:
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            update = 'desiredLength must be a multiple of groupSize';
            source = michal;
            entity = new source[zuuluu](update, echoed);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
 272:
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            update = 'data.byteLength must be greater than or equal to desiredLength';
            source = michal;
            entity = new source[zuuluu](update, echoed);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    zuuluu['generateDisplayableCode'] = michal;
    return entity;
})();