// app/utils/DragAndDropUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = option;
    report = function(argFoo) { // Original name: calculatePositionDeltas
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.oldOrdering;
            tangon = entity.newOrdering;
            foxtra = entity.idGetter;
            romeon = entity.existingPositionGetter;
            michal = entity.ascending;
            yankee = undefined;
            if(!(michal === yankee)) { _fun00002_ip = 41; continue _fun00001 }
 39:
            michal = true;
 41:
            offset = tangon.length;
            entity = report.length;
            if(!(entity === offset)) { _fun00002_ip = 310; continue _fun00001 }
 58:
            entity = report.map;
            zuuluu = entity.bind(report)(foxtra);
            entity = zuuluu.sort;
            zuuluu = entity.bind(zuuluu)();
            entity = zuuluu.join;
            oscard = ':';
            golfie = entity.bind(zuuluu)(oscard);
            entity = tangon.map;
            zuuluu = entity.bind(tangon)(foxtra);
            entity = zuuluu.sort;
            zuuluu = entity.bind(zuuluu)();
            entity = zuuluu.join;
            oscard = entity.bind(zuuluu)(oscard);
            if(!(golfie === oscard)) { _fun00002_ip = 279; continue _fun00001 }
 129:
            verify = {};
            option = 0;
            zuuluu = option < offset;
            entity = 0;
            if(!zuuluu) { _fun00002_ip = 171; continue _fun00001 }
 142:
            zuuluu = report[entity];
            backup = foxtra.bind(yankee)(zuuluu);
            zuuluu = report[entity];
            zuuluu = romeon.bind(yankee)(zuuluu);
            verify[backup] = zuuluu;
            entity = entity + 1;
            if(entity < offset) { _fun00002_ip = 142; continue _fun00001 }
 171:
            entity = new Array(0);
            backup = option < offset;
            zuuluu = 1;
            option = 0;
            if(!backup) { _fun00002_ip = 264; continue _fun00001 }
 187:
            backup = tangon[option];
            output = foxtra.bind(yankee)(backup);
            sizing = option;
            if(michal) { _fun00002_ip = 210; continue _fun00001 }
 202:
            backup = offset - zuuluu;
            sizing = backup - option;
 210:
            backup = verify[output];
            backup = backup === sizing;
            if(!backup) { _fun00002_ip = 234; continue _fun00001 }
 221:
            kiloes = tangon[option];
            kiloes = romeon.bind(yankee)(kiloes);
            backup = kiloes === sizing;
 234:
            if(backup) { _fun00002_ip = 257; continue _fun00001 }
 237:
            kiloes = entity.push;
            backup = {};
            backup['id'] = output;
            backup['position'] = sizing;
            backup = kiloes.bind(entity)(backup);
 257:
            option = option + 1;
            if(option < offset) { _fun00002_ip = 187; continue _fun00001 }
 264:
            if(michal) { _fun00002_ip = 277; continue _fun00001 }
 267:
            michal = entity.reverse;
            michal = michal.bind(entity)();
 277:
            return entity;
 279:
            zuuluu = _closure1_slot2;
            michal = zuuluu.warn;
            entity = 'Object IDs in the old ordering and the new ordering are not the same.';
            entity = michal.bind(zuuluu)(entity, golfie, oscard);
            entity = new Array(0);
            return entity;
 310:
            zuuluu = _closure1_slot2;
            michal = zuuluu.warn;
            entity = 'Arrays are not of the same length!';
            entity = michal.bind(zuuluu)(entity, report, tangon);
            entity = new Array(0);
            return entity;
        }
    };
    var _closure1_slot3 = report;
    tangon = function(argFoo, argBar, argBaz) { // Original name: moveItemFromTo
        michal = argFoo;
        oscard = argBar;
        report = michal[oscard];
        entity = new Array(0);
        tangon = 0;
        verify = entity;
        option = michal;
        golfie = 0;
        michal = arraySpread(verify, option, golfie);
        zuuluu = entity.splice;
        michal = 1;
        michal = zuuluu.bind(entity)(oscard, michal);
        zuuluu = entity.splice;
        michal = argBaz;
        michal = zuuluu.bind(entity)(michal, tangon, report);
        return entity;
    };
    var _closure1_slot4 = tangon;
    michal = function(argFoo) { // Original name: getPositionUpdates
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golfie = entity.objectArray;
            offset = entity.fromPosition;
            verify = entity.toPosition;
            oscard = entity.idGetter;
            report = entity.existingPositionGetter;
            tangon = entity.ascending;
            zuuluu = undefined;
            if(!(tangon === zuuluu)) { _fun00004_ip = 53; continue _fun00003 }
 51:
            tangon = true;
 53:
            entity = global;
            michal = entity.Array;
            entity = michal.isArray;
            entity = entity.bind(michal)(golfie);
            option = golfie;
            if(entity) { _fun00004_ip = 110; continue _fun00003 }
 77:
            michal = _closure1_slot0;
            yankee = _closure1_slot1;
            entity = 1;
            entity = yankee[entity];
            michal = michal.bind(zuuluu)(entity);
            entity = michal.values;
            option = entity.bind(michal)(golfie);
 110:
            michal = _closure1_slot3;
            entity = {};
            entity['oldOrdering'] = option;
            golfie = _closure1_slot4;
            golfie = golfie.bind(zuuluu)(option, offset, verify);
            entity['newOrdering'] = golfie;
            entity['idGetter'] = oscard;
            entity['existingPositionGetter'] = report;
            entity['ascending'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    offset = verify.bind(entity)(oscard);
    oscard = offset.prototype;
    verify = Object.create(oscard, {constructor: {value: offset}});
    backup = 'DragAndDropUtils';
    kiloes = verify;
    oscard = new kiloes[offset](backup, foxtra);
    oscard = oscard instanceof Object ? oscard : verify;
    var _closure1_slot2 = oscard;
    oscard = {};
    oscard['moveItemFromTo'] = tangon;
    oscard['calculatePositionDeltas'] = report;
    oscard['getPositionUpdates'] = michal;
    golfie = 2;
    option = option[golfie];
    golfie = argBar;
    verify = golfie.bind(entity)(option);
    option = verify.fileFinishedImporting;
    golfie = 'utils/DragAndDropUtils.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['default'] = oscard;
    zuuluu['calculatePositionDeltas'] = report;
    zuuluu['moveItemFromTo'] = tangon;
    zuuluu['getPositionUpdates'] = michal;
    return entity;
})();