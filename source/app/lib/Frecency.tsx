// app/lib/Frecency.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    tango = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = tango;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    oscar = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    tango = function(argFoo, argBar, argBaz) { // Original name: DEFAULT_FRECENCY
        entity = global;
        zulu = entity.Math;
        mike = zulu.ceil;
        entity = argBaz;
        tango = entity.numOfRecentUses;
        entity = argBar;
        tango = entity / tango;
        entity = argFoo;
        entity = entity * tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot4 = tango;
    mike = {};
    mike['original'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: safe
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argBaz;
            zulu = entity.maxTotalUse;
            mike = null;
            if(!(mike != zulu)) { _fun00002_ip = 98; continue _fun00001 }
 15:
            mike = entity.maxTotalUse;
            entity = argFoo;
            mike = entity / mike;
            entity = 0.2;
            report = mike * entity;
            entity = argBar;
            tango = 1000;
            oscar = entity / tango;
            entity = global;
            zulu = entity.Math;
            mike = zulu.trunc;
            entity = 0.8;
            entity = oscar * entity;
            entity = report + entity;
            entity = tango * entity;
            entity = mike.bind(zulu)(entity);
            return entity;
 98:
            entity = 0;
            return entity;
        }
    };
    mike['safe'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: day_recency
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argBaz;
            zulu = entity.maxTotalUse;
            mike = null;
            if(!(mike != zulu)) { _fun00004_ip = 98; continue _fun00003 }
 15:
            mike = entity.maxTotalUse;
            entity = argFoo;
            mike = entity / mike;
            entity = 0.05;
            report = mike * entity;
            entity = argBar;
            tango = 1000;
            oscar = entity / tango;
            entity = global;
            zulu = entity.Math;
            mike = zulu.trunc;
            entity = 0.95;
            entity = oscar * entity;
            entity = report + entity;
            entity = tango * entity;
            entity = mike.bind(zulu)(entity);
            return entity;
 98:
            entity = 0;
            return entity;
        }
    };
    mike['day_recency'] = tango;
    tango = function() {
        tango = _closure1_slot3;
        zulu = function(argFoo) { // Original name: Frecency
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tango = argFoo;
                zulu = this;
                verify = tango.computeBonus;
                options = tango.computeWeight;
                golf = tango.computeFrecency;
                entity = undefined;
                if(!(golf === entity)) { _fun00006_ip = 37; continue _fun00005 }
 30:
                golf = _closure1_slot4;
 37:
                report = tango.lookupKey;
                oscar = tango.afterCompute;
                mike = tango.numFrequentlyItems;
                if(!(mike === entity)) { _fun00006_ip = 62; continue _fun00005 }
 59:
                mike = 32;
 62:
                tango = tango.maxSamples;
                if(!(tango === entity)) { _fun00006_ip = 75; continue _fun00005 }
 72:
                tango = 10;
 75:
                yankee = _closure1_slot2;
                offset = _closure2_slot0;
                offset = yankee.bind(entity)(zulu, offset);
                zulu['computeBonus'] = verify;
                zulu['computeWeight'] = options;
                zulu['computeFrecency'] = golf;
                zulu['afterCompute'] = oscar;
                zulu['lookupKey'] = report;
                report = {};
                zulu['usageHistory'] = report;
                report = new Array(0);
                zulu['frequently'] = report;
                zulu['maxSamples'] = tango;
                zulu['numFrequentlyItems'] = mike;
                mike = false;
                zulu['calculateMaxTotalUse'] = mike;
                zulu['dirty'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'overwriteHistory';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                verify = argFoo;
                report = argBar;
                zulu = this;
                var _closure3_slot0 = zulu;
                oscar = _closure1_slot0;
                tango = _closure1_slot1;
                entity = 2;
                tango = tango[entity];
                entity = undefined;
                options = oscar.bind(entity)(tango);
                golf = options.mapValues;
                tango = null;
                if(!(tango == verify)) { _fun00008_ip = 54; continue _fun00007 }
 52:
                verify = {};
 54:
                oscar = function(argFoo) {
                    entity = {};
                    tango = argFoo;
                    report = entity;
                    mike = copyDataProperties(report, tango);
                    zulu = -1;
                    mike = 'frecency';
                    entity[mike] = zulu;
                    return entity;
                };
                oscar = golf.bind(options)(verify, oscar);
                zulu['usageHistory'] = oscar;
                if(!(tango != report)) { _fun00008_ip = 90; continue _fun00007 }
 75:
                tango = report.forEach;
                mike = function(argFoo) {
                    entity = argFoo;
                    tango = entity.key;
                    zulu = entity.timestamp;
                    mike = _closure3_slot0;
                    entity = mike.track;
                    entity = entity.bind(mike)(tango, zulu);
                    return entity;
                };
                mike = tango.bind(report)(mike);
 90:
                mike = zulu.markDirty;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(10);
        mike[0] = entity;
        entity = {};
        oscar = 'markDirty';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = true;
            entity = this;
            entity['dirty'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'isDirty';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.dirty;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'track';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = argFoo;
                oscar = argBar;
                mike = this;
                golf = null;
                if(!(golf != tango)) { _fun00010_ip = 312; continue _fun00009 }
 18:
                report = global;
                entity = report.Object;
                entity = entity.prototype;
                options = entity.hasOwnProperty;
                zulu = options.call;
                entity = mike.usageHistory;
                entity = zulu.bind(options)(entity, tango);
                verify = undefined;
                if(!entity) { _fun00010_ip = 69; continue _fun00009 }
 59:
                entity = mike.usageHistory;
                verify = entity[tango];
 69:
                if(!(golf != verify)) { _fun00010_ip = 242; continue _fun00009 }
 76:
                entity = -1;
                verify['frecency'] = entity;
                zulu = verify.totalUses;
                entity = 1;
                entity = zulu + entity;
                verify['totalUses'] = entity;
                if(!(golf != oscar)) { _fun00010_ip = 145; continue _fun00009 }
 111:
                zulu = verify.recentUses;
                entity = zulu.push;
                entity = entity.bind(zulu)(oscar);
                zulu = verify.recentUses;
                entity = zulu.sort;
                entity = entity.bind(zulu)();
                _fun00010_ip = 176; continue _fun00009;
 145:
                options = verify.recentUses;
                zulu = options.push;
                offset = report.Date;
                entity = offset.now;
                entity = entity.bind(offset)();
                entity = zulu.bind(options)(entity);
 176:
                entity = verify.recentUses;
                options = entity.length;
                entity = mike.maxSamples;
                zulu = verify;
                if(!(options > entity)) { _fun00010_ip = 292; continue _fun00009 }
 200:
                options = verify.recentUses;
                entity = options.shift;
                entity = entity.bind(options)();
                entity = verify.recentUses;
                options = entity.length;
                entity = mike.maxSamples;
                zulu = verify;
                if(options > entity) { _fun00010_ip = 200; continue _fun00009 }
 240:
                _fun00010_ip = 292; continue _fun00009;
 242:
                entity = {'totalUses': 1, 'recentUses': null, 'frecency': 4294967295, 'score': 0};
                if(!(golf == oscar)) { _fun00010_ip = 275; continue _fun00009 }
 260:
                golf = report.Date;
                report = golf.now;
                oscar = report.bind(golf)();
 275:
                report = new Array(1);
                report[0] = oscar;
                entity['recentUses'] = report;
                zulu = entity;
 292:
                entity = mike.usageHistory;
                entity[tango] = zulu;
                entity = mike.markDirty;
                entity = entity.bind(mike)();
 312:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'getEntry';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tango = argFoo;
                zulu = this;
                entity = null;
                mike = entity == tango;
                if(mike) { _fun00012_ip = 88; continue _fun00011 }
 15:
                mike = zulu.dirty;
                if(!mike) { _fun00012_ip = 34; continue _fun00011 }
 24:
                mike = zulu.compute;
                mike = mike.bind(zulu)();
 34:
                mike = global;
                mike = mike.Object;
                mike = mike.prototype;
                oscar = mike.hasOwnProperty;
                report = oscar.call;
                mike = zulu.usageHistory;
                report = report.bind(oscar)(mike, tango);
                mike = undefined;
                if(!report) { _fun00012_ip = 85; continue _fun00011 }
 75:
                zulu = zulu.usageHistory;
                mike = zulu[tango];
 85:
                entity = mike;
 88:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'getScore';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zulu = this;
                mike = zulu.getEntry;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun00014_ip = 32; continue _fun00013 }
 26:
                entity = mike.score;
 32:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'getFrecency';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zulu = this;
                mike = zulu.getEntry;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun00016_ip = 32; continue _fun00015 }
 26:
                entity = mike.frecency;
 32:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'replaceEntryComputeFunctions';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            zulu = this;
            entity = argFoo;
            zulu['computeWeight'] = entity;
            entity = argBar;
            zulu['computeFrecency'] = entity;
            entity = argBaz;
            zulu['calculateMaxTotalUse'] = entity;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            oscar = tango.bind(entity)(mike);
            report = oscar.mapValues;
            tango = zulu.usageHistory;
            mike = function(argFoo) {
                entity = {};
                tango = argFoo;
                report = entity;
                mike = copyDataProperties(report, tango);
                zulu = -1;
                mike = 'frecency';
                entity[mike] = zulu;
                return entity;
            };
            mike = report.bind(oscar)(tango, mike);
            zulu['usageHistory'] = mike;
            mike = zulu.markDirty;
            mike = mike.bind(zulu)();
            return entity;
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'compute';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = this;
                var _closure3_slot0 = report;
                oscar = _closure1_slot0;
                tango = _closure1_slot1;
                entity = 3;
                tango = tango[entity];
                entity = undefined;
                tango = oscar.bind(entity)(tango);
                tango = tango.bind(entity)();
                var _closure3_slot1 = tango;
                oscar = report.calculateMaxTotalUse;
                tango = null;
                if(!oscar) { _fun00018_ip = 114; continue _fun00017 }
 53:
                golf = _closure1_slot0;
                options = _closure1_slot1;
                oscar = 2;
                oscar = options[oscar];
                verify = golf.bind(entity)(oscar);
                options = verify.maxBy;
                oscar = global;
                offset = oscar.Object;
                golf = offset.values;
                oscar = report.usageHistory;
                golf = golf.bind(offset)(oscar);
                oscar = function(argFoo) {
                    entity = argFoo;
                    entity = entity.totalUses;
                    return entity;
                };
                tango = options.bind(verify)(golf, oscar);
 114:
                var _closure3_slot2 = tango;
                tango = _closure1_slot0;
                oscar = _closure1_slot1;
                zulu = 2;
                golf = oscar[zulu];
                offset = tango.bind(entity)(golf);
                verify = offset.forEach;
                options = report.usageHistory;
                golf = function(argFoo, argBar) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        zulu = argFoo;
                        mike = argBar;
                        var _closure4_slot0 = zulu;
                        options = zulu.totalUses;
                        offset = zulu.recentUses;
                        report = zulu.frecency;
                        entity = -1;
                        if(!(entity === report)) { _fun00020_ip = 247; continue _fun00019 }
 43:
                        oscar = _closure3_slot0;
                        report = oscar.computeBonus;
                        oscar = report.bind(oscar)(mike);
                        report = 100;
                        report = oscar / report;
                        var _closure4_slot1 = report;
                        report = 0;
                        zulu['score'] = report;
                        golf = _closure1_slot0;
                        verify = _closure1_slot1;
                        oscar = 2;
                        oscar = verify[oscar];
                        verify = undefined;
                        golf = golf.bind(verify)(oscar);
                        oscar = golf.forEach;
                        tango = function(argFoo, argBar) {
                            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                                mike = _closure3_slot0;
                                zulu = mike.maxSamples;
                                mike = argBar;
                                if(!(!(mike >= zulu))) { _fun00022_ip = 121; continue _fun00021 }
 20:
                                tango = _closure3_slot0;
                                zulu = tango.computeWeight;
                                golf = _closure3_slot1;
                                oscar = golf.diff;
                                report = _closure1_slot0;
                                mike = _closure1_slot1;
                                entity = 3;
                                mike = mike[entity];
                                entity = undefined;
                                report = report.bind(entity)(mike);
                                mike = argFoo;
                                report = report.bind(entity)(mike);
                                mike = 'days';
                                mike = oscar.bind(golf)(report, mike);
                                report = zulu.bind(tango)(mike);
                                zulu = _closure4_slot0;
                                tango = zulu.score;
                                mike = _closure4_slot1;
                                mike = mike * report;
                                mike = tango + mike;
                                zulu['score'] = mike;
                                return entity;
 121:
                                entity = false;
                                return entity;
                            }
                        };
                        tango = oscar.bind(golf)(offset, tango);
                        tango = zulu.score;
                        if(!(!(tango > report))) { _fun00020_ip = 147; continue _fun00019 }
 131:
                        tango = _closure3_slot0;
                        tango = tango.usageHistory;
                        tango = delete tango[mike];
                        _fun00020_ip = 247; continue _fun00019;
 147:
                        tango = zulu.recentUses;
                        tango = tango.length;
                        if(!(tango > report)) { _fun00020_ip = 233; continue _fun00019 }
 162:
                        golf = _closure3_slot0;
                        oscar = golf.computeFrecency;
                        report = zulu.score;
                        tango = {};
                        offset = offset.length;
                        tango['numOfRecentUses'] = offset;
                        yankee = _closure3_slot2;
                        offset = null;
                        offset = offset == yankee;
                        verify = undefined;
                        if(offset) { _fun00020_ip = 215; continue _fun00019 }
 205:
                        offset = _closure3_slot2;
                        verify = offset.totalUses;
 215:
                        tango['maxTotalUse'] = verify;
                        tango = oscar.bind(golf)(options, report, tango);
                        zulu['frecency'] = tango;
 233:
                        entity = _closure3_slot0;
                        entity = entity.usageHistory;
                        entity[mike] = zulu;
 247:
                        entity = undefined;
                        return entity;
                    }
                };
                golf = verify.bind(offset)(options, golf);
                zulu = oscar[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = report.usageHistory;
                oscar = tango.bind(entity)(zulu);
                tango = oscar.map;
                zulu = function(argFoo, argBar) {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        zulu = _closure3_slot0;
                        mike = zulu.lookupKey;
                        entity = argBar;
                        zulu = mike.bind(zulu)(entity);
                        entity = null;
                        mike = entity == zulu;
                        if(mike) { _fun00024_ip = 54; continue _fun00023 }
 30:
                        mike = new Array(2);
                        mike[0] = zulu;
                        zulu = argFoo;
                        zulu = zulu.frecency;
                        mike[1] = zulu;
                        entity = mike;
 54:
                        return entity;
                    }
                };
                oscar = tango.bind(oscar)(zulu);
                tango = oscar.filter;
                zulu = function(argFoo) {
                    mike = null;
                    entity = argFoo;
                    entity = mike !== entity;
                    return entity;
                };
                oscar = tango.bind(oscar)(zulu);
                tango = oscar.sortBy;
                zulu = function(argFoo) {
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        tango = argFoo;
                        mike = tango[Symbol.iterator];
                        tango = mike().next;
                        entity = tango().value;
                        entity = mike;
                        oscar = undefined;
                        zulu = entity === oscar;
                        entity = undefined;
                        if(zulu) { _fun00026_ip = 49; continue _fun00025 }
 24:
                        report = tango().value;
                        tango = mike;
                        tango = tango === oscar;
                        entity = undefined;
                        zulu = tango;
                        if(tango) { _fun00026_ip = 49; continue _fun00025 }
 43:
                        entity = report;
                        zulu = tango;
 49:
                        if(zulu) { _fun00026_ip = 55; continue _fun00025 }
 52:
                        mike.return();
 55:
                        entity = -entity;
                        return entity;
                    }
                };
                tango = tango.bind(oscar)(zulu);
                zulu = tango.map;
                mike = function(argFoo) {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        entity = argFoo;
                        mike = entity[Symbol.iterator];
                        entity = mike().next;
                        tango = entity().value;
                        zulu = mike;
                        entity = undefined;
                        zulu = zulu === entity;
                        if(zulu) { _fun00028_ip = 25; continue _fun00027 }
 22:
                        entity = tango;
 25:
                        if(zulu) { _fun00028_ip = 31; continue _fun00027 }
 28:
                        mike.return();
 31:
                        return entity;
                    }
                };
                tango = zulu.bind(tango)(mike);
                zulu = tango.take;
                mike = report.numFrequentlyItems;
                zulu = zulu.bind(tango)(mike);
                mike = zulu.value;
                mike = mike.bind(zulu)();
                report['frequently'] = mike;
                mike = false;
                report['dirty'] = mike;
                tango = report.afterCompute;
                zulu = report.usageHistory;
                mike = report._frequently;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'frequently';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = this;
                mike = entity.dirty;
                if(!mike) { _fun00030_ip = 22; continue _fun00029 }
 12:
                mike = entity.compute;
                mike = mike.bind(entity)();
 22:
                entity = entity._frequently;
                return entity;
            }
        };
        entity['get'] = oscar;
        report = function(argFoo) { // Original name: set
            mike = argFoo;
            entity = this;
            entity['_frequently'] = mike;
            entity = undefined;
            return entity;
        };
        entity['set'] = report;
        mike[9] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    oscar = 4;
    golf = golf[oscar];
    oscar = argBar;
    options = oscar.bind(entity)(golf);
    golf = options.fileFinishedImporting;
    oscar = 'lib/Frecency.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = tango;
    tango = {};
    oscar = function(argFoo) { // Original name: original
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            zulu = argFoo;
            entity = 3;
            mike = zulu <= entity;
            entity = 100;
            if(mike) { _fun00032_ip = 71; continue _fun00031 }
 16:
            mike = 15;
            mike = zulu <= mike;
            entity = 70;
            if(mike) { _fun00032_ip = 71; continue _fun00031 }
 29:
            tango = 30;
            mike = zulu <= tango;
            entity = 50;
            if(mike) { _fun00032_ip = 71; continue _fun00031 }
 42:
            mike = 45;
            mike = zulu <= mike;
            entity = tango;
            if(mike) { _fun00032_ip = 71; continue _fun00031 }
 55:
            mike = 80;
            mike = zulu <= mike;
            entity = 1;
            if(!mike) { _fun00032_ip = 71; continue _fun00031 }
 68:
            entity = 10;
 71:
            return entity;
        }
    };
    tango['original'] = oscar;
    oscar = function(argFoo) { // Original name: safe
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            zulu = argFoo;
            entity = 3;
            mike = zulu <= entity;
            entity = 100;
            if(mike) { _fun00034_ip = 71; continue _fun00033 }
 16:
            mike = 15;
            mike = zulu <= mike;
            entity = 70;
            if(mike) { _fun00034_ip = 71; continue _fun00033 }
 29:
            tango = 30;
            mike = zulu <= tango;
            entity = 50;
            if(mike) { _fun00034_ip = 71; continue _fun00033 }
 42:
            mike = 45;
            mike = zulu <= mike;
            entity = tango;
            if(mike) { _fun00034_ip = 71; continue _fun00033 }
 55:
            mike = 80;
            mike = zulu <= mike;
            entity = 1;
            if(!mike) { _fun00034_ip = 71; continue _fun00033 }
 68:
            entity = 10;
 71:
            return entity;
        }
    };
    tango['safe'] = oscar;
    report = function(argFoo) { // Original name: day_recency
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            report = argFoo;
            tango = 1;
            mike = report <= tango;
            entity = 100;
            if(mike) { _fun00036_ip = 110; continue _fun00035 }
 16:
            mike = 2;
            zulu = report <= mike;
            entity = 70;
            if(zulu) { _fun00036_ip = 110; continue _fun00035 }
 29:
            zulu = 3;
            zulu = report <= zulu;
            entity = 50;
            if(zulu) { _fun00036_ip = 110; continue _fun00035 }
 42:
            zulu = 7;
            zulu = report <= zulu;
            entity = 20;
            if(zulu) { _fun00036_ip = 110; continue _fun00035 }
 55:
            oscar = 15;
            zulu = report <= oscar;
            entity = oscar;
            if(zulu) { _fun00036_ip = 110; continue _fun00035 }
 68:
            zulu = 30;
            zulu = report <= zulu;
            entity = 10;
            if(zulu) { _fun00036_ip = 110; continue _fun00035 }
 81:
            zulu = 45;
            zulu = report <= zulu;
            entity = 5;
            if(zulu) { _fun00036_ip = 110; continue _fun00035 }
 94:
            zulu = 80;
            zulu = report <= zulu;
            entity = tango;
            if(!zulu) { _fun00036_ip = 110; continue _fun00035 }
 107:
            entity = mike;
 110:
            return entity;
        }
    };
    tango['day_recency'] = report;
    zulu['weightFunctions'] = tango;
    zulu['frecencyAlgorithms'] = mike;
    return entity;
})();