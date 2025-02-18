// app/modules/voice_panel/native/utils/fitCardsInGrid.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = function(argFoo, argBar) { // Original name: isNewLayoutBetter
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = argBar;
            zuuluu = entity.unusedSpace;
            tangon = 0;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 373; continue _fun00001 }
 21:
            report = michal.unusedSpace;
            zuuluu = entity.unusedSpace;
            if(!(report !== zuuluu)) { _fun00002_ip = 373; continue _fun00001 }
 40:
            zuuluu = michal.unusedSpace;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 369; continue _fun00001 }
 53:
            report = entity.unusedSpace;
            zuuluu = inf;
            if(!(report !== zuuluu)) { _fun00002_ip = 369; continue _fun00001 }
 76:
            zuuluu = entity.unusedSpace;
            if(!(zuuluu > tangon)) { _fun00002_ip = 99; continue _fun00001 }
 86:
            zuuluu = michal.unusedSpace;
            if(!(!(zuuluu < tangon))) { _fun00002_ip = 365; continue _fun00001 }
 99:
            zuuluu = michal.unusedSpace;
            if(!(zuuluu > tangon)) { _fun00002_ip = 122; continue _fun00001 }
 109:
            zuuluu = entity.unusedSpace;
            if(!(!(zuuluu < tangon))) { _fun00002_ip = 361; continue _fun00001 }
 122:
            tangon = global;
            oscard = tangon.Math;
            report = oscard.abs;
            zuuluu = entity.unusedSpace;
            report = report.bind(oscard)(zuuluu);
            golfie = tangon.Math;
            oscard = golfie.abs;
            zuuluu = michal.unusedSpace;
            zuuluu = oscard.bind(golfie)(zuuluu);
            golfie = tangon.Math;
            oscard = golfie.max;
            golfie = oscard.bind(golfie)(report, zuuluu);
            option = tangon.Math;
            oscard = option.min;
            oscard = oscard.bind(option)(report, zuuluu);
            golfie = golfie - oscard;
            oscard = 5000;
            if(!(!(golfie < oscard))) { _fun00002_ip = 224; continue _fun00001 }
 218:
            zuuluu = zuuluu < report;
            return zuuluu;
 224:
            golfie = tangon.Math;
            oscard = golfie.max;
            report = michal.rows;
            zuuluu = michal.columns;
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            golfie = tangon.Math;
            oscard = golfie.min;
            report = michal.rows;
            michal = michal.columns;
            michal = oscard.bind(golfie)(report, michal);
            zuuluu = zuuluu - michal;
            golfie = tangon.Math;
            oscard = golfie.max;
            report = entity.rows;
            michal = entity.columns;
            michal = oscard.bind(golfie)(report, michal);
            oscard = tangon.Math;
            report = oscard.min;
            tangon = entity.rows;
            entity = entity.columns;
            entity = report.bind(oscard)(tangon, entity);
            michal = michal - entity;
            entity = michal !== zuuluu;
            if(!entity) { _fun00002_ip = 359; continue _fun00001 }
 355:
            entity = zuuluu < michal;
 359:
            return entity;
 361:
            entity = true;
            return entity;
 365:
            entity = false;
            return entity;
 369:
            entity = true;
            return entity;
 373:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot0 = entity;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/utils/fitCardsInGrid.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: fitCardsInGrid
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            sizing = entity.cardCount;
            kiloes = entity.gutterSize;
            backup = entity.availableWidth;
            foxtra = entity.availableHeight;
            tangon = {'columns': 1, 'rows': 0, 'cardSize': 0, 'overscroll': 0, 'unusedSpace': inf};
            romeon = 1;
            yankee = 0;
            output = romeon <= sizing;
            offset = undefined;
            verify = 'unusedSpace';
            option = 'overscroll';
            golfie = 'cardSize';
            report = global;
            zuuluu = romeon;
            entity = undefined;
            michal = tangon;
            if(!output) { _fun00004_ip = 415; continue _fun00003 }
 83:
            output = zuuluu - romeon;
            output = output * kiloes;
            output = backup - output;
            output = output / zuuluu;
            update = sizing % zuuluu;
            source = report.Math;
            echoed = source.floor;
            result = sizing / zuuluu;
            echoed = echoed.bind(source)(result);
            result = 0;
            if(!(update > result)) { _fun00004_ip = 133; continue _fun00003 }
 130:
            result = romeon;
 133:
            result = echoed + result;
            ctrled = {};
            vacuum = output * zuuluu;
            source = backup * foxtra;
            echoed = zuuluu - romeon;
            update = echoed * kiloes;
            echoed = result - romeon;
            sequen = echoed * kiloes;
            echoed = output * result;
            echoed = echoed + sequen;
            update = vacuum + update;
            update = update * echoed;
            update = source - update;
            ctrled['unusedSpace'] = update;
            ctrled['columns'] = zuuluu;
            echoed = foxtra - echoed;
            ctrled['overscroll'] = echoed;
            ctrled['rows'] = result;
            ctrled['cardSize'] = output;
            output = _closure1_slot0;
            output = output.bind(offset)(ctrled, tangon);
            update = tangon;
            if(!output) { _fun00004_ip = 231; continue _fun00003 }
 228:
            update = ctrled;
 231:
            result = ctrled.overscroll;
            output = update;
            if(!(result < yankee)) { _fun00004_ip = 399; continue _fun00003 }
 247:
            result = ctrled.rows;
            result = result - romeon;
            result = result * kiloes;
            echoed = foxtra - result;
            result = ctrled.rows;
            echoed = echoed / result;
            result = ctrled.rows;
            source = echoed * result;
            result = ctrled.rows;
            result = result - romeon;
            result = result * kiloes;
            source = source + result;
            result = {};
            record = result;
            config = ctrled;
            vacuum = copyDataProperties(record, config);
            vacuum = ctrled.columns;
            sequen = echoed * vacuum;
            ctrled = ctrled.columns;
            ctrled = ctrled - romeon;
            ctrled = ctrled * kiloes;
            vacuum = backup * foxtra;
            ctrled = sequen + ctrled;
            ctrled = ctrled * source;
            ctrled = vacuum - ctrled;
            result[verify] = ctrled;
            source = foxtra - source;
            result[option] = source;
            result[golfie] = echoed;
            echoed = _closure1_slot0;
            echoed = echoed.bind(offset)(result, update);
            output = update;
            entity = result;
            if(!echoed) { _fun00004_ip = 399; continue _fun00003 }
 393:
            output = result;
            entity = output;
 399:
            zuuluu = zuuluu + 1;
            tangon = output;
            michal = tangon;
            if(zuuluu <= sizing) { _fun00004_ip = 83; continue _fun00003 }
 415:
            entity = {};
            zuuluu = michal.columns;
            entity['columns'] = zuuluu;
            michal = michal.cardSize;
            entity['cardSize'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();