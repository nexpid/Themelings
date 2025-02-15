// app/modules/voice_panel/native/utils/fitCardsInGrid.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = function(argFoo, argBar) { // Original name: isNewLayoutBetter
        _fun101790: for(var _fun101790_ip = 0; ; ) switch(_fun101790_ip) {
 0:
            mike = argFoo;
            entity = argBar;
            zulu = entity.unusedSpace;
            tango = 0;
            if(!(tango !== zulu)) { _fun101790_ip = 373; continue _fun101790 }
 21:
            report = mike.unusedSpace;
            zulu = entity.unusedSpace;
            if(!(report !== zulu)) { _fun101790_ip = 373; continue _fun101790 }
 40:
            zulu = mike.unusedSpace;
            if(!(tango !== zulu)) { _fun101790_ip = 369; continue _fun101790 }
 53:
            report = entity.unusedSpace;
            zulu = inf;
            if(!(report !== zulu)) { _fun101790_ip = 369; continue _fun101790 }
 76:
            zulu = entity.unusedSpace;
            if(!(zulu > tango)) { _fun101790_ip = 99; continue _fun101790 }
 86:
            zulu = mike.unusedSpace;
            if(!(!(zulu < tango))) { _fun101790_ip = 365; continue _fun101790 }
 99:
            zulu = mike.unusedSpace;
            if(!(zulu > tango)) { _fun101790_ip = 122; continue _fun101790 }
 109:
            zulu = entity.unusedSpace;
            if(!(!(zulu < tango))) { _fun101790_ip = 361; continue _fun101790 }
 122:
            tango = global;
            oscar = tango.Math;
            report = oscar.abs;
            zulu = entity.unusedSpace;
            report = report.bind(oscar)(zulu);
            golf = tango.Math;
            oscar = golf.abs;
            zulu = mike.unusedSpace;
            zulu = oscar.bind(golf)(zulu);
            golf = tango.Math;
            oscar = golf.max;
            golf = oscar.bind(golf)(report, zulu);
            options = tango.Math;
            oscar = options.min;
            oscar = oscar.bind(options)(report, zulu);
            golf = golf - oscar;
            oscar = 5000;
            if(!(!(golf < oscar))) { _fun101790_ip = 224; continue _fun101790 }
 218:
            zulu = zulu < report;
            return zulu;
 224:
            golf = tango.Math;
            oscar = golf.max;
            report = mike.rows;
            zulu = mike.columns;
            zulu = oscar.bind(golf)(report, zulu);
            golf = tango.Math;
            oscar = golf.min;
            report = mike.rows;
            mike = mike.columns;
            mike = oscar.bind(golf)(report, mike);
            zulu = zulu - mike;
            golf = tango.Math;
            oscar = golf.max;
            report = entity.rows;
            mike = entity.columns;
            mike = oscar.bind(golf)(report, mike);
            oscar = tango.Math;
            report = oscar.min;
            tango = entity.rows;
            entity = entity.columns;
            entity = report.bind(oscar)(tango, entity);
            mike = mike - entity;
            entity = mike !== zulu;
            if(!entity) { _fun101790_ip = 359; continue _fun101790 }
 355:
            entity = zulu < mike;
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
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/utils/fitCardsInGrid.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: fitCardsInGrid
        _fun101791: for(var _fun101791_ip = 0; ; ) switch(_fun101791_ip) {
 0:
            entity = argFoo;
            sizing = entity.cardCount;
            kilo = entity.gutterSize;
            backup = entity.availableWidth;
            foxtrot = entity.availableHeight;
            tango = {'columns': 1, 'rows': 0, 'cardSize': 0, 'overscroll': 0, 'unusedSpace': inf};
            romeo = 1;
            yankee = 0;
            output = romeo <= sizing;
            offset = undefined;
            verify = 'unusedSpace';
            options = 'overscroll';
            golf = 'cardSize';
            report = global;
            zulu = romeo;
            entity = undefined;
            mike = tango;
            if(!output) { _fun101791_ip = 415; continue _fun101791 }
 83:
            output = zulu - romeo;
            output = output * kilo;
            output = backup - output;
            output = output / zulu;
            update = sizing % zulu;
            source = report.Math;
            echo = source.floor;
            result = sizing / zulu;
            echo = echo.bind(source)(result);
            result = 0;
            if(!(update > result)) { _fun101791_ip = 133; continue _fun101791 }
 130:
            result = romeo;
 133:
            result = echo + result;
            control = {};
            vacuum = output * zulu;
            source = backup * foxtrot;
            echo = zulu - romeo;
            update = echo * kilo;
            echo = result - romeo;
            sequence = echo * kilo;
            echo = output * result;
            echo = echo + sequence;
            update = vacuum + update;
            update = update * echo;
            update = source - update;
            control['unusedSpace'] = update;
            control['columns'] = zulu;
            echo = foxtrot - echo;
            control['overscroll'] = echo;
            control['rows'] = result;
            control['cardSize'] = output;
            output = _closure1_slot0;
            output = output.bind(offset)(control, tango);
            update = tango;
            if(!output) { _fun101791_ip = 231; continue _fun101791 }
 228:
            update = control;
 231:
            result = control.overscroll;
            output = update;
            if(!(result < yankee)) { _fun101791_ip = 399; continue _fun101791 }
 247:
            result = control.rows;
            result = result - romeo;
            result = result * kilo;
            echo = foxtrot - result;
            result = control.rows;
            echo = echo / result;
            result = control.rows;
            source = echo * result;
            result = control.rows;
            result = result - romeo;
            result = result * kilo;
            source = source + result;
            result = {};
            record = result;
            config = control;
            vacuum = copyDataProperties(record, config);
            vacuum = control.columns;
            sequence = echo * vacuum;
            control = control.columns;
            control = control - romeo;
            control = control * kilo;
            vacuum = backup * foxtrot;
            control = sequence + control;
            control = control * source;
            control = vacuum - control;
            result[verify] = control;
            source = foxtrot - source;
            result[options] = source;
            result[golf] = echo;
            echo = _closure1_slot0;
            echo = echo.bind(offset)(result, update);
            output = update;
            entity = result;
            if(!echo) { _fun101791_ip = 399; continue _fun101791 }
 393:
            output = result;
            entity = output;
 399:
            zulu = zulu + 1;
            tango = output;
            mike = tango;
            if(zulu <= sizing) { _fun101791_ip = 83; continue _fun101791 }
 415:
            entity = {};
            zulu = mike.columns;
            entity['columns'] = zulu;
            mike = mike.cardSize;
            entity['cardSize'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();