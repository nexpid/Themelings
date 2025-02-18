// app/modules/profiling/ComponentProfiler.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    entity = function(argFoo, argBar) { // Original name: formatString
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            entity = report.length;
            zuuluu = tangon;
            if(!(!(entity > zuuluu))) { _fun00002_ip = 23; continue _fun00001 }
 18:
            zuuluu = report.length;
 23:
            michal = report.substring;
            entity = 0;
            zuuluu = michal.bind(report)(entity, zuuluu);
            michal = zuuluu.padEnd;
            entity = ' ';
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    report = true;
    tangon['value'] = report;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    option = golfie[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot3 = tangon;
    tangon = function() {
        tangon = _closure1_slot1;
        zuuluu = function() { // Original name: StatCollector
            zuuluu = this;
            tangon = _closure1_slot0;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = 0;
            zuuluu['totalMicroseconds'] = michal;
            zuuluu['count'] = michal;
            michal = null;
            zuuluu['minMicroseconds'] = michal;
            zuuluu['maxMicroseconds'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'addValue';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = this;
                entity = michal.count;
                entity = entity + 1;
                michal['count'] = entity;
                oscard = global;
                tangon = oscard.Math;
                zuuluu = tangon.round;
                report = 1000;
                entity = argFoo;
                entity = report * entity;
                report = zuuluu.bind(tangon)(entity);
                entity = michal.totalMicroseconds;
                entity = entity + report;
                michal['totalMicroseconds'] = entity;
                tangon = oscard.Math;
                zuuluu = tangon.min;
                entity = michal.minMicroseconds;
                golfie = null;
                if(!(golfie == entity)) { _fun00004_ip = 99; continue _fun00003 }
 87:
                option = oscard.Number;
                entity = option.MAX_SAFE_INTEGER;
 99:
                entity = zuuluu.bind(tangon)(entity, report);
                michal['minMicroseconds'] = entity;
                tangon = oscard.Math;
                zuuluu = tangon.max;
                entity = michal.maxMicroseconds;
                if(!(golfie == entity)) { _fun00004_ip = 144; continue _fun00003 }
 132:
                oscard = oscard.Number;
                entity = oscard.MIN_SAFE_INTEGER;
 144:
                entity = zuuluu.bind(tangon)(entity, report);
                michal['maxMicroseconds'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'mean';
        entity['key'] = oscard;
        report = function() { // Original name: get
            entity = this;
            michal = entity.totalMicroseconds;
            entity = entity.count;
            entity = michal / entity;
            return entity;
        };
        entity['get'] = report;
        michal[1] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot4 = tangon;
    option = {};
    var _closure1_slot5 = option;
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/profiling/ComponentProfiler.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: ComponentProfiler
        entity = argFoo;
        oscard = entity.id;
        entity = entity.children;
        michal = _closure1_slot2;
        golfie = michal.useCallback;
        report = function(argFoo, argBar, argBaz) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = argFoo;
                report = argBar;
                zuuluu = argBaz;
                tangon = _closure1_slot6;
                if(!tangon) { _fun00006_ip = 227; continue _fun00005 }
 22:
                tangon = _closure1_slot5;
                tangon = michal in tangon;
                if(tangon) { _fun00006_ip = 122; continue _fun00005 }
 33:
                oscard = _closure1_slot5;
                tangon = {};
                golfie = _closure1_slot4;
                option = golfie.prototype;
                verify = Object.create(option, {constructor: {value: golfie}});
                yankee = verify;
                option = new yankee[golfie](offset);
                option = option instanceof Object ? option : verify;
                tangon['mount'] = option;
                option = golfie.prototype;
                verify = Object.create(option, {constructor: {value: golfie}});
                yankee = verify;
                option = new yankee[golfie](offset);
                option = option instanceof Object ? option : verify;
                tangon['update'] = option;
                option = golfie.prototype;
                option = Object.create(option, {constructor: {value: golfie}});
                yankee = option;
                golfie = new yankee[golfie](offset);
                golfie = golfie instanceof Object ? golfie : option;
                tangon['nestedUpdate'] = golfie;
                oscard[michal] = tangon;
 122:
                tangon = 'mount';
                if(!(tangon !== report)) { _fun00006_ip = 202; continue _fun00005 }
 130:
                tangon = 'update';
                if(!(tangon !== report)) { _fun00006_ip = 175; continue _fun00005 }
 138:
                tangon = 'nested-update';
                if(!(tangon === report)) { _fun00006_ip = 227; continue _fun00005 }
 148:
                tangon = _closure1_slot5;
                tangon = tangon[michal];
                report = tangon.nestedUpdate;
                tangon = report.addValue;
                tangon = tangon.bind(report)(zuuluu);
                _fun00006_ip = 227; continue _fun00005;
 175:
                tangon = _closure1_slot5;
                tangon = tangon[michal];
                report = tangon.update;
                tangon = report.addValue;
                tangon = tangon.bind(report)(zuuluu);
                _fun00006_ip = 227; continue _fun00005;
 202:
                entity = _closure1_slot5;
                entity = entity[michal];
                michal = entity.mount;
                entity = michal.addValue;
                entity = entity.bind(michal)(zuuluu);
 227:
                entity = undefined;
                return entity;
            }
        };
        tangon = new Array(0);
        report = golfie.bind(michal)(report, tangon);
        tangon = _closure1_slot3;
        zuuluu = michal.Profiler;
        michal = {};
        michal['id'] = oscard;
        michal['onRender'] = report;
        michal['children'] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    zuuluu['default'] = report;
    zuuluu['StatCollector'] = tangon;
    tangon = function() { // Original name: clearComponentRenderStats
        entity = {};
        _closure1_slot5 = entity;
        entity = undefined;
        return entity;
    };
    zuuluu['clearComponentRenderStats'] = tangon;
    tangon = function() { // Original name: getComponentRenderStats
        entity = _closure1_slot5;
        return entity;
    };
    zuuluu['getComponentRenderStats'] = tangon;
    tangon = function() { // Original name: serializeComponentRenderAverages
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = global;
            report = tangon.Object;
            zuuluu = report.keys;
            entity = _closure1_slot5;
            entity = zuuluu.bind(report)(entity);
            report = entity.length;
            entity = '';
            zuuluu = 0;
            if(!(zuuluu !== report)) { _fun00008_ip = 240; continue _fun00007 }
 43:
            golfie = _closure1_slot7;
            oscard = undefined;
            zuuluu = 'id';
            report = 20;
            foxtra = golfie.bind(oscard)(zuuluu, report);
            zuuluu = 'Mounts';
            option = 8;
            config = golfie.bind(oscard)(zuuluu, option);
            zuuluu = 'Mount Mean';
            vacuum = golfie.bind(oscard)(zuuluu, report);
            zuuluu = 'Updates';
            source = golfie.bind(oscard)(zuuluu, option);
            zuuluu = 'Update Mean';
            echoed = golfie.bind(oscard)(zuuluu, report);
            zuuluu = 'Nested';
            output = golfie.bind(oscard)(zuuluu, option);
            zuuluu = 'Nested Mean';
            kiloes = golfie.bind(oscard)(zuuluu, report);
            zuuluu = tangon.HermesInternal;
            oscard = zuuluu.concat;
            report = '|';
            backup = '|\n';
            papara = report;
            cntext = foxtra;
            record = report;
            sequen = report;
            ctrled = report;
            update = report;
            result = report;
            sizing = report;
            report = papara[oscard](cntext, record, config, sequen, vacuum, ctrled, source, update, echoed, result, output, sizing, kiloes, backup, foxtra);
            zuuluu = 'Component Render Stats (microseconds):\n';
            zuuluu = zuuluu + report;
            report = tangon.Object;
            tangon = report.entries;
            michal = _closure1_slot5;
            report = tangon.bind(report)(michal);
            tangon = report.map;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    oscard = argFoo;
                    michal = oscard[Symbol.iterator];
                    oscard = michal().next;
                    entity = oscard().value;
                    zuuluu = michal;
                    tangon = undefined;
                    zuuluu = zuuluu === tangon;
                    report = undefined;
                    if(zuuluu) { _fun00010_ip = 27; continue _fun00009 }
 24:
                    report = entity;
 27:
                    entity = undefined;
                    if(zuuluu) { _fun00010_ip = 57; continue _fun00009 }
 32:
                    golfie = oscard().value;
                    oscard = michal;
                    oscard = oscard === tangon;
                    entity = undefined;
                    zuuluu = oscard;
                    if(oscard) { _fun00010_ip = 57; continue _fun00009 }
 51:
                    entity = golfie;
                    zuuluu = oscard;
 57:
                    if(zuuluu) { _fun00010_ip = 63; continue _fun00009 }
 60:
                    michal.return();
 63:
                    zuuluu = _closure1_slot7;
                    michal = 20;
                    offset = zuuluu.bind(tangon)(report, michal);
                    report = entity.mount;
                    oscard = report.count;
                    report = oscard.toString;
                    report = report.bind(oscard)();
                    yankee = 8;
                    sequen = zuuluu.bind(tangon)(report, yankee);
                    report = entity.mount;
                    oscard = report.mean;
                    report = oscard.toString;
                    report = report.bind(oscard)();
                    ctrled = zuuluu.bind(tangon)(report, michal);
                    report = entity.update;
                    oscard = report.count;
                    report = oscard.toString;
                    report = report.bind(oscard)();
                    update = zuuluu.bind(tangon)(report, yankee);
                    report = entity.update;
                    oscard = report.mean;
                    report = oscard.toString;
                    report = report.bind(oscard)();
                    result = zuuluu.bind(tangon)(report, michal);
                    report = entity.nestedUpdate;
                    romeon = report.count;
                    report = romeon.toString;
                    report = report.bind(romeon)();
                    sizing = zuuluu.bind(tangon)(report, yankee);
                    entity = entity.nestedUpdate;
                    yankee = entity.mean;
                    entity = yankee.toString;
                    entity = entity.bind(yankee)();
                    backup = zuuluu.bind(tangon)(entity, michal);
                    entity = global;
                    entity = entity.HermesInternal;
                    zuuluu = entity.concat;
                    michal = '|';
                    foxtra = '|\n';
                    cntext = michal;
                    record = offset;
                    config = michal;
                    vacuum = michal;
                    source = michal;
                    echoed = michal;
                    output = michal;
                    kiloes = michal;
                    entity = cntext[zuuluu](record, config, sequen, vacuum, ctrled, source, update, echoed, result, output, sizing, kiloes, backup, foxtra, romeon);
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal);
            entity = zuuluu + michal;
 240:
            return entity;
        }
    };
    zuuluu['serializeComponentRenderAverages'] = tangon;
    tangon = function() { // Original name: resetComponentProfiler
        entity = {};
        _closure1_slot5 = entity;
        entity = undefined;
        return entity;
    };
    zuuluu['resetComponentProfiler'] = tangon;
    tangon = function() { // Original name: pauseComponentProfiler
        entity = false;
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    zuuluu['pauseComponentProfiler'] = tangon;
    tangon = function() { // Original name: resumeComponentProfiler
        entity = true;
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    zuuluu['resumeComponentProfiler'] = tangon;
    michal = function() { // Original name: dumpStats
        entity = _closure1_slot5;
        return entity;
    };
    zuuluu['dumpStats'] = michal;
    return entity;
})();