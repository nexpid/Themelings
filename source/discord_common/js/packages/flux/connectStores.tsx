// discord_common/js/packages/flux/connectStores.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot11;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: getDisplayName
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.displayName;
            entity = null;
            if(!(entity == michal)) { _fun00006_ip = 19; continue _fun00005 }
 14:
            michal = zuuluu.name;
 19:
            zuuluu = entity != michal;
            entity = '<Unknown>';
            if(!zuuluu) { _fun00006_ip = 35; continue _fun00005 }
 32:
            entity = michal;
 35:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: memoizeGetStateFromStores
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = null;
        var _closure2_slot1 = entity;
        var _closure2_slot2 = entity;
        zuuluu = function(argFoo) { // Original name: getCachedResult
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                entity = _closure2_slot1;
                report = null;
                if(!(report != entity)) { _fun00008_ip = 62; continue _fun00007 }
 16:
                entity = _closure2_slot2;
                if(!(report != entity)) { _fun00008_ip = 62; continue _fun00007 }
 24:
                tangon = _closure1_slot1;
                oscard = _closure1_slot2;
                entity = 9;
                entity = oscard[entity];
                oscard = undefined;
                tangon = tangon.bind(oscard)(entity);
                entity = _closure2_slot1;
                entity = tangon.bind(oscard)(entity, zuuluu);
                if(entity) { _fun00008_ip = 138; continue _fun00007 }
 62:
                entity = _closure2_slot1;
                tangon = report != entity;
                entity = null;
                if(!tangon) { _fun00008_ip = 136; continue _fun00007 }
 75:
                tangon = _closure2_slot2;
                tangon = report != tangon;
                entity = null;
                if(!tangon) { _fun00008_ip = 136; continue _fun00007 }
 88:
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                tangon = 9;
                tangon = golfie[tangon];
                golfie = undefined;
                oscard = oscard.bind(golfie)(tangon);
                tangon = _closure2_slot1;
                tangon = oscard.bind(golfie)(tangon, zuuluu);
                entity = null;
                if(!tangon) { _fun00008_ip = 136; continue _fun00007 }
 128:
                _closure2_slot1 = zuuluu;
                entity = _closure2_slot2;
 136:
                _fun00008_ip = 142; continue _fun00007;
 138:
                entity = _closure2_slot2;
 142:
                return entity;
            }
        };
        var _closure2_slot3 = zuuluu;
        entity = function(argFoo) { // Original name: memoizedFunction
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                entity = _closure2_slot3;
                tangon = undefined;
                entity = entity.bind(tangon)(report);
                michal = null;
                if(!(michal == entity)) { _fun00010_ip = 43; continue _fun00009 }
 23:
                michal = _closure2_slot0;
                _closure2_slot1 = report;
                michal = michal.bind(tangon)(report);
                _closure2_slot2 = michal;
                entity = michal;
 43:
                return entity;
            }
        };
        entity['getCachedResult'] = zuuluu;
        michal = function() {
            entity = null;
            _closure2_slot1 = entity;
            _closure2_slot2 = entity;
            entity = undefined;
            return entity;
        };
        entity['clear'] = michal;
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot9 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/flux/connectStores.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: connectStores
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            entity = argBaz;
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00012_ip = 26; continue _fun00011 }
 17:
            entity = entity.forwardRef;
            if(entity) { _fun00012_ip = 41; continue _fun00011 }
 26:
            zuuluu = function(argFoo, argBar) { // Original name: connectStoresWithoutRef
                michal = argFoo;
                var _closure3_slot0 = michal;
                michal = argBar;
                var _closure3_slot1 = michal;
                entity = function(argFoo) {
                    report = argFoo;
                    var _closure4_slot0 = report;
                    michal = _closure1_slot12;
                    tangon = undefined;
                    golfie = michal.bind(tangon)(report);
                    michal = global;
                    michal = michal.HermesInternal;
                    oscard = michal.concat;
                    report = 'FluxContainer(';
                    michal = ')';
                    michal = oscard.bind(report)(golfie, michal);
                    var _closure4_slot1 = michal;
                    zuuluu = _closure1_slot8;
                    zuuluu = zuuluu.Component;
                    entity = function(argFoo) {
                        tangon = function(argFoo) { // Original name: FluxContainer
                            golfie = this;
                            romeon = 0;
                            option = copyRestArgs(romeon);
                            entity = _closure1_slot3;
                            report = _closure5_slot0;
                            oscard = undefined;
                            entity = entity.bind(oscard)(golfie, report);
                            zuuluu = _closure1_slot10;
                            entity = new Array(0);
                            romeon = entity;
                            yankee = option;
                            offset = 0;
                            option = arraySpread(romeon, yankee, offset);
                            entity = zuuluu.bind(oscard)(golfie, report, entity);
                            var _closure6_slot0 = entity;
                            golfie = _closure1_slot13;
                            report = _closure3_slot1;
                            report = golfie.bind(oscard)(report);
                            entity['memoizedGetStateFromStores'] = report;
                            report = _closure1_slot0;
                            golfie = _closure1_slot2;
                            tangon = 8;
                            tangon = golfie[tangon];
                            tangon = report.bind(oscard)(tangon);
                            report = tangon.BatchedStoreListener;
                            romeon = _closure3_slot0;
                            zuuluu = report.prototype;
                            zuuluu = Object.create(zuuluu, {constructor: {value: report}});
                            yankee = function() {
                                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                    michal = _closure6_slot0;
                                    tangon = michal.memoizedGetStateFromStores;
                                    zuuluu = tangon.getCachedResult;
                                    michal = michal.props;
                                    oscard = zuuluu.bind(tangon)(michal);
                                    michal = null;
                                    michal = michal != oscard;
                                    if(!michal) { _fun00014_ip = 105; continue _fun00013 }
 38:
                                    option = _closure6_slot0;
                                    tangon = option.memoizedGetStateFromStores;
                                    zuuluu = tangon.clear;
                                    zuuluu = zuuluu.bind(tangon)();
                                    tangon = _closure1_slot1;
                                    report = _closure1_slot2;
                                    zuuluu = 9;
                                    zuuluu = report[zuuluu];
                                    report = undefined;
                                    tangon = tangon.bind(report)(zuuluu);
                                    golfie = option.memoizedGetStateFromStores;
                                    zuuluu = option.props;
                                    zuuluu = golfie.bind(option)(zuuluu);
                                    michal = tangon.bind(report)(zuuluu, oscard);
 105:
                                    if(michal) { _fun00014_ip = 122; continue _fun00013 }
 108:
                                    michal = _closure6_slot0;
                                    entity = michal.forceUpdate;
                                    entity = entity.bind(michal)();
 122:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            foxtra = zuuluu;
                            michal = new foxtra[report](romeon, yankee, offset);
                            michal = michal instanceof Object ? michal : zuuluu;
                            entity['listener'] = michal;
                            return entity;
                        };
                        var _closure5_slot0 = tangon;
                        report = _closure1_slot7;
                        zuuluu = undefined;
                        michal = argFoo;
                        michal = report.bind(zuuluu)(tangon, michal);
                        michal = _closure1_slot4;
                        report = {};
                        entity = 'componentDidMount';
                        report['key'] = entity;
                        entity = function() { // Original name: value
                            entity = this;
                            zuuluu = entity.listener;
                            michal = zuuluu.attach;
                            entity = _closure4_slot1;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        report['value'] = entity;
                        entity = new Array(3);
                        entity[0] = report;
                        report = {};
                        golfie = 'componentWillUnmount';
                        report['key'] = golfie;
                        golfie = function() { // Original name: value
                            entity = this;
                            zuuluu = entity.listener;
                            michal = zuuluu.detach;
                            michal = michal.bind(zuuluu)();
                            michal = entity.memoizedGetStateFromStores;
                            entity = michal.clear;
                            entity = entity.bind(michal)();
                            entity = undefined;
                            return entity;
                        };
                        report['value'] = golfie;
                        entity[1] = report;
                        report = {};
                        golfie = 'render';
                        report['key'] = golfie;
                        oscard = function() { // Original name: value
                            report = this;
                            michal = report.memoizedGetStateFromStores;
                            entity = report.props;
                            entity = michal.bind(report)(entity);
                            tangon = _closure1_slot9;
                            zuuluu = _closure4_slot0;
                            michal = {};
                            oscard = report.props;
                            golfie = michal;
                            report = copyDataProperties(golfie, oscard);
                            golfie = michal;
                            oscard = entity;
                            entity = copyDataProperties(golfie, oscard);
                            entity = undefined;
                            entity = tangon.bind(entity)(zuuluu, michal);
                            return entity;
                        };
                        report['value'] = oscard;
                        entity[2] = report;
                        entity = michal.bind(zuuluu)(tangon, entity);
                        return entity;
                    };
                    entity = entity.bind(tangon)(zuuluu);
                    entity['displayName'] = michal;
                    return entity;
                };
                return entity;
            };
            entity = undefined;
            entity = zuuluu.bind(entity)(report, tangon);
            _fun00012_ip = 54; continue _fun00011;
 41:
            zuuluu = function(argFoo, argBar) { // Original name: connectStoresWithRef
                michal = argFoo;
                var _closure3_slot0 = michal;
                michal = argBar;
                var _closure3_slot1 = michal;
                entity = function(argFoo) {
                    tangon = argFoo;
                    var _closure4_slot0 = tangon;
                    michal = _closure1_slot12;
                    option = undefined;
                    golfie = michal.bind(option)(tangon);
                    michal = global;
                    tangon = michal.HermesInternal;
                    oscard = tangon.concat;
                    tangon = 'FluxContainer(';
                    report = ')';
                    tangon = oscard.bind(tangon)(golfie, report);
                    var _closure4_slot1 = tangon;
                    oscard = _closure1_slot8;
                    golfie = oscard.Component;
                    zuuluu = function(argFoo) {
                        tangon = function(argFoo) { // Original name: FluxContainer
                            golfie = this;
                            romeon = 0;
                            option = copyRestArgs(romeon);
                            entity = _closure1_slot3;
                            report = _closure5_slot0;
                            oscard = undefined;
                            entity = entity.bind(oscard)(golfie, report);
                            zuuluu = _closure1_slot10;
                            entity = new Array(0);
                            romeon = entity;
                            yankee = option;
                            offset = 0;
                            option = arraySpread(romeon, yankee, offset);
                            entity = zuuluu.bind(oscard)(golfie, report, entity);
                            var _closure6_slot0 = entity;
                            golfie = _closure1_slot13;
                            report = _closure3_slot1;
                            report = golfie.bind(oscard)(report);
                            entity['memoizedGetStateFromStores'] = report;
                            report = _closure1_slot0;
                            golfie = _closure1_slot2;
                            tangon = 8;
                            tangon = golfie[tangon];
                            tangon = report.bind(oscard)(tangon);
                            report = tangon.BatchedStoreListener;
                            romeon = _closure3_slot0;
                            zuuluu = report.prototype;
                            zuuluu = Object.create(zuuluu, {constructor: {value: report}});
                            yankee = function() {
                                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                    michal = _closure6_slot0;
                                    tangon = michal.memoizedGetStateFromStores;
                                    zuuluu = tangon.getCachedResult;
                                    michal = michal.props;
                                    michal = michal.childProps;
                                    oscard = zuuluu.bind(tangon)(michal);
                                    michal = null;
                                    michal = michal != oscard;
                                    if(!michal) { _fun00016_ip = 117; continue _fun00015 }
 44:
                                    option = _closure6_slot0;
                                    tangon = option.memoizedGetStateFromStores;
                                    zuuluu = tangon.clear;
                                    zuuluu = zuuluu.bind(tangon)();
                                    tangon = _closure1_slot1;
                                    report = _closure1_slot2;
                                    zuuluu = 9;
                                    zuuluu = report[zuuluu];
                                    report = undefined;
                                    tangon = tangon.bind(report)(zuuluu);
                                    golfie = option.memoizedGetStateFromStores;
                                    zuuluu = option.props;
                                    zuuluu = zuuluu.childProps;
                                    zuuluu = golfie.bind(option)(zuuluu);
                                    michal = tangon.bind(report)(zuuluu, oscard);
 117:
                                    if(michal) { _fun00016_ip = 134; continue _fun00015 }
 120:
                                    michal = _closure6_slot0;
                                    entity = michal.forceUpdate;
                                    entity = entity.bind(michal)();
 134:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            foxtra = zuuluu;
                            michal = new foxtra[report](romeon, yankee, offset);
                            michal = michal instanceof Object ? michal : zuuluu;
                            entity['listener'] = michal;
                            return entity;
                        };
                        var _closure5_slot0 = tangon;
                        report = _closure1_slot7;
                        zuuluu = undefined;
                        michal = argFoo;
                        michal = report.bind(zuuluu)(tangon, michal);
                        michal = _closure1_slot4;
                        report = {};
                        entity = 'componentDidMount';
                        report['key'] = entity;
                        entity = function() { // Original name: value
                            entity = this;
                            zuuluu = entity.listener;
                            michal = zuuluu.attach;
                            entity = _closure4_slot1;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        report['value'] = entity;
                        entity = new Array(3);
                        entity[0] = report;
                        report = {};
                        golfie = 'componentWillUnmount';
                        report['key'] = golfie;
                        golfie = function() { // Original name: value
                            entity = this;
                            zuuluu = entity.listener;
                            michal = zuuluu.detach;
                            michal = michal.bind(zuuluu)();
                            michal = entity.memoizedGetStateFromStores;
                            entity = michal.clear;
                            entity = entity.bind(michal)();
                            entity = undefined;
                            return entity;
                        };
                        report['value'] = golfie;
                        entity[1] = report;
                        report = {};
                        golfie = 'render';
                        report['key'] = golfie;
                        oscard = function() { // Original name: value
                            michal = this;
                            entity = michal.props;
                            oscard = entity.forwardedConnectStoresRef;
                            report = entity.childProps;
                            entity = michal.memoizedGetStateFromStores;
                            entity = entity.bind(michal)(report);
                            tangon = _closure1_slot9;
                            zuuluu = _closure4_slot0;
                            michal = {};
                            michal['ref'] = oscard;
                            option = michal;
                            golfie = report;
                            report = copyDataProperties(option, golfie);
                            option = michal;
                            golfie = entity;
                            entity = copyDataProperties(option, golfie);
                            entity = undefined;
                            entity = tangon.bind(entity)(zuuluu, michal);
                            return entity;
                        };
                        report['value'] = oscard;
                        entity[2] = report;
                        entity = michal.bind(zuuluu)(tangon, entity);
                        return entity;
                    };
                    zuuluu = zuuluu.bind(option)(golfie);
                    var _closure4_slot2 = zuuluu;
                    zuuluu['displayName'] = tangon;
                    zuuluu = oscard.forwardRef;
                    entity = function(argFoo, argBar) {
                        tangon = _closure1_slot9;
                        zuuluu = _closure4_slot2;
                        michal = {};
                        entity = argFoo;
                        michal['childProps'] = entity;
                        entity = argBar;
                        michal['forwardedConnectStoresRef'] = entity;
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    entity = zuuluu.bind(oscard)(entity);
                    michal = michal.HermesInternal;
                    zuuluu = michal.concat;
                    michal = 'ForwardRef(';
                    michal = zuuluu.bind(michal)(tangon, report);
                    entity['displayName'] = michal;
                    return entity;
                };
                return entity;
            };
            michal = undefined;
            entity = zuuluu.bind(michal)(report, tangon);
 54:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();