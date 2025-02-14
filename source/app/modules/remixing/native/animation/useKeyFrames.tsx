// app/modules/remixing/native/animation/useKeyFrames.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = function(argFoo) { // Original name: getValue
        _fun84150: for(var _fun84150_ip = 0; ; ) switch(_fun84150_ip) {
 0:
            mike = argFoo;
            entity = 'current';
            entity = entity in mike;
            if(entity) { _fun84150_ip = 21; continue _fun84150 }
 14:
            entity = mike.value;
            _fun84150_ip = 26; continue _fun84150;
 21:
            entity = mike.current;
 26:
            return entity;
        }
    };
    var _closure1_slot4 = tango;
    tango = function(argFoo, argBar) { // Original name: setValue
        _fun84151: for(var _fun84151_ip = 0; ; ) switch(_fun84151_ip) {
 0:
            mike = argFoo;
            entity = argBar;
            zulu = 'current';
            zulu = zulu in mike;
            if(!zulu) { _fun84151_ip = 23; continue _fun84151 }
 17:
            mike['current'] = entity;
 23:
            zulu = 'value';
            zulu = zulu in mike;
            if(!zulu) { _fun84151_ip = 40; continue _fun84151 }
 34:
            mike['value'] = entity;
 40:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    tango = function(argFoo) { // Original name: getLastFrame
        mike = argFoo;
        zulu = mike.length;
        entity = 1;
        entity = zulu - entity;
        entity = mike[entity];
        mike = entity.timing;
        entity = entity.duration;
        entity = mike + entity;
        return entity;
    };
    var _closure1_slot6 = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: animateProperty
        _fun84153: for(var _fun84153_ip = 0; ; ) switch(_fun84153_ip) {
 0:
            zulu = argFoo;
            tango = argBar;
            verify = argBaz;
            options = argCorge;
            var _closure2_slot0 = zulu;
            var _closure2_slot1 = options;
            mike = zulu.reduce;
            entity = function(argFoo, argBar, argBaz) {
                _fun84154: for(var _fun84154_ip = 0; ; ) switch(_fun84154_ip) {
 0:
                    entity = argFoo;
                    tango = argBar;
                    report = _closure2_slot1;
                    mike = tango.timing;
                    if(!(report >= mike)) { _fun84154_ip = 72; continue _fun84154 }
 23:
                    mike = {};
                    golf = mike;
                    oscar = tango;
                    tango = copyDataProperties(golf, oscar);
                    tango = _closure2_slot0;
                    report = argBaz;
                    zulu = 1;
                    zulu = report - zulu;
                    zulu = tango[zulu];
                    tango = zulu.value;
                    zulu = 'previousValue';
                    mike[zulu] = tango;
                    entity = mike;
 72:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            zulu = entity.value;
            report = entity.timing;
            golf = entity.duration;
            offset = entity.previousValue;
            oscar = entity.easing;
            entity = undefined;
            if(!(entity === oscar)) { _fun84153_ip = 111; continue _fun84153 }
 76:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            mike = 1;
            mike = romeo[mike];
            mike = yankee.bind(entity)(mike);
            mike = mike.Easing;
            oscar = mike.linear;
 111:
            if(!(!(report > options))) { _fun84153_ip = 283; continue _fun84153 }
 118:
            mike = global;
            foxtrot = mike.Math;
            romeo = foxtrot.abs;
            yankee = _closure1_slot4;
            yankee = yankee.bind(entity)(tango);
            yankee = zulu - yankee;
            romeo = romeo.bind(foxtrot)(yankee);
            yankee = 0.001;
            if(!(!(romeo > yankee))) { _fun84153_ip = 192; continue _fun84153 }
 167:
            yankee = _closure1_slot4;
            yankee = yankee.bind(entity)(tango);
            if(!(zulu !== yankee)) { _fun84153_ip = 283; continue _fun84153 }
 180:
            yankee = _closure1_slot5;
            yankee = yankee.bind(entity)(tango, zulu);
            _fun84153_ip = 283; continue _fun84153;
 192:
            yankee = null;
            if(!(yankee != offset)) { _fun84153_ip = 201; continue _fun84153 }
 198:
            verify = offset;
 201:
            offset = golf + report;
            yankee = offset - options;
            offset = 0;
            if(!(!(yankee < offset))) { _fun84153_ip = 273; continue _fun84153 }
 215:
            report = options - report;
            report = report / golf;
            options = oscar.bind(entity)(report);
            oscar = _closure1_slot5;
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            report = 2;
            report = offset[report];
            golf = golf.bind(entity)(report);
            report = golf.LERP;
            report = report.bind(golf)(verify, zulu, options);
            report = oscar.bind(entity)(tango, report);
            _fun84153_ip = 283; continue _fun84153;
 273:
            mike = _closure1_slot5;
            mike = mike.bind(entity)(tango, zulu);
 283:
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    tango = {'autoplay': true, 'delay': 0, 'loop': false};
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/remixing/native/animation/useKeyFrames.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: _default
        _fun84155: for(var _fun84155_ip = 0; ; ) switch(_fun84155_ip) {
 0:
            output = argFoo;
            kilo = argBar;
            oscar = arguments[2];
            var _closure2_slot0 = output;
            var _closure2_slot1 = kilo;
            report = undefined;
            if(!(oscar === report)) { _fun84155_ip = 27; continue _fun84155 }
 25:
            oscar = {};
 27:
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            var _closure2_slot11 = report;
            var _closure2_slot12 = report;
            var _closure2_slot13 = report;
            var _closure2_slot14 = report;
            mike = function() { // Original name: stop
                zulu = _closure2_slot12;
                mike = false;
                zulu['current'] = mike;
                mike = _closure2_slot7;
                entity = mike.stop;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            var _closure2_slot15 = mike;
            tango = _closure1_slot3;
            offset = tango.useReducedMotion;
            tango = {};
            result = _closure1_slot8;
            echo = tango;
            golf = copyDataProperties(echo, result);
            echo = tango;
            result = oscar;
            oscar = copyDataProperties(echo, result);
            backup = tango.autoplay;
            oscar = tango.delay;
            _closure2_slot2 = oscar;
            oscar = tango.loop;
            _closure2_slot3 = oscar;
            oscar = tango.loops;
            _closure2_slot4 = oscar;
            oscar = tango.callback;
            _closure2_slot5 = oscar;
            romeo = tango.reducedMotionFreezePercent;
            _closure2_slot6 = romeo;
            foxtrot = _closure1_slot0;
            sizing = _closure1_slot2;
            golf = 3;
            tango = sizing[golf];
            oscar = foxtrot.bind(report)(tango);
            tango = oscar.useClockValue;
            oscar = tango.bind(oscar)();
            _closure2_slot7 = oscar;
            tango = sizing[golf];
            verify = foxtrot.bind(report)(tango);
            options = verify.useValue;
            tango = -1;
            tango = options.bind(verify)(tango);
            _closure2_slot8 = tango;
            tango = sizing[golf];
            verify = foxtrot.bind(report)(tango);
            options = verify.useValue;
            yankee = output.map;
            tango = function(argFoo) {
                zulu = _closure1_slot4;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            tango = yankee.bind(output)(tango);
            tango = options.bind(verify)(tango);
            _closure2_slot9 = tango;
            tango = sizing[golf];
            options = foxtrot.bind(report)(tango);
            tango = options.useValue;
            verify = false;
            tango = tango.bind(options)(verify);
            _closure2_slot10 = tango;
            tango = sizing[golf];
            options = foxtrot.bind(report)(tango);
            tango = options.useValue;
            yankee = 0;
            tango = tango.bind(options)(yankee);
            _closure2_slot11 = tango;
            tango = sizing[golf];
            options = foxtrot.bind(report)(tango);
            tango = options.useValue;
            options = tango.bind(options)(backup);
            _closure2_slot12 = options;
            tango = sizing[golf];
            foxtrot = foxtrot.bind(report)(tango);
            tango = foxtrot.useValue;
            tango = tango.bind(foxtrot)(kilo);
            _closure2_slot13 = tango;
            backup = _closure1_slot1;
            foxtrot = 4;
            foxtrot = sizing[foxtrot];
            backup = backup.bind(report)(foxtrot);
            foxtrot = function() {
                entity = function() {
                    _fun84159: for(var _fun84159_ip = 0; ; ) switch(_fun84159_ip) {
 0:
                        mike = _closure2_slot8;
                        zulu = null;
                        if(!(zulu != mike)) { _fun84159_ip = 27; continue _fun84159 }
 13:
                        tango = _closure2_slot8;
                        mike = tango.dispose;
                        mike = mike.bind(tango)();
 27:
                        mike = _closure2_slot10;
                        if(!(zulu != mike)) { _fun84159_ip = 49; continue _fun84159 }
 35:
                        tango = _closure2_slot10;
                        mike = tango.dispose;
                        mike = mike.bind(tango)();
 49:
                        mike = _closure2_slot11;
                        if(!(zulu != mike)) { _fun84159_ip = 71; continue _fun84159 }
 57:
                        tango = _closure2_slot11;
                        mike = tango.dispose;
                        mike = mike.bind(tango)();
 71:
                        mike = _closure2_slot12;
                        if(!(zulu != mike)) { _fun84159_ip = 93; continue _fun84159 }
 79:
                        tango = _closure2_slot12;
                        mike = tango.dispose;
                        mike = mike.bind(tango)();
 93:
                        mike = _closure2_slot13;
                        if(!(zulu != mike)) { _fun84159_ip = 115; continue _fun84159 }
 101:
                        mike = _closure2_slot13;
                        entity = mike.dispose;
                        entity = entity.bind(mike)();
 115:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            };
            foxtrot = backup.bind(report)(foxtrot);
            backup = kilo.reduce;
            foxtrot = _closure1_slot6;
            yankee = kilo[yankee];
            foxtrot = foxtrot.bind(report)(yankee);
            yankee = function(argFoo, argBar) {
                _fun84160: for(var _fun84160_ip = 0; ; ) switch(_fun84160_ip) {
 0:
                    entity = argFoo;
                    tango = _closure1_slot6;
                    zulu = undefined;
                    mike = argBar;
                    mike = tango.bind(zulu)(mike);
                    if(!(mike > entity)) { _fun84160_ip = 27; continue _fun84160 }
 24:
                    entity = mike;
 27:
                    return entity;
                }
            };
            yankee = backup.bind(kilo)(yankee, foxtrot);
            _closure2_slot14 = yankee;
            if(!offset) { _fun84155_ip = 460; continue _fun84155 }
 454:
            yankee = null;
            offset = yankee != romeo;
 460:
            if(!offset) { _fun84155_ip = 501; continue _fun84155 }
 463:
            options['current'] = verify;
            options = oscar.stop;
            options = options.bind(oscar)();
            verify = tango.current;
            options = verify.forEach;
            tango = function(argFoo, argBar) {
                zulu = argBar;
                oscar = _closure1_slot7;
                mike = _closure2_slot0;
                verify = mike[zulu];
                mike = _closure2_slot9;
                mike = mike.current;
                options = mike[zulu];
                mike = _closure2_slot14;
                entity = _closure2_slot6;
                golf = mike * entity;
                entity = undefined;
                offset = argFoo;
                yankee = undefined;
                mike = yankee[oscar](offset, verify, options, golf, oscar);
                return entity;
            };
            tango = options.bind(verify)(tango);
 501:
            tango = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[golf];
            report = tango.bind(report)(entity);
            tango = report.useValueEffect;
            entity = function() {
                _fun84162: for(var _fun84162_ip = 0; ; ) switch(_fun84162_ip) {
 0:
                    zulu = _closure2_slot12;
                    zulu = zulu.current;
                    tango = false;
                    if(!(tango === zulu)) { _fun84162_ip = 39; continue _fun84162 }
 20:
                    report = _closure2_slot7;
                    zulu = report.stop;
                    zulu = zulu.bind(report)();
                    _fun84162_ip = 413; continue _fun84162;
 39:
                    zulu = _closure2_slot8;
                    report = zulu.current;
                    zulu = -1;
                    if(!(zulu === report)) { _fun84162_ip = 77; continue _fun84162 }
 58:
                    report = _closure2_slot8;
                    zulu = _closure2_slot7;
                    zulu = zulu.current;
                    report['current'] = zulu;
 77:
                    zulu = _closure2_slot7;
                    report = zulu.current;
                    zulu = _closure2_slot8;
                    zulu = zulu.current;
                    report = report - zulu;
                    var _closure3_slot0 = report;
                    zulu = _closure2_slot10;
                    zulu = zulu.current;
                    if(!(tango === zulu)) { _fun84162_ip = 127; continue _fun84162 }
 116:
                    zulu = _closure2_slot2;
                    if(!(!(report < zulu))) { _fun84162_ip = 413; continue _fun84162 }
 127:
                    oscar = _closure2_slot14;
                    zulu = _closure2_slot10;
                    golf = zulu.current;
                    tango = 0;
                    if(golf) { _fun84162_ip = 149; continue _fun84162 }
 145:
                    tango = _closure2_slot2;
 149:
                    tango = oscar + tango;
                    if(!(!(report > tango))) { _fun84162_ip = 210; continue _fun84162 }
 157:
                    tango = _closure2_slot10;
                    tango = tango.current;
                    zulu = 0;
                    if(tango) { _fun84162_ip = 175; continue _fun84162 }
 171:
                    zulu = _closure2_slot2;
 175:
                    var _closure3_slot1 = zulu;
                    zulu = _closure2_slot13;
                    report = zulu.current;
                    tango = report.forEach;
                    zulu = function(argFoo, argBar) {
                        mike = argBar;
                        oscar = _closure1_slot7;
                        zulu = _closure2_slot0;
                        verify = zulu[mike];
                        entity = _closure2_slot9;
                        entity = entity.current;
                        options = entity[mike];
                        mike = _closure3_slot0;
                        entity = _closure3_slot1;
                        golf = mike - entity;
                        entity = undefined;
                        offset = argFoo;
                        yankee = undefined;
                        mike = yankee[oscar](offset, verify, options, golf, oscar);
                        return entity;
                    };
                    zulu = tango.bind(report)(zulu);
                    _fun84162_ip = 413; continue _fun84162;
 210:
                    zulu = _closure2_slot3;
                    if(zulu) { _fun84162_ip = 278; continue _fun84162 }
 217:
                    zulu = _closure2_slot13;
                    report = zulu.current;
                    tango = report.forEach;
                    zulu = function(argFoo, argBar) {
                        zulu = argBar;
                        oscar = _closure1_slot7;
                        mike = _closure2_slot0;
                        verify = mike[zulu];
                        mike = _closure2_slot9;
                        mike = mike.current;
                        options = mike[zulu];
                        golf = _closure2_slot14;
                        entity = undefined;
                        offset = argFoo;
                        yankee = undefined;
                        mike = yankee[oscar](offset, verify, options, golf, oscar);
                        return entity;
                    };
                    zulu = tango.bind(report)(zulu);
                    tango = _closure2_slot5;
                    zulu = null;
                    if(!(zulu != tango)) { _fun84162_ip = 263; continue _fun84162 }
 253:
                    tango = _closure2_slot5;
                    zulu = undefined;
                    zulu = tango.bind(zulu)();
 263:
                    tango = _closure2_slot15;
                    zulu = undefined;
                    zulu = tango.bind(zulu)();
                    _fun84162_ip = 413; continue _fun84162;
 278:
                    tango = _closure2_slot8;
                    zulu = _closure2_slot7;
                    zulu = zulu.current;
                    tango['current'] = zulu;
                    tango = _closure2_slot0;
                    zulu = tango.forEach;
                    mike = function(argFoo, argBar) {
                        tango = _closure1_slot5;
                        entity = _closure2_slot9;
                        mike = entity.current;
                        entity = argBar;
                        zulu = mike[entity];
                        entity = undefined;
                        mike = argFoo;
                        mike = tango.bind(entity)(mike, zulu);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    zulu = _closure2_slot10;
                    mike = true;
                    zulu['current'] = mike;
                    zulu = _closure2_slot11;
                    tango = zulu.current;
                    mike = 1;
                    mike = tango + mike;
                    zulu['current'] = mike;
                    mike = _closure2_slot4;
                    zulu = null;
                    mike = zulu != mike;
                    if(!mike) { _fun84162_ip = 382; continue _fun84162 }
 365:
                    tango = _closure2_slot11;
                    report = tango.current;
                    tango = _closure2_slot4;
                    mike = report >= tango;
 382:
                    if(!mike) { _fun84162_ip = 413; continue _fun84162 }
 385:
                    mike = _closure2_slot5;
                    if(!(zulu != mike)) { _fun84162_ip = 403; continue _fun84162 }
 393:
                    zulu = _closure2_slot5;
                    mike = undefined;
                    mike = zulu.bind(mike)();
 403:
                    mike = _closure2_slot15;
                    entity = undefined;
                    entity = mike.bind(entity)();
 413:
                    entity = undefined;
                    return entity;
                }
            };
            entity = tango.bind(report)(oscar, entity);
            entity = new Array(2);
            zulu = function() {
                zulu = _closure2_slot12;
                mike = true;
                zulu['current'] = mike;
                zulu = _closure2_slot10;
                mike = false;
                zulu['current'] = mike;
                zulu = _closure2_slot8;
                mike = -1;
                zulu['current'] = mike;
                zulu = _closure2_slot9;
                report = _closure2_slot0;
                tango = report.map;
                mike = function(argFoo) {
                    zulu = _closure1_slot4;
                    mike = undefined;
                    entity = argFoo;
                    entity = zulu.bind(mike)(entity);
                    return entity;
                };
                mike = tango.bind(report)(mike);
                zulu['current'] = mike;
                zulu = _closure2_slot13;
                mike = _closure2_slot1;
                zulu['current'] = mike;
                mike = _closure2_slot7;
                entity = mike.start;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            entity[0] = zulu;
            entity[1] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();