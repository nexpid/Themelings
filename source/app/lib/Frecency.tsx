// app/lib/Frecency.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    tangon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = tangon;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    oscard = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    tangon = function(argFoo, argBar, argBaz) { // Original name: DEFAULT_FRECENCY
        entity = global;
        zuuluu = entity.Math;
        michal = zuuluu.ceil;
        entity = argBaz;
        tangon = entity.numOfRecentUses;
        entity = argBar;
        tangon = entity / tangon;
        entity = argFoo;
        entity = entity * tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot4 = tangon;
    michal = {};
    michal['original'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: safe
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argBaz;
            zuuluu = entity.maxTotalUse;
            michal = null;
            if(!(michal != zuuluu)) { _fun00002_ip = 98; continue _fun00001 }
 15:
            michal = entity.maxTotalUse;
            entity = argFoo;
            michal = entity / michal;
            entity = 0.2;
            report = michal * entity;
            entity = argBar;
            tangon = 1000;
            oscard = entity / tangon;
            entity = global;
            zuuluu = entity.Math;
            michal = zuuluu.trunc;
            entity = 0.8;
            entity = oscard * entity;
            entity = report + entity;
            entity = tangon * entity;
            entity = michal.bind(zuuluu)(entity);
            return entity;
 98:
            entity = 0;
            return entity;
        }
    };
    michal['safe'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: day_recency
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argBaz;
            zuuluu = entity.maxTotalUse;
            michal = null;
            if(!(michal != zuuluu)) { _fun00004_ip = 98; continue _fun00003 }
 15:
            michal = entity.maxTotalUse;
            entity = argFoo;
            michal = entity / michal;
            entity = 0.05;
            report = michal * entity;
            entity = argBar;
            tangon = 1000;
            oscard = entity / tangon;
            entity = global;
            zuuluu = entity.Math;
            michal = zuuluu.trunc;
            entity = 0.95;
            entity = oscard * entity;
            entity = report + entity;
            entity = tangon * entity;
            entity = michal.bind(zuuluu)(entity);
            return entity;
 98:
            entity = 0;
            return entity;
        }
    };
    michal['day_recency'] = tangon;
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = function(argFoo) { // Original name: Frecency
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = argFoo;
                zuuluu = this;
                verify = tangon.computeBonus;
                option = tangon.computeWeight;
                golfie = tangon.computeFrecency;
                entity = undefined;
                if(!(golfie === entity)) { _fun00006_ip = 37; continue _fun00005 }
 30:
                golfie = _closure1_slot4;
 37:
                report = tangon.lookupKey;
                oscard = tangon.afterCompute;
                michal = tangon.numFrequentlyItems;
                if(!(michal === entity)) { _fun00006_ip = 62; continue _fun00005 }
 59:
                michal = 32;
 62:
                tangon = tangon.maxSamples;
                if(!(tangon === entity)) { _fun00006_ip = 75; continue _fun00005 }
 72:
                tangon = 10;
 75:
                yankee = _closure1_slot2;
                offset = _closure2_slot0;
                offset = yankee.bind(entity)(zuuluu, offset);
                zuuluu['computeBonus'] = verify;
                zuuluu['computeWeight'] = option;
                zuuluu['computeFrecency'] = golfie;
                zuuluu['afterCompute'] = oscard;
                zuuluu['lookupKey'] = report;
                report = {};
                zuuluu['usageHistory'] = report;
                report = new Array(0);
                zuuluu['frequently'] = report;
                zuuluu['maxSamples'] = tangon;
                zuuluu['numFrequentlyItems'] = michal;
                michal = false;
                zuuluu['calculateMaxTotalUse'] = michal;
                zuuluu['dirty'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'overwriteHistory';
        entity['key'] = michal;
        michal = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                verify = argFoo;
                report = argBar;
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                oscard = _closure1_slot0;
                tangon = _closure1_slot1;
                entity = 2;
                tangon = tangon[entity];
                entity = undefined;
                option = oscard.bind(entity)(tangon);
                golfie = option.mapValues;
                tangon = null;
                if(!(tangon == verify)) { _fun00008_ip = 54; continue _fun00007 }
 52:
                verify = {};
 54:
                oscard = function(argFoo) {
                    entity = {};
                    tangon = argFoo;
                    report = entity;
                    michal = copyDataProperties(report, tangon);
                    zuuluu = -1;
                    michal = 'frecency';
                    entity[michal] = zuuluu;
                    return entity;
                };
                oscard = golfie.bind(option)(verify, oscard);
                zuuluu['usageHistory'] = oscard;
                if(!(tangon != report)) { _fun00008_ip = 90; continue _fun00007 }
 75:
                tangon = report.forEach;
                michal = function(argFoo) {
                    entity = argFoo;
                    tangon = entity.key;
                    zuuluu = entity.timestamp;
                    michal = _closure3_slot0;
                    entity = michal.track;
                    entity = entity.bind(michal)(tangon, zuuluu);
                    return entity;
                };
                michal = tangon.bind(report)(michal);
 90:
                michal = zuuluu.markDirty;
                michal = michal.bind(zuuluu)();
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(10);
        michal[0] = entity;
        entity = {};
        oscard = 'markDirty';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = true;
            entity = this;
            entity['dirty'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'isDirty';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.dirty;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'track';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                oscard = argBar;
                michal = this;
                golfie = null;
                if(!(golfie != tangon)) { _fun00010_ip = 302; continue _fun00009 }
 18:
                report = global;
                option = report.Object;
                zuuluu = option.hasOwn;
                entity = michal.usageHistory;
                entity = zuuluu.bind(option)(entity, tangon);
                verify = undefined;
                if(!entity) { _fun00010_ip = 59; continue _fun00009 }
 49:
                entity = michal.usageHistory;
                verify = entity[tangon];
 59:
                if(!(golfie != verify)) { _fun00010_ip = 232; continue _fun00009 }
 66:
                entity = -1;
                verify['frecency'] = entity;
                zuuluu = verify.totalUses;
                entity = 1;
                entity = zuuluu + entity;
                verify['totalUses'] = entity;
                if(!(golfie != oscard)) { _fun00010_ip = 135; continue _fun00009 }
 101:
                zuuluu = verify.recentUses;
                entity = zuuluu.push;
                entity = entity.bind(zuuluu)(oscard);
                zuuluu = verify.recentUses;
                entity = zuuluu.sort;
                entity = entity.bind(zuuluu)();
                _fun00010_ip = 166; continue _fun00009;
 135:
                option = verify.recentUses;
                zuuluu = option.push;
                offset = report.Date;
                entity = offset.now;
                entity = entity.bind(offset)();
                entity = zuuluu.bind(option)(entity);
 166:
                entity = verify.recentUses;
                option = entity.length;
                entity = michal.maxSamples;
                zuuluu = verify;
                if(!(option > entity)) { _fun00010_ip = 282; continue _fun00009 }
 190:
                option = verify.recentUses;
                entity = option.shift;
                entity = entity.bind(option)();
                entity = verify.recentUses;
                option = entity.length;
                entity = michal.maxSamples;
                zuuluu = verify;
                if(option > entity) { _fun00010_ip = 190; continue _fun00009 }
 230:
                _fun00010_ip = 282; continue _fun00009;
 232:
                entity = {'totalUses': 1, 'recentUses': null, 'frecency': 4294967295, 'score': 0};
                if(!(golfie == oscard)) { _fun00010_ip = 265; continue _fun00009 }
 250:
                golfie = report.Date;
                report = golfie.now;
                oscard = report.bind(golfie)();
 265:
                report = new Array(1);
                report[0] = oscard;
                entity['recentUses'] = report;
                zuuluu = entity;
 282:
                entity = michal.usageHistory;
                entity[tangon] = zuuluu;
                entity = michal.markDirty;
                entity = entity.bind(michal)();
 302:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'getEntry';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = argFoo;
                zuuluu = this;
                entity = null;
                michal = entity == tangon;
                if(michal) { _fun00012_ip = 88; continue _fun00011 }
 15:
                michal = zuuluu.dirty;
                if(!michal) { _fun00012_ip = 34; continue _fun00011 }
 24:
                michal = zuuluu.compute;
                michal = michal.bind(zuuluu)();
 34:
                michal = global;
                michal = michal.Object;
                michal = michal.prototype;
                oscard = michal.hasOwnProperty;
                report = oscard.call;
                michal = zuuluu.usageHistory;
                report = report.bind(oscard)(michal, tangon);
                michal = undefined;
                if(!report) { _fun00012_ip = 85; continue _fun00011 }
 75:
                zuuluu = zuuluu.usageHistory;
                michal = zuuluu[tangon];
 85:
                entity = michal;
 88:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'getScore';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.getEntry;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                zuuluu = entity != michal;
                if(!zuuluu) { _fun00014_ip = 32; continue _fun00013 }
 26:
                entity = michal.score;
 32:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'getFrecency';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.getEntry;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                zuuluu = entity != michal;
                if(!zuuluu) { _fun00016_ip = 32; continue _fun00015 }
 26:
                entity = michal.frecency;
 32:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'replaceEntryComputeFunctions';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            zuuluu = this;
            entity = argFoo;
            zuuluu['computeWeight'] = entity;
            entity = argBar;
            zuuluu['computeFrecency'] = entity;
            entity = argBaz;
            zuuluu['calculateMaxTotalUse'] = entity;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            oscard = tangon.bind(entity)(michal);
            report = oscard.mapValues;
            tangon = zuuluu.usageHistory;
            michal = function(argFoo) {
                entity = {};
                tangon = argFoo;
                report = entity;
                michal = copyDataProperties(report, tangon);
                zuuluu = -1;
                michal = 'frecency';
                entity[michal] = zuuluu;
                return entity;
            };
            michal = report.bind(oscard)(tangon, michal);
            zuuluu['usageHistory'] = michal;
            michal = zuuluu.markDirty;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'compute';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = this;
                var _closure3_slot0 = report;
                oscard = _closure1_slot0;
                tangon = _closure1_slot1;
                entity = 3;
                tangon = tangon[entity];
                entity = undefined;
                tangon = oscard.bind(entity)(tangon);
                tangon = tangon.bind(entity)();
                var _closure3_slot1 = tangon;
                oscard = report.calculateMaxTotalUse;
                tangon = null;
                if(!oscard) { _fun00018_ip = 114; continue _fun00017 }
 53:
                golfie = _closure1_slot0;
                option = _closure1_slot1;
                oscard = 2;
                oscard = option[oscard];
                verify = golfie.bind(entity)(oscard);
                option = verify.maxBy;
                oscard = global;
                offset = oscard.Object;
                golfie = offset.values;
                oscard = report.usageHistory;
                golfie = golfie.bind(offset)(oscard);
                oscard = function(argFoo) {
                    entity = argFoo;
                    entity = entity.totalUses;
                    return entity;
                };
                tangon = option.bind(verify)(golfie, oscard);
 114:
                var _closure3_slot2 = tangon;
                tangon = _closure1_slot0;
                oscard = _closure1_slot1;
                zuuluu = 2;
                golfie = oscard[zuuluu];
                offset = tangon.bind(entity)(golfie);
                verify = offset.forEach;
                option = report.usageHistory;
                golfie = function(argFoo, argBar) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        zuuluu = argFoo;
                        michal = argBar;
                        var _closure4_slot0 = zuuluu;
                        option = zuuluu.totalUses;
                        offset = zuuluu.recentUses;
                        report = zuuluu.frecency;
                        entity = -1;
                        if(!(entity === report)) { _fun00020_ip = 247; continue _fun00019 }
 43:
                        oscard = _closure3_slot0;
                        report = oscard.computeBonus;
                        oscard = report.bind(oscard)(michal);
                        report = 100;
                        report = oscard / report;
                        var _closure4_slot1 = report;
                        report = 0;
                        zuuluu['score'] = report;
                        golfie = _closure1_slot0;
                        verify = _closure1_slot1;
                        oscard = 2;
                        oscard = verify[oscard];
                        verify = undefined;
                        golfie = golfie.bind(verify)(oscard);
                        oscard = golfie.forEach;
                        tangon = function(argFoo, argBar) {
                            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                                michal = _closure3_slot0;
                                zuuluu = michal.maxSamples;
                                michal = argBar;
                                if(!(!(michal >= zuuluu))) { _fun00022_ip = 121; continue _fun00021 }
 20:
                                tangon = _closure3_slot0;
                                zuuluu = tangon.computeWeight;
                                golfie = _closure3_slot1;
                                oscard = golfie.diff;
                                report = _closure1_slot0;
                                michal = _closure1_slot1;
                                entity = 3;
                                michal = michal[entity];
                                entity = undefined;
                                report = report.bind(entity)(michal);
                                michal = argFoo;
                                report = report.bind(entity)(michal);
                                michal = 'days';
                                michal = oscard.bind(golfie)(report, michal);
                                report = zuuluu.bind(tangon)(michal);
                                zuuluu = _closure4_slot0;
                                tangon = zuuluu.score;
                                michal = _closure4_slot1;
                                michal = michal * report;
                                michal = tangon + michal;
                                zuuluu['score'] = michal;
                                return entity;
 121:
                                entity = false;
                                return entity;
                            }
                        };
                        tangon = oscard.bind(golfie)(offset, tangon);
                        tangon = zuuluu.score;
                        if(!(!(tangon > report))) { _fun00020_ip = 147; continue _fun00019 }
 131:
                        tangon = _closure3_slot0;
                        tangon = tangon.usageHistory;
                        tangon = delete tangon[michal];
                        _fun00020_ip = 247; continue _fun00019;
 147:
                        tangon = zuuluu.recentUses;
                        tangon = tangon.length;
                        if(!(tangon > report)) { _fun00020_ip = 233; continue _fun00019 }
 162:
                        golfie = _closure3_slot0;
                        oscard = golfie.computeFrecency;
                        report = zuuluu.score;
                        tangon = {};
                        offset = offset.length;
                        tangon['numOfRecentUses'] = offset;
                        yankee = _closure3_slot2;
                        offset = null;
                        offset = offset == yankee;
                        verify = undefined;
                        if(offset) { _fun00020_ip = 215; continue _fun00019 }
 205:
                        offset = _closure3_slot2;
                        verify = offset.totalUses;
 215:
                        tangon['maxTotalUse'] = verify;
                        tangon = oscard.bind(golfie)(option, report, tangon);
                        zuuluu['frecency'] = tangon;
 233:
                        entity = _closure3_slot0;
                        entity = entity.usageHistory;
                        entity[michal] = zuuluu;
 247:
                        entity = undefined;
                        return entity;
                    }
                };
                golfie = verify.bind(offset)(option, golfie);
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = report.usageHistory;
                oscard = tangon.bind(entity)(zuuluu);
                tangon = oscard.map;
                zuuluu = function(argFoo, argBar) {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.lookupKey;
                        entity = argBar;
                        zuuluu = michal.bind(zuuluu)(entity);
                        entity = null;
                        michal = entity == zuuluu;
                        if(michal) { _fun00024_ip = 54; continue _fun00023 }
 30:
                        michal = new Array(2);
                        michal[0] = zuuluu;
                        zuuluu = argFoo;
                        zuuluu = zuuluu.frecency;
                        michal[1] = zuuluu;
                        entity = michal;
 54:
                        return entity;
                    }
                };
                oscard = tangon.bind(oscard)(zuuluu);
                tangon = oscard.filter;
                zuuluu = function(argFoo) {
                    michal = null;
                    entity = argFoo;
                    entity = michal !== entity;
                    return entity;
                };
                oscard = tangon.bind(oscard)(zuuluu);
                tangon = oscard.sortBy;
                zuuluu = function(argFoo) {
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        tangon = argFoo;
                        michal = tangon[Symbol.iterator];
                        tangon = michal().next;
                        entity = tangon().value;
                        entity = michal;
                        oscard = undefined;
                        zuuluu = entity === oscard;
                        entity = undefined;
                        if(zuuluu) { _fun00026_ip = 49; continue _fun00025 }
 24:
                        report = tangon().value;
                        tangon = michal;
                        tangon = tangon === oscard;
                        entity = undefined;
                        zuuluu = tangon;
                        if(tangon) { _fun00026_ip = 49; continue _fun00025 }
 43:
                        entity = report;
                        zuuluu = tangon;
 49:
                        if(zuuluu) { _fun00026_ip = 55; continue _fun00025 }
 52:
                        michal.return();
 55:
                        entity = -entity;
                        return entity;
                    }
                };
                tangon = tangon.bind(oscard)(zuuluu);
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        entity = argFoo;
                        michal = entity[Symbol.iterator];
                        entity = michal().next;
                        tangon = entity().value;
                        zuuluu = michal;
                        entity = undefined;
                        zuuluu = zuuluu === entity;
                        if(zuuluu) { _fun00028_ip = 25; continue _fun00027 }
 22:
                        entity = tangon;
 25:
                        if(zuuluu) { _fun00028_ip = 31; continue _fun00027 }
 28:
                        michal.return();
 31:
                        return entity;
                    }
                };
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.take;
                michal = report.numFrequentlyItems;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.value;
                michal = michal.bind(zuuluu)();
                report['frequently'] = michal;
                michal = false;
                report['dirty'] = michal;
                tangon = report.afterCompute;
                zuuluu = report.usageHistory;
                michal = report._frequently;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'frequently';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = this;
                michal = entity.dirty;
                if(!michal) { _fun00030_ip = 22; continue _fun00029 }
 12:
                michal = entity.compute;
                michal = michal.bind(entity)();
 22:
                entity = entity._frequently;
                return entity;
            }
        };
        entity['get'] = oscard;
        report = function(argFoo) { // Original name: set
            michal = argFoo;
            entity = this;
            entity['_frequently'] = michal;
            entity = undefined;
            return entity;
        };
        entity['set'] = report;
        michal[9] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    oscard = 4;
    golfie = golfie[oscard];
    oscard = argBar;
    option = oscard.bind(entity)(golfie);
    golfie = option.fileFinishedImporting;
    oscard = 'lib/Frecency.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = tangon;
    tangon = {};
    oscard = function(argFoo) { // Original name: original
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            zuuluu = argFoo;
            entity = 3;
            michal = zuuluu <= entity;
            entity = 100;
            if(michal) { _fun00032_ip = 71; continue _fun00031 }
 16:
            michal = 15;
            michal = zuuluu <= michal;
            entity = 70;
            if(michal) { _fun00032_ip = 71; continue _fun00031 }
 29:
            tangon = 30;
            michal = zuuluu <= tangon;
            entity = 50;
            if(michal) { _fun00032_ip = 71; continue _fun00031 }
 42:
            michal = 45;
            michal = zuuluu <= michal;
            entity = tangon;
            if(michal) { _fun00032_ip = 71; continue _fun00031 }
 55:
            michal = 80;
            michal = zuuluu <= michal;
            entity = 1;
            if(!michal) { _fun00032_ip = 71; continue _fun00031 }
 68:
            entity = 10;
 71:
            return entity;
        }
    };
    tangon['original'] = oscard;
    oscard = function(argFoo) { // Original name: safe
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            zuuluu = argFoo;
            entity = 3;
            michal = zuuluu <= entity;
            entity = 100;
            if(michal) { _fun00034_ip = 71; continue _fun00033 }
 16:
            michal = 15;
            michal = zuuluu <= michal;
            entity = 70;
            if(michal) { _fun00034_ip = 71; continue _fun00033 }
 29:
            tangon = 30;
            michal = zuuluu <= tangon;
            entity = 50;
            if(michal) { _fun00034_ip = 71; continue _fun00033 }
 42:
            michal = 45;
            michal = zuuluu <= michal;
            entity = tangon;
            if(michal) { _fun00034_ip = 71; continue _fun00033 }
 55:
            michal = 80;
            michal = zuuluu <= michal;
            entity = 1;
            if(!michal) { _fun00034_ip = 71; continue _fun00033 }
 68:
            entity = 10;
 71:
            return entity;
        }
    };
    tangon['safe'] = oscard;
    report = function(argFoo) { // Original name: day_recency
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            report = argFoo;
            tangon = 1;
            michal = report <= tangon;
            entity = 100;
            if(michal) { _fun00036_ip = 110; continue _fun00035 }
 16:
            michal = 2;
            zuuluu = report <= michal;
            entity = 70;
            if(zuuluu) { _fun00036_ip = 110; continue _fun00035 }
 29:
            zuuluu = 3;
            zuuluu = report <= zuuluu;
            entity = 50;
            if(zuuluu) { _fun00036_ip = 110; continue _fun00035 }
 42:
            zuuluu = 7;
            zuuluu = report <= zuuluu;
            entity = 20;
            if(zuuluu) { _fun00036_ip = 110; continue _fun00035 }
 55:
            oscard = 15;
            zuuluu = report <= oscard;
            entity = oscard;
            if(zuuluu) { _fun00036_ip = 110; continue _fun00035 }
 68:
            zuuluu = 30;
            zuuluu = report <= zuuluu;
            entity = 10;
            if(zuuluu) { _fun00036_ip = 110; continue _fun00035 }
 81:
            zuuluu = 45;
            zuuluu = report <= zuuluu;
            entity = 5;
            if(zuuluu) { _fun00036_ip = 110; continue _fun00035 }
 94:
            zuuluu = 80;
            zuuluu = report <= zuuluu;
            entity = tangon;
            if(!zuuluu) { _fun00036_ip = 110; continue _fun00035 }
 107:
            entity = michal;
 110:
            return entity;
        }
    };
    tangon['day_recency'] = report;
    zuuluu['weightFunctions'] = tangon;
    zuuluu['frecencyAlgorithms'] = michal;
    return entity;
})();