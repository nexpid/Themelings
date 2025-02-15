// app/lib/VideoQuality.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot11;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot11;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot4;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot3;
            entity = _closure1_slot13;
            entity = entity.bind(zulu)();
            if(entity) { _fun00008_ip = 48; continue _fun00007 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun00008_ip = 86; continue _fun00007;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot4;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun00010_ip = 74; continue _fun00009;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: round
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tango = argFoo;
            entity = arguments[1];
            mike = undefined;
            if(!(entity === mike)) { _fun00012_ip = 14; continue _fun00011 }
 12:
            entity = 0;
 14:
            mike = null;
            if(!(mike != tango)) { _fun00012_ip = 38; continue _fun00011 }
 20:
            mike = global;
            zulu = mike.Math;
            mike = zulu.round;
            entity = mike.bind(zulu)(tango);
 38:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = function() {
        tango = _closure1_slot7;
        zulu = function(argFoo, argBar) { // Original name: DurationEnabled
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tango = argFoo;
                report = argBar;
                zulu = this;
                oscar = _closure1_slot6;
                mike = _closure2_slot0;
                entity = undefined;
                mike = oscar.bind(entity)(zulu, mike);
                zulu['timestampProducer'] = report;
                mike = 0;
                zulu['total'] = mike;
                zulu['state'] = tango;
                mike = null;
                if(!tango) { _fun00014_ip = 65; continue _fun00013 }
 56:
                tango = report.now;
                mike = tango.bind(report)();
 65:
                zulu['begin'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'value';
        entity['key'] = mike;
        mike = function() { // Original name: get
            entity = this;
            entity = entity.state;
            return entity;
        };
        entity['get'] = mike;
        mike = function(argFoo) { // Original name: set
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                mike = argFoo;
                entity = this;
                zulu = mike;
                if(!zulu) { _fun00016_ip = 20; continue _fun00015 }
 12:
                tango = entity.state;
                zulu = !tango;
 20:
                if(!zulu) { _fun00016_ip = 44; continue _fun00015 }
 23:
                tango = entity.timestampProducer;
                zulu = tango.now;
                zulu = zulu.bind(tango)();
                entity['begin'] = zulu;
 44:
                zulu = !mike;
                if(!zulu) { _fun00016_ip = 55; continue _fun00015 }
 50:
                zulu = entity.state;
 55:
                if(!zulu) { _fun00016_ip = 122; continue _fun00015 }
 58:
                tango = entity.total;
                report = entity.timestampProducer;
                zulu = report.now;
                report = zulu.bind(report)();
                zulu = global;
                golf = zulu.Number;
                oscar = entity.begin;
                zulu = undefined;
                zulu = golf.bind(zulu)(oscar);
                zulu = report - zulu;
                zulu = tango + zulu;
                entity['total'] = zulu;
                zulu = null;
                entity['begin'] = zulu;
 122:
                entity['state'] = mike;
                entity = undefined;
                return entity;
            }
        };
        entity['set'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'totalDuration';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                mike = this;
                zulu = mike.begin;
                entity = null;
                if(!(entity == zulu)) { _fun00018_ip = 23; continue _fun00017 }
 15:
                entity = mike.total;
                _fun00018_ip = 58; continue _fun00017;
 23:
                tango = mike.total;
                report = mike.timestampProducer;
                zulu = report.now;
                zulu = zulu.bind(report)();
                zulu = tango + zulu;
                mike = mike.begin;
                entity = zulu - mike;
 58:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'totalDurationSeconds';
        entity['key'] = oscar;
        report = function() { // Original name: value
            mike = this;
            entity = mike.totalDuration;
            mike = entity.bind(mike)();
            entity = 1000;
            entity = mike / entity;
            return entity;
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot8 = tango;
    tango = {};
    report = 'fps-update';
    tango['FpsUpdate'] = report;
    var _closure1_slot9 = tango;
    report = 13;
    report = golf[report];
    report = options.bind(entity)(report);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: VideoQuality
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                options = arguments[1];
                oscar = this;
                tango = undefined;
                if(!(options === tango)) { _fun00020_ip = 43; continue _fun00019 }
 14:
                mike = _closure1_slot0;
                report = _closure1_slot2;
                entity = 5;
                entity = report[entity];
                entity = mike.bind(tango)(entity);
                options = entity.TimeStampProducer;
 43:
                var _closure3_slot0 = tango;
                entity = _closure1_slot6;
                report = _closure2_slot0;
                entity = entity.bind(tango)(oscar, report);
                entity = _closure1_slot12;
                entity = entity.bind(tango)(oscar, report);
                _closure3_slot0 = entity;
                report = argFoo;
                entity['connection'] = report;
                entity['timestampProducer'] = options;
                golf = _closure1_slot1;
                report = _closure1_slot2;
                oscar = 6;
                oscar = report[oscar];
                oscar = golf.bind(tango)(oscar);
                golf = oscar.prototype;
                golf = Object.create(golf, {constructor: {value: oscar}});
                romeo = golf;
                oscar = new romeo[oscar](yankee);
                oscar = oscar instanceof Object ? oscar : golf;
                entity['networkQuality'] = oscar;
                oscar = 0;
                entity['pausedCount'] = oscar;
                entity['simulcastQualityChanges'] = oscar;
                entity['numWindowOcclusionChanges'] = oscar;
                golf = {};
                entity['outboundStats'] = golf;
                golf = {};
                entity['inboundStats'] = golf;
                entity['symmetricCodecUpdates'] = oscar;
                entity['asymmetricCodecUpdates'] = oscar;
                oscar = global;
                oscar = oscar.Set;
                golf = oscar.prototype;
                golf = Object.create(golf, {constructor: {value: oscar}});
                romeo = golf;
                oscar = new romeo[oscar](yankee);
                oscar = oscar instanceof Object ? oscar : golf;
                entity['statCollectionPausedUsers'] = oscar;
                zulu = function(argFoo) {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        report = argFoo;
                        mike = null;
                        if(!(mike != report)) { _fun00022_ip = 128; continue _fun00021 }
 9:
                        zulu = _closure3_slot0;
                        tango = zulu.timestampProducer;
                        zulu = tango.now;
                        tango = zulu.bind(tango)();
                        zulu = _closure3_slot0;
                        oscar = zulu.networkQuality;
                        zulu = oscar.incrementNetworkStats;
                        zulu = zulu.bind(oscar)(tango);
                        oscar = _closure3_slot0;
                        zulu = oscar.updateSystemResourceStats;
                        zulu = zulu.bind(oscar)();
                        oscar = _closure3_slot0;
                        zulu = oscar.updateVideoEffectStats;
                        zulu = zulu.bind(oscar)(report);
                        if(!(mike != report)) { _fun00022_ip = 128; continue _fun00021 }
 89:
                        mike = _closure3_slot0;
                        zulu = mike.connection;
                        mike = zulu.getStreamParameters;
                        zulu = mike.bind(zulu)();
                        mike = _closure3_slot0;
                        entity = mike.receivedStats;
                        entity = entity.bind(mike)(tango, report, zulu);
 128:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['sampleStats'] = zulu;
                golf = _closure1_slot8;
                zulu = golf.prototype;
                verify = Object.create(zulu, {constructor: {value: golf}});
                romeo = verify;
                yankee = false;
                offset = options;
                oscar = new romeo[golf](yankee, offset, verify);
                oscar = oscar instanceof Object ? oscar : verify;
                entity['paused'] = oscar;
                oscar = golf.prototype;
                verify = Object.create(oscar, {constructor: {value: golf}});
                romeo = verify;
                offset = options;
                oscar = new romeo[golf](yankee, offset, verify);
                oscar = oscar instanceof Object ? oscar : verify;
                entity['zeroReceivers'] = oscar;
                oscar = golf.prototype;
                verify = Object.create(oscar, {constructor: {value: golf}});
                romeo = verify;
                offset = options;
                oscar = new romeo[golf](yankee, offset, verify);
                oscar = oscar instanceof Object ? oscar : verify;
                entity['videoStopped'] = oscar;
                oscar = golf.prototype;
                verify = Object.create(oscar, {constructor: {value: golf}});
                romeo = verify;
                offset = options;
                oscar = new romeo[golf](yankee, offset, verify);
                oscar = oscar instanceof Object ? oscar : verify;
                entity['videoEffectDuration'] = oscar;
                oscar = golf.prototype;
                verify = Object.create(oscar, {constructor: {value: golf}});
                romeo = verify;
                offset = options;
                oscar = new romeo[golf](yankee, offset, verify);
                oscar = oscar instanceof Object ? oscar : verify;
                entity['hqSimulcastStreamEncoded'] = oscar;
                oscar = golf.prototype;
                verify = Object.create(oscar, {constructor: {value: golf}});
                romeo = verify;
                offset = options;
                oscar = new romeo[golf](yankee, offset, verify);
                oscar = oscar instanceof Object ? oscar : verify;
                entity['lqSimulcastStreamEncoded'] = oscar;
                oscar = golf.prototype;
                verify = Object.create(oscar, {constructor: {value: golf}});
                romeo = verify;
                offset = options;
                oscar = new romeo[golf](yankee, offset, verify);
                oscar = oscar instanceof Object ? oscar : verify;
                entity['bothSimulcastStreamsEncoded'] = oscar;
                oscar = golf.prototype;
                verify = Object.create(oscar, {constructor: {value: golf}});
                romeo = verify;
                offset = options;
                oscar = new romeo[golf](yankee, offset, verify);
                oscar = oscar instanceof Object ? oscar : verify;
                entity['hqSimulcastStreamWatched'] = oscar;
                oscar = golf.prototype;
                verify = Object.create(oscar, {constructor: {value: golf}});
                romeo = verify;
                offset = options;
                oscar = new romeo[golf](yankee, offset, verify);
                oscar = oscar instanceof Object ? oscar : verify;
                entity['lqSimulcastStreamWatched'] = oscar;
                oscar = golf.prototype;
                verify = Object.create(oscar, {constructor: {value: golf}});
                romeo = verify;
                offset = options;
                oscar = new romeo[golf](yankee, offset, verify);
                oscar = oscar instanceof Object ? oscar : verify;
                entity['hqSimulcastStreamEligible'] = oscar;
                oscar = golf.prototype;
                verify = Object.create(oscar, {constructor: {value: golf}});
                romeo = verify;
                offset = options;
                oscar = new romeo[golf](yankee, offset, verify);
                oscar = oscar instanceof Object ? oscar : verify;
                entity['lqSimulcastStreamEligible'] = oscar;
                oscar = golf.prototype;
                verify = Object.create(oscar, {constructor: {value: golf}});
                romeo = verify;
                offset = options;
                oscar = new romeo[golf](yankee, offset, verify);
                oscar = oscar instanceof Object ? oscar : verify;
                entity['windowOccluded'] = oscar;
                oscar = golf.prototype;
                verify = Object.create(oscar, {constructor: {value: golf}});
                romeo = verify;
                offset = options;
                oscar = new romeo[golf](yankee, offset, verify);
                oscar = oscar instanceof Object ? oscar : verify;
                entity['videoStoppedForOcclusion'] = oscar;
                oscar = golf.prototype;
                verify = Object.create(oscar, {constructor: {value: golf}});
                romeo = verify;
                offset = options;
                oscar = new romeo[golf](yankee, offset, verify);
                oscar = oscar instanceof Object ? oscar : verify;
                entity['bandwidthLimitedFramerate'] = oscar;
                oscar = golf.prototype;
                oscar = Object.create(oscar, {constructor: {value: golf}});
                romeo = oscar;
                offset = options;
                zulu = new romeo[golf](yankee, offset, verify);
                zulu = zulu instanceof Object ? zulu : oscar;
                entity['bandwidthLimitedResolution'] = zulu;
                zulu = _closure1_slot0;
                mike = 7;
                mike = report[mike];
                mike = zulu.bind(tango)(mike);
                mike = mike.Histogram;
                zulu = mike.prototype;
                zulu = Object.create(zulu, {constructor: {value: mike}});
                romeo = zulu;
                mike = new romeo[mike](yankee);
                mike = mike instanceof Object ? mike : zulu;
                entity['videoEntropy'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot5;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot7;
        report = {};
        entity = 'addUserToStatsCollectionPausedSet';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.statCollectionPausedUsers;
            mike = zulu.add;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(27);
        entity[0] = report;
        report = {};
        golf = 'removeUserFromStatsCollectionPausedSet';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.statCollectionPausedUsers;
            mike = zulu.delete;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'start';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = this;
            zulu = mike.timestampProducer;
            entity = zulu.now;
            entity = entity.bind(zulu)();
            mike['streamStart'] = entity;
            report = mike.connection;
            tango = report.on;
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 8;
            zulu = zulu[entity];
            entity = undefined;
            zulu = oscar.bind(entity)(zulu);
            zulu = zulu.BaseConnectionEvent;
            zulu = zulu.Stats;
            mike = mike.sampleStats;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'setOutboundSsrc';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                zulu = argFoo;
                entity = this;
                mike = entity.outboundStats;
                tango = mike[zulu];
                mike = null;
                if(!(mike == tango)) { _fun00024_ip = 89; continue _fun00023 }
 22:
                mike = entity.outboundStats;
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                tango = 9;
                report = report[tango];
                tango = undefined;
                tango = oscar.bind(tango)(report);
                report = tango.OutboundStats;
                golf = entity.timestampProducer;
                tango = report.prototype;
                tango = Object.create(tango, {constructor: {value: report}});
                options = tango;
                entity = new options[report](golf, oscar);
                entity = entity instanceof Object ? entity : tango;
                mike[zulu] = entity;
 89:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getOrCreateInboundStats';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                mike = argFoo;
                entity = this;
                zulu = entity.inboundStats;
                tango = zulu[mike];
                zulu = null;
                if(!(zulu == tango)) { _fun00026_ip = 89; continue _fun00025 }
 22:
                tango = entity.inboundStats;
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 9;
                report = report[zulu];
                zulu = undefined;
                zulu = oscar.bind(zulu)(report);
                oscar = zulu.InboundStats;
                golf = entity.timestampProducer;
                report = oscar.prototype;
                report = Object.create(report, {constructor: {value: oscar}});
                options = report;
                zulu = new options[oscar](golf, oscar);
                zulu = zulu instanceof Object ? zulu : report;
                tango[mike] = zulu;
 89:
                entity = entity.inboundStats;
                entity = entity[mike];
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'setInboundUser';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            zulu = this;
            mike = zulu.getOrCreateInboundStats;
            entity = argFoo;
            report = mike.bind(zulu)(entity);
            tango = report.setVideoStopped;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            mike = mike.VideoStoppedReasons;
            zulu = mike.SenderStopped;
            oscar = 0;
            mike = argBar;
            mike = oscar === mike;
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'setUserVideoDisabled';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                tango = argBar;
                mike = this;
                zulu = mike.getOrCreateInboundStats;
                entity = argFoo;
                zulu = zulu.bind(mike)(entity);
                oscar = zulu.setVideoStopped;
                golf = _closure1_slot0;
                report = _closure1_slot2;
                entity = 9;
                report = report[entity];
                entity = undefined;
                report = golf.bind(entity)(report);
                report = report.VideoStoppedReasons;
                report = report.ClientSideDisableVideo;
                report = oscar.bind(zulu)(tango, report);
                tango = !tango;
                if(!tango) { _fun00028_ip = 92; continue _fun00027 }
 75:
                report = zulu.statsWindow;
                oscar = report.length;
                report = 0;
                tango = oscar > report;
 92:
                if(!tango) { _fun00028_ip = 117; continue _fun00027 }
 95:
                report = zulu.statsWindow;
                oscar = 0;
                report = report[oscar];
                report = report.packets;
                tango = oscar === report;
 117:
                if(!tango) { _fun00028_ip = 141; continue _fun00027 }
 120:
                tango = mike.timestampProducer;
                mike = tango.now;
                mike = mike.bind(tango)();
                zulu['startTime'] = mike;
 141:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'setOcclusionIncomingVideoEnabled';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            mike = entity.videoStoppedForOcclusion;
            entity = argFoo;
            entity = !entity;
            mike['value'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'setWindowOcclusionState';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                mike = argFoo;
                entity = this;
                zulu = entity.windowOccluded;
                zulu = zulu.value;
                if(!(mike !== zulu)) { _fun00030_ip = 36; continue _fun00029 }
 21:
                zulu = entity.numWindowOcclusionChanges;
                zulu = zulu + 1;
                entity['numWindowOcclusionChanges'] = zulu;
 36:
                entity = entity.windowOccluded;
                entity['value'] = mike;
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'pause';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                tango = this;
                entity = tango.paused;
                entity = entity.value;
                if(entity) { _fun00032_ip = 34; continue _fun00031 }
 19:
                entity = tango.pausedCount;
                entity = entity + 1;
                tango['pausedCount'] = entity;
 34:
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                zulu = 10;
                golf = oscar[zulu];
                entity = undefined;
                offset = report.bind(entity)(golf);
                verify = offset.forEach;
                options = tango.outboundStats;
                golf = function(argFoo) {
                    mike = new Array(0);
                    entity = argFoo;
                    entity['statsWindow'] = mike;
                    entity = undefined;
                    return entity;
                };
                golf = verify.bind(offset)(options, golf);
                zulu = oscar[zulu];
                oscar = report.bind(entity)(zulu);
                report = oscar.forEach;
                zulu = tango.inboundStats;
                mike = function(argFoo) {
                    mike = new Array(0);
                    entity = argFoo;
                    entity['statsWindow'] = mike;
                    entity = undefined;
                    return entity;
                };
                mike = report.bind(oscar)(zulu, mike);
                zulu = tango.updateSendState;
                mike = {};
                report = true;
                mike['paused'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'resume';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = this;
            mike = zulu.updateSendState;
            entity = {};
            tango = false;
            entity['paused'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'stop';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = this;
            oscar = zulu.connection;
            report = oscar.off;
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            mike = mike.BaseConnectionEvent;
            tango = mike.Stats;
            mike = zulu.sampleStats;
            mike = report.bind(oscar)(tango, mike);
            tango = zulu.timestampProducer;
            mike = tango.now;
            mike = mike.bind(tango)();
            zulu['streamEnd'] = mike;
            mike = zulu.removeAllListeners;
            mike = mike.bind(zulu)();
            return entity;
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'setViewedSimulcastQuality';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                entity = argFoo;
                mike = this;
                zulu = mike.hqSimulcastStreamWatched;
                zulu = zulu.value;
                zulu = entity !== zulu;
                if(!zulu) { _fun00034_ip = 72; continue _fun00033 }
 24:
                report = mike.hqSimulcastStreamWatched;
                tango = report.totalDuration;
                tango = tango.bind(report)();
                oscar = 0;
                tango = tango > oscar;
                if(tango) { _fun00034_ip = 69; continue _fun00033 }
 49:
                golf = mike.lqSimulcastStreamWatched;
                report = golf.totalDuration;
                report = report.bind(golf)();
                tango = report > oscar;
 69:
                zulu = tango;
 72:
                if(!zulu) { _fun00034_ip = 90; continue _fun00033 }
 75:
                zulu = mike.simulcastQualityChanges;
                zulu = zulu + 1;
                mike['simulcastQualityChanges'] = zulu;
 90:
                zulu = mike.hqSimulcastStreamWatched;
                zulu['value'] = entity;
                mike = mike.lqSimulcastStreamWatched;
                entity = !entity;
                mike['value'] = entity;
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'setEligibleSimulcastQuality';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            mike = this;
            zulu = mike.hqSimulcastStreamEligible;
            zulu['value'] = entity;
            mike = mike.lqSimulcastStreamEligible;
            entity = !entity;
            mike['value'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'getNetworkStats';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity.networkQuality;
            entity = mike.getStats;
            entity = entity.bind(mike)();
            return entity;
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'getEncoderUsageStats';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                kilo = this;
                backup = global;
                entity = backup.Map;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                source = mike;
                entity = new source[entity](update);
                entity = entity instanceof Object ? entity : mike;
                romeo = kilo.outboundStats;
                golf = undefined;
                for(verify in romeo)
 53:
                {
 65:
                    oscar = verify;
                    mike = backup.Map;
                    zulu = mike.prototype;
                    zulu = Object.create(zulu, {constructor: {value: mike}});
                    source = zulu;
                    mike = new source[mike](update);
                    report = mike instanceof Object ? mike : zulu;
                    zulu = _closure1_slot10;
                    mike = kilo.outboundStats;
                    tango = mike[oscar];
                    mike = tango.getCodecsUsed;
                    mike = mike.bind(tango)();
                    tango = zulu.bind(golf)(mike);
                    zulu = tango.bind(golf)();
                    mike = zulu.done;
                    if(mike) { _fun00036_ip = 53; continue _fun00035 }
 135:
                    sizing = zulu.value;
                    mike = sizing.toUpperCase;
                    output = mike.bind(sizing)();
                    sizing = report.set;
                    result = _closure1_slot14;
                    mike = kilo.outboundStats;
                    mike = mike[oscar];
                    mike = mike.codecBuckets;
                    mike = mike[output];
                    mike = result.bind(golf)(mike);
                    mike = sizing.bind(report)(output, mike);
                    sizing = entity.set;
                    mike = backup.parseInt;
                    mike = mike.bind(golf)(oscar);
                    mike = sizing.bind(entity)(mike, report);
                    sizing = tango.bind(golf)();
                    mike = sizing.done;
                    zulu = sizing;
                    if(mike) { _fun00036_ip = 53; continue _fun00035 }
 230:
                    _fun00036_ip = 135; continue _fun00035;
                }
 232:
                return entity;
            }
        };
        report['value'] = golf;
        entity[15] = report;
        report = {};
        golf = 'getDecoderUsageStats';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                kilo = this;
                backup = global;
                entity = backup.Map;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                source = mike;
                entity = new source[entity](update);
                entity = entity instanceof Object ? entity : mike;
                romeo = kilo.inboundStats;
                golf = undefined;
                for(verify in romeo)
 53:
                {
 65:
                    oscar = verify;
                    mike = backup.Map;
                    zulu = mike.prototype;
                    zulu = Object.create(zulu, {constructor: {value: mike}});
                    source = zulu;
                    mike = new source[mike](update);
                    report = mike instanceof Object ? mike : zulu;
                    zulu = _closure1_slot10;
                    mike = kilo.inboundStats;
                    tango = mike[oscar];
                    mike = tango.getCodecsUsed;
                    mike = mike.bind(tango)();
                    tango = zulu.bind(golf)(mike);
                    zulu = tango.bind(golf)();
                    mike = zulu.done;
                    if(mike) { _fun00038_ip = 53; continue _fun00037 }
 135:
                    sizing = zulu.value;
                    mike = sizing.toUpperCase;
                    output = mike.bind(sizing)();
                    sizing = report.set;
                    result = _closure1_slot14;
                    mike = kilo.inboundStats;
                    mike = mike[oscar];
                    mike = mike.codecBuckets;
                    mike = mike[output];
                    mike = result.bind(golf)(mike);
                    mike = sizing.bind(report)(output, mike);
                    mike = entity.set;
                    mike = mike.bind(entity)(oscar, report);
                    sizing = tango.bind(golf)();
                    mike = sizing.done;
                    zulu = sizing;
                    if(mike) { _fun00038_ip = 53; continue _fun00037 }
 219:
                    _fun00038_ip = 135; continue _fun00037;
                }
 221:
                return entity;
            }
        };
        report['value'] = golf;
        entity[16] = report;
        report = {};
        golf = 'getCodecUsageStats';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                tango = argFoo;
                oscar = argBar;
                mike = this;
                zulu = mike.asymmetricCodecUpdates;
                entity = mike.symmetricCodecUpdates;
                zulu = zulu > entity;
                entity = global;
                entity = entity.Map;
                report = entity.prototype;
                report = Object.create(report, {constructor: {value: entity}});
                output = report;
                entity = new output[entity](sizing);
                report = entity instanceof Object ? entity : report;
                entity = 'sender';
                if(!(entity !== tango)) { _fun00040_ip = 427; continue _fun00039 }
 64:
                entity = 'streamer';
                if(!(entity !== tango)) { _fun00040_ip = 427; continue _fun00039 }
 77:
                entity = mike.getDecoderUsageStats;
                tango = entity.bind(mike)();
                entity = tango.has;
                entity = entity.bind(tango)(oscar);
                options = report;
                if(!entity) { _fun00040_ip = 115; continue _fun00039 }
 105:
                entity = tango.get;
                options = entity.bind(tango)(oscar);
 115:
                entity = {};
                entity['codec_asymmetric_session'] = zulu;
                golf = options.get;
                verify = _closure1_slot0;
                tango = _closure1_slot2;
                romeo = 9;
                tango = tango[romeo];
                yankee = undefined;
                tango = verify.bind(yankee)(tango);
                tango = tango.CodecTypes;
                tango = tango.H264;
                offset = golf.bind(options)(tango);
                golf = null;
                foxtrot = golf != offset;
                verify = options;
                options = 0;
                if(!foxtrot) { _fun00040_ip = 186; continue _fun00039 }
 183:
                options = offset;
 186:
                entity['codec_h264_decode_duration_sec'] = options;
                offset = verify.get;
                foxtrot = _closure1_slot0;
                options = _closure1_slot2;
                options = options[romeo];
                options = foxtrot.bind(yankee)(options);
                options = options.CodecTypes;
                options = options.H265;
                offset = offset.bind(verify)(options);
                foxtrot = golf != offset;
                options = 0;
                if(!foxtrot) { _fun00040_ip = 244; continue _fun00039 }
 241:
                options = offset;
 244:
                entity['codec_h265_decode_duration_sec'] = options;
                offset = verify.get;
                foxtrot = _closure1_slot0;
                options = _closure1_slot2;
                options = options[romeo];
                options = foxtrot.bind(yankee)(options);
                options = options.CodecTypes;
                options = options.VP8;
                offset = offset.bind(verify)(options);
                foxtrot = golf != offset;
                options = 0;
                if(!foxtrot) { _fun00040_ip = 302; continue _fun00039 }
 299:
                options = offset;
 302:
                entity['codec_vp8_decode_duration_sec'] = options;
                offset = verify.get;
                foxtrot = _closure1_slot0;
                options = _closure1_slot2;
                options = options[romeo];
                options = foxtrot.bind(yankee)(options);
                options = options.CodecTypes;
                options = options.VP9;
                offset = offset.bind(verify)(options);
                foxtrot = golf != offset;
                options = 0;
                if(!foxtrot) { _fun00040_ip = 360; continue _fun00039 }
 357:
                options = offset;
 360:
                entity['codec_vp9_decode_duration_sec'] = options;
                options = verify.get;
                offset = _closure1_slot0;
                oscar = _closure1_slot2;
                oscar = oscar[romeo];
                oscar = offset.bind(yankee)(oscar);
                oscar = oscar.CodecTypes;
                oscar = oscar.AV1;
                oscar = options.bind(verify)(oscar);
                golf = golf != oscar;
                tango = 0;
                if(!golf) { _fun00040_ip = 418; continue _fun00039 }
 415:
                tango = oscar;
 418:
                entity['codec_av1_decode_duration_sec'] = tango;
                return entity;
 427:
                entity = mike.getEncoderUsageStats;
                oscar = entity.bind(mike)();
                entity = oscar.size;
                mike = 0;
                if(!(entity > mike)) { _fun00040_ip = 496; continue _fun00039 }
 450:
                entity = oscar.keys;
                kilo = entity.bind(oscar)();
                tango = new Array(0);
                sizing = tango;
                backup = 0;
                entity = arraySpread(sizing, kilo, backup);
                entity = tango.sort;
                entity = entity.bind(tango)();
                tango = entity[mike];
                entity = oscar.get;
                report = entity.bind(oscar)(tango);
 496:
                entity = {};
                entity['codec_asymmetric_session'] = zulu;
                oscar = report.get;
                golf = _closure1_slot0;
                tango = _closure1_slot2;
                verify = 9;
                tango = tango[verify];
                options = undefined;
                tango = golf.bind(options)(tango);
                tango = tango.CodecTypes;
                tango = tango.H264;
                golf = oscar.bind(report)(tango);
                tango = null;
                offset = tango != golf;
                oscar = report;
                report = 0;
                if(!offset) { _fun00040_ip = 567; continue _fun00039 }
 564:
                report = golf;
 567:
                entity['codec_h264_encode_duration_sec'] = report;
                golf = oscar.get;
                offset = _closure1_slot0;
                report = _closure1_slot2;
                report = report[verify];
                report = offset.bind(options)(report);
                report = report.CodecTypes;
                report = report.H265;
                golf = golf.bind(oscar)(report);
                offset = tango != golf;
                report = 0;
                if(!offset) { _fun00040_ip = 625; continue _fun00039 }
 622:
                report = golf;
 625:
                entity['codec_h265_encode_duration_sec'] = report;
                golf = oscar.get;
                offset = _closure1_slot0;
                report = _closure1_slot2;
                report = report[verify];
                report = offset.bind(options)(report);
                report = report.CodecTypes;
                report = report.VP8;
                golf = golf.bind(oscar)(report);
                offset = tango != golf;
                report = 0;
                if(!offset) { _fun00040_ip = 683; continue _fun00039 }
 680:
                report = golf;
 683:
                entity['codec_vp8_encode_duration_sec'] = report;
                golf = oscar.get;
                offset = _closure1_slot0;
                report = _closure1_slot2;
                report = report[verify];
                report = offset.bind(options)(report);
                report = report.CodecTypes;
                report = report.VP9;
                golf = golf.bind(oscar)(report);
                offset = tango != golf;
                report = 0;
                if(!offset) { _fun00040_ip = 741; continue _fun00039 }
 738:
                report = golf;
 741:
                entity['codec_vp9_encode_duration_sec'] = report;
                report = oscar.get;
                golf = _closure1_slot0;
                zulu = _closure1_slot2;
                zulu = zulu[verify];
                zulu = golf.bind(options)(zulu);
                zulu = zulu.CodecTypes;
                zulu = zulu.AV1;
                zulu = report.bind(oscar)(zulu);
                tango = tango != zulu;
                mike = 0;
                if(!tango) { _fun00040_ip = 799; continue _fun00039 }
 796:
                mike = zulu;
 799:
                entity['codec_av1_encode_duration_sec'] = mike;
                return entity;
            }
        };
        report['value'] = golf;
        entity[17] = report;
        report = {};
        golf = 'getOutboundStats';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = this;
            var _closure3_slot0 = zulu;
            entity = new Array(0);
            var _closure3_slot1 = entity;
            oscar = _closure1_slot1;
            report = _closure1_slot2;
            tango = 10;
            report = report[tango];
            tango = undefined;
            report = oscar.bind(tango)(report);
            tango = report.forEach;
            zulu = zulu.outboundStats;
            mike = function(argFoo, argBar) {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    yankee = argFoo;
                    entity = argBar;
                    var _closure4_slot0 = entity;
                    entity = _closure3_slot0;
                    zulu = entity.connection;
                    oscar = null;
                    mike = oscar == zulu;
                    entity = undefined;
                    tango = undefined;
                    if(mike) { _fun00042_ip = 48; continue _fun00041 }
 38:
                    mike = zulu.getStreamParameters;
                    tango = mike.bind(zulu)();
 48:
                    mike = tango.length;
                    offset = 1;
                    if(!(mike > offset)) { _fun00042_ip = 75; continue _fun00041 }
 60:
                    zulu = tango.forEach;
                    mike = function(argFoo) {
                        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                            mike = argFoo;
                            entity = global;
                            report = entity.parseInt;
                            tango = _closure4_slot0;
                            entity = undefined;
                            report = report.bind(entity)(tango);
                            tango = mike.ssrc;
                            if(!(report === tango)) { _fun00044_ip = 60; continue _fun00043 }
 35:
                            tango = mike.quality;
                            mike = null;
                            report = mike != tango;
                            mike = 50;
                            if(!report) { _fun00044_ip = 56; continue _fun00043 }
 53:
                            mike = tango;
 56:
                            var _closure4_slot1 = mike;
 60:
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
 75:
                    report = [1, 5, 10, 25, 50, 75];
                    tango = [1, 5, 10, 25, 50, 75, 99];
                    zulu = yankee.vmafHistogram;
                    mike = zulu.getReport;
                    foxtrot = mike.bind(zulu)(report);
                    zulu = yankee.psnrHistogram;
                    mike = zulu.getReport;
                    romeo = mike.bind(zulu)(report);
                    zulu = yankee.targetBitrateHistogram;
                    mike = zulu.getReport;
                    sizing = mike.bind(zulu)(tango);
                    zulu = yankee.outboundBandwidthSurplus;
                    mike = zulu.getReport;
                    verify = mike.bind(zulu)(tango);
                    kilo = _closure3_slot0;
                    zulu = kilo.videoEntropy;
                    mike = zulu.getReport;
                    report = mike.bind(zulu)(tango);
                    zulu = yankee.aggregationDuration;
                    mike = 1000;
                    echo = zulu / mike;
                    tango = _closure3_slot1;
                    zulu = tango.push;
                    mike = {};
                    options = kilo.getStats;
                    sequence = options.bind(kilo)(yankee);
                    config = mike;
                    options = copyDataProperties(config, sequence);
                    options = 0;
                    kilo = echo > options;
                    result = 0;
                    if(!kilo) { _fun00042_ip = 280; continue _fun00041 }
 240:
                    output = global;
                    source = output.Math;
                    update = source.round;
                    control = yankee.targetFrames;
                    vacuum = oscar != control;
                    output = 0;
                    if(!vacuum) { _fun00042_ip = 271; continue _fun00041 }
 268:
                    output = control;
 271:
                    output = output / echo;
                    result = update.bind(source)(output);
 280:
                    output = 'target_fps';
                    mike[output] = result;
                    result = 0;
                    if(!kilo) { _fun00042_ip = 343; continue _fun00041 }
 296:
                    output = global;
                    source = output.Math;
                    update = source.round;
                    output = yankee.targetBytesNetwork;
                    vacuum = oscar != output;
                    control = 0;
                    if(!vacuum) { _fun00042_ip = 327; continue _fun00041 }
 324:
                    control = output;
 327:
                    output = 8;
                    output = output * control;
                    output = output / echo;
                    result = update.bind(source)(output);
 343:
                    output = 'target_bitrate_network';
                    mike[output] = result;
                    output = sizing.count;
                    output = output > options;
                    result = null;
                    if(!output) { _fun00042_ip = 378; continue _fun00041 }
 368:
                    output = sizing.percentiles;
                    result = output[offset];
 378:
                    output = 'target_bitrate_network_percentile1';
                    mike[output] = result;
                    output = sizing.count;
                    output = output > options;
                    result = null;
                    if(!output) { _fun00042_ip = 416; continue _fun00041 }
 403:
                    update = sizing.percentiles;
                    output = 5;
                    result = update[output];
 416:
                    output = 'target_bitrate_network_percentile5';
                    mike[output] = result;
                    output = sizing.count;
                    output = output > options;
                    result = null;
                    if(!output) { _fun00042_ip = 454; continue _fun00041 }
 441:
                    update = sizing.percentiles;
                    output = 10;
                    result = update[output];
 454:
                    output = 'target_bitrate_network_percentile10';
                    mike[output] = result;
                    output = sizing.count;
                    output = output > options;
                    result = null;
                    if(!output) { _fun00042_ip = 492; continue _fun00041 }
 479:
                    update = sizing.percentiles;
                    output = 25;
                    result = update[output];
 492:
                    output = 'target_bitrate_network_percentile25';
                    mike[output] = result;
                    output = sizing.count;
                    output = output > options;
                    result = null;
                    if(!output) { _fun00042_ip = 530; continue _fun00041 }
 517:
                    update = sizing.percentiles;
                    output = 50;
                    result = update[output];
 530:
                    output = 'target_bitrate_network_percentile50';
                    mike[output] = result;
                    output = sizing.count;
                    output = output > options;
                    result = null;
                    if(!output) { _fun00042_ip = 568; continue _fun00041 }
 555:
                    update = sizing.percentiles;
                    output = 75;
                    result = update[output];
 568:
                    output = 'target_bitrate_network_percentile75';
                    mike[output] = result;
                    output = sizing.count;
                    result = output > options;
                    output = null;
                    if(!result) { _fun00042_ip = 606; continue _fun00041 }
 593:
                    result = sizing.percentiles;
                    sizing = 99;
                    output = result[sizing];
 606:
                    sizing = 'target_bitrate_network_percentile99';
                    mike[sizing] = output;
                    output = 0;
                    if(!kilo) { _fun00042_ip = 669; continue _fun00041 }
 622:
                    sizing = global;
                    update = sizing.Math;
                    result = update.round;
                    sizing = yankee.targetBytesMax;
                    control = oscar != sizing;
                    source = 0;
                    if(!control) { _fun00042_ip = 653; continue _fun00041 }
 650:
                    source = sizing;
 653:
                    sizing = 8;
                    sizing = sizing * source;
                    sizing = sizing / echo;
                    output = result.bind(update)(sizing);
 669:
                    sizing = 'target_bitrate_max';
                    mike[sizing] = output;
                    sizing = 0;
                    if(!kilo) { _fun00042_ip = 732; continue _fun00041 }
 685:
                    kilo = global;
                    result = kilo.Math;
                    output = result.round;
                    kilo = yankee.outboundBytesAvailable;
                    source = oscar != kilo;
                    update = 0;
                    if(!source) { _fun00042_ip = 716; continue _fun00041 }
 713:
                    update = kilo;
 716:
                    kilo = 8;
                    kilo = kilo * update;
                    kilo = kilo / echo;
                    sizing = output.bind(result)(kilo);
 732:
                    kilo = 'outbound_bandwidth_estimate';
                    mike[kilo] = sizing;
                    kilo = verify.count;
                    kilo = kilo > options;
                    sizing = null;
                    if(!kilo) { _fun00042_ip = 767; continue _fun00041 }
 757:
                    kilo = verify.percentiles;
                    sizing = kilo[offset];
 767:
                    kilo = 'outbound_bandwidth_surplus_percentile1';
                    mike[kilo] = sizing;
                    kilo = verify.count;
                    kilo = kilo > options;
                    sizing = null;
                    if(!kilo) { _fun00042_ip = 805; continue _fun00041 }
 792:
                    output = verify.percentiles;
                    kilo = 5;
                    sizing = output[kilo];
 805:
                    kilo = 'outbound_bandwidth_surplus_percentile5';
                    mike[kilo] = sizing;
                    kilo = verify.count;
                    kilo = kilo > options;
                    sizing = null;
                    if(!kilo) { _fun00042_ip = 843; continue _fun00041 }
 830:
                    output = verify.percentiles;
                    kilo = 10;
                    sizing = output[kilo];
 843:
                    kilo = 'outbound_bandwidth_surplus_percentile10';
                    mike[kilo] = sizing;
                    kilo = verify.count;
                    kilo = kilo > options;
                    sizing = null;
                    if(!kilo) { _fun00042_ip = 881; continue _fun00041 }
 868:
                    output = verify.percentiles;
                    kilo = 25;
                    sizing = output[kilo];
 881:
                    kilo = 'outbound_bandwidth_surplus_percentile25';
                    mike[kilo] = sizing;
                    kilo = verify.count;
                    kilo = kilo > options;
                    sizing = null;
                    if(!kilo) { _fun00042_ip = 919; continue _fun00041 }
 906:
                    output = verify.percentiles;
                    kilo = 50;
                    sizing = output[kilo];
 919:
                    kilo = 'outbound_bandwidth_surplus_percentile50';
                    mike[kilo] = sizing;
                    kilo = verify.count;
                    kilo = kilo > options;
                    sizing = null;
                    if(!kilo) { _fun00042_ip = 957; continue _fun00041 }
 944:
                    output = verify.percentiles;
                    kilo = 75;
                    sizing = output[kilo];
 957:
                    kilo = 'outbound_bandwidth_surplus_percentile75';
                    mike[kilo] = sizing;
                    kilo = verify.count;
                    sizing = kilo > options;
                    kilo = null;
                    if(!sizing) { _fun00042_ip = 995; continue _fun00041 }
 982:
                    sizing = verify.percentiles;
                    verify = 99;
                    kilo = sizing[verify];
 995:
                    verify = 'outbound_bandwidth_surplus_percentile99';
                    mike[verify] = kilo;
                    sizing = _closure1_slot14;
                    update = yankee.encoderBuckets;
                    result = _closure1_slot0;
                    echo = _closure1_slot2;
                    kilo = 9;
                    output = echo[kilo];
                    output = result.bind(entity)(output);
                    output = output.Encoders;
                    output = output.NVIDIA_CUDA;
                    output = update[output];
                    update = sizing.bind(entity)(output);
                    output = 'duration_encoder_nvidia_cuda';
                    mike[output] = update;
                    update = yankee.encoderBuckets;
                    output = echo[kilo];
                    output = result.bind(entity)(output);
                    output = output.Encoders;
                    output = output.NVIDIA_DIRECT_3D;
                    output = update[output];
                    update = sizing.bind(entity)(output);
                    output = 'duration_encoder_nvidia_direct3d';
                    mike[output] = update;
                    update = yankee.encoderBuckets;
                    output = echo[kilo];
                    output = result.bind(entity)(output);
                    output = output.Encoders;
                    output = output.OPENH264;
                    output = update[output];
                    update = sizing.bind(entity)(output);
                    output = 'duration_encoder_openh264';
                    mike[output] = update;
                    update = yankee.encoderBuckets;
                    output = echo[kilo];
                    output = result.bind(entity)(output);
                    output = output.Encoders;
                    output = output.VIDEOTOOLBOX;
                    output = update[output];
                    update = sizing.bind(entity)(output);
                    output = 'duration_encoder_videotoolbox';
                    mike[output] = update;
                    update = yankee.encoderBuckets;
                    output = echo[kilo];
                    output = result.bind(entity)(output);
                    output = output.Encoders;
                    output = output.AMD_DIRECT_3D;
                    output = update[output];
                    update = sizing.bind(entity)(output);
                    output = 'duration_encoder_amd_direct3d';
                    mike[output] = update;
                    update = yankee.encoderBuckets;
                    output = echo[kilo];
                    output = result.bind(entity)(output);
                    output = output.Encoders;
                    output = output.INTEL;
                    output = update[output];
                    update = sizing.bind(entity)(output);
                    output = 'duration_encoder_intel';
                    mike[output] = update;
                    update = yankee.encoderBuckets;
                    output = echo[kilo];
                    output = result.bind(entity)(output);
                    output = output.Encoders;
                    output = output.INTEL_DIRECT_3D;
                    output = update[output];
                    update = sizing.bind(entity)(output);
                    output = 'duration_encoder_intel_direct3d';
                    mike[output] = update;
                    update = yankee.encoderBuckets;
                    output = echo[kilo];
                    output = result.bind(entity)(output);
                    output = output.Encoders;
                    output = output.VP8_LIBVPX;
                    output = update[output];
                    update = sizing.bind(entity)(output);
                    output = 'duration_encoder_vp8_libvpx';
                    mike[output] = update;
                    update = yankee.encoderBuckets;
                    output = echo[kilo];
                    output = result.bind(entity)(output);
                    output = output.Encoders;
                    output = output.UNCATEGORIZED;
                    output = update[output];
                    update = sizing.bind(entity)(output);
                    output = 'duration_encoder_uncategorized';
                    mike[output] = update;
                    output = yankee.encoderBuckets;
                    kilo = echo[kilo];
                    kilo = result.bind(entity)(kilo);
                    kilo = kilo.Encoders;
                    kilo = kilo.UNKNOWN;
                    kilo = output[kilo];
                    sizing = sizing.bind(entity)(kilo);
                    kilo = 'duration_encoder_unknown';
                    mike[kilo] = sizing;
                    kilo = _closure4_slot1;
                    backup = 'quality';
                    mike[backup] = kilo;
                    kilo = yankee.averageEncodeTime;
                    backup = 'average_encode_time_ms';
                    mike[backup] = kilo;
                    backup = yankee.vmafScoreNum;
                    backup = backup > options;
                    kilo = null;
                    if(!backup) { _fun00042_ip = 1555; continue _fun00041 }
 1539:
                    sizing = yankee.vmafScoreSum;
                    backup = yankee.vmafScoreNum;
                    kilo = sizing / backup;
 1555:
                    backup = 'average_encoder_vmaf_score';
                    mike[backup] = kilo;
                    backup = foxtrot.count;
                    backup = backup > options;
                    kilo = null;
                    if(!backup) { _fun00042_ip = 1590; continue _fun00041 }
 1580:
                    backup = foxtrot.percentiles;
                    kilo = backup[offset];
 1590:
                    backup = 'encoder_vmaf_score_percentile1';
                    mike[backup] = kilo;
                    backup = foxtrot.count;
                    backup = backup > options;
                    kilo = null;
                    if(!backup) { _fun00042_ip = 1628; continue _fun00041 }
 1615:
                    sizing = foxtrot.percentiles;
                    backup = 5;
                    kilo = sizing[backup];
 1628:
                    backup = 'encoder_vmaf_score_percentile5';
                    mike[backup] = kilo;
                    backup = foxtrot.count;
                    backup = backup > options;
                    kilo = null;
                    if(!backup) { _fun00042_ip = 1666; continue _fun00041 }
 1653:
                    sizing = foxtrot.percentiles;
                    backup = 10;
                    kilo = sizing[backup];
 1666:
                    backup = 'encoder_vmaf_score_percentile10';
                    mike[backup] = kilo;
                    backup = foxtrot.count;
                    backup = backup > options;
                    kilo = null;
                    if(!backup) { _fun00042_ip = 1704; continue _fun00041 }
 1691:
                    sizing = foxtrot.percentiles;
                    backup = 25;
                    kilo = sizing[backup];
 1704:
                    backup = 'encoder_vmaf_score_percentile25';
                    mike[backup] = kilo;
                    backup = foxtrot.count;
                    backup = backup > options;
                    kilo = null;
                    if(!backup) { _fun00042_ip = 1742; continue _fun00041 }
 1729:
                    sizing = foxtrot.percentiles;
                    backup = 50;
                    kilo = sizing[backup];
 1742:
                    backup = 'encoder_vmaf_score_percentile50';
                    mike[backup] = kilo;
                    backup = foxtrot.count;
                    kilo = backup > options;
                    backup = null;
                    if(!kilo) { _fun00042_ip = 1780; continue _fun00041 }
 1767:
                    kilo = foxtrot.percentiles;
                    foxtrot = 75;
                    backup = kilo[foxtrot];
 1780:
                    foxtrot = 'encoder_vmaf_score_percentile75';
                    mike[foxtrot] = backup;
                    foxtrot = yankee.psnrDbNum;
                    foxtrot = foxtrot > options;
                    backup = null;
                    if(!foxtrot) { _fun00042_ip = 1822; continue _fun00041 }
 1806:
                    kilo = yankee.psnrDbSum;
                    foxtrot = yankee.psnrDbNum;
                    backup = kilo / foxtrot;
 1822:
                    foxtrot = 'average_encoder_psnr_db';
                    mike[foxtrot] = backup;
                    foxtrot = romeo.count;
                    foxtrot = foxtrot > options;
                    backup = null;
                    if(!foxtrot) { _fun00042_ip = 1857; continue _fun00041 }
 1847:
                    foxtrot = romeo.percentiles;
                    backup = foxtrot[offset];
 1857:
                    foxtrot = 'encoder_psnr_db_percentile1';
                    mike[foxtrot] = backup;
                    foxtrot = romeo.count;
                    foxtrot = foxtrot > options;
                    backup = null;
                    if(!foxtrot) { _fun00042_ip = 1895; continue _fun00041 }
 1882:
                    kilo = romeo.percentiles;
                    foxtrot = 5;
                    backup = kilo[foxtrot];
 1895:
                    foxtrot = 'encoder_psnr_db_percentile5';
                    mike[foxtrot] = backup;
                    foxtrot = romeo.count;
                    foxtrot = foxtrot > options;
                    backup = null;
                    if(!foxtrot) { _fun00042_ip = 1933; continue _fun00041 }
 1920:
                    kilo = romeo.percentiles;
                    foxtrot = 10;
                    backup = kilo[foxtrot];
 1933:
                    foxtrot = 'encoder_psnr_db_percentile10';
                    mike[foxtrot] = backup;
                    foxtrot = romeo.count;
                    foxtrot = foxtrot > options;
                    backup = null;
                    if(!foxtrot) { _fun00042_ip = 1971; continue _fun00041 }
 1958:
                    kilo = romeo.percentiles;
                    foxtrot = 25;
                    backup = kilo[foxtrot];
 1971:
                    foxtrot = 'encoder_psnr_db_percentile25';
                    mike[foxtrot] = backup;
                    foxtrot = romeo.count;
                    foxtrot = foxtrot > options;
                    backup = null;
                    if(!foxtrot) { _fun00042_ip = 2009; continue _fun00041 }
 1996:
                    kilo = romeo.percentiles;
                    foxtrot = 50;
                    backup = kilo[foxtrot];
 2009:
                    foxtrot = 'encoder_psnr_db_percentile50';
                    mike[foxtrot] = backup;
                    foxtrot = romeo.count;
                    backup = foxtrot > options;
                    foxtrot = null;
                    if(!backup) { _fun00042_ip = 2047; continue _fun00041 }
 2034:
                    backup = romeo.percentiles;
                    romeo = 75;
                    foxtrot = backup[romeo];
 2047:
                    romeo = 'encoder_psnr_db_percentile75';
                    mike[romeo] = foxtrot;
                    romeo = yankee.outboundSinkWantNum;
                    romeo = romeo > options;
                    foxtrot = null;
                    if(!romeo) { _fun00042_ip = 2089; continue _fun00041 }
 2073:
                    backup = yankee.outboundSinkWantSum;
                    romeo = yankee.outboundSinkWantNum;
                    foxtrot = backup / romeo;
 2089:
                    romeo = 'average_outbound_want';
                    mike[romeo] = foxtrot;
                    foxtrot = yankee.framesDroppedRateLimiter;
                    romeo = 'frames_dropped_rate_limiter';
                    mike[romeo] = foxtrot;
                    foxtrot = yankee.framesDroppedEncoderQueue;
                    romeo = 'frames_dropped_encoder_queue';
                    mike[romeo] = foxtrot;
                    foxtrot = yankee.framesDroppedCongestionWindow;
                    romeo = 'frames_dropped_congestion_window';
                    mike[romeo] = foxtrot;
                    romeo = yankee.framesDroppedEncoder;
                    yankee = 'frames_dropped_encoder';
                    mike[yankee] = romeo;
                    verify = _closure1_slot14;
                    golf = _closure3_slot0;
                    romeo = golf.hqSimulcastStreamEncoded;
                    yankee = romeo.totalDurationSeconds;
                    yankee = yankee.bind(romeo)();
                    romeo = verify.bind(entity)(yankee);
                    yankee = 'duration_hq_simulcast_stream_encoded';
                    mike[yankee] = romeo;
                    romeo = golf.lqSimulcastStreamEncoded;
                    yankee = romeo.totalDurationSeconds;
                    yankee = yankee.bind(romeo)();
                    romeo = verify.bind(entity)(yankee);
                    yankee = 'duration_lq_simulcast_stream_encoded';
                    mike[yankee] = romeo;
                    romeo = golf.bothSimulcastStreamsEncoded;
                    yankee = romeo.totalDurationSeconds;
                    yankee = yankee.bind(romeo)();
                    romeo = verify.bind(entity)(yankee);
                    yankee = 'duration_both_simulcast_streams_encoded';
                    mike[yankee] = romeo;
                    romeo = golf.bandwidthLimitedFramerate;
                    yankee = romeo.totalDurationSeconds;
                    yankee = yankee.bind(romeo)();
                    romeo = verify.bind(entity)(yankee);
                    yankee = 'duration_fps_bandwidth_limited';
                    mike[yankee] = romeo;
                    yankee = golf.bandwidthLimitedResolution;
                    golf = yankee.totalDurationSeconds;
                    golf = golf.bind(yankee)();
                    verify = verify.bind(entity)(golf);
                    golf = 'duration_resolution_bandwidth_limited';
                    mike[golf] = verify;
                    golf = report.count;
                    golf = golf > options;
                    verify = null;
                    if(!golf) { _fun00042_ip = 2360; continue _fun00041 }
 2350:
                    golf = report.percentiles;
                    verify = golf[offset];
 2360:
                    golf = 'video_entropy_percentile1';
                    mike[golf] = verify;
                    golf = report.count;
                    golf = golf > options;
                    verify = null;
                    if(!golf) { _fun00042_ip = 2398; continue _fun00041 }
 2385:
                    offset = report.percentiles;
                    golf = 5;
                    verify = offset[golf];
 2398:
                    golf = 'video_entropy_percentile5';
                    mike[golf] = verify;
                    golf = report.count;
                    golf = golf > options;
                    verify = null;
                    if(!golf) { _fun00042_ip = 2436; continue _fun00041 }
 2423:
                    offset = report.percentiles;
                    golf = 10;
                    verify = offset[golf];
 2436:
                    golf = 'video_entropy_percentile10';
                    mike[golf] = verify;
                    golf = report.count;
                    golf = golf > options;
                    verify = null;
                    if(!golf) { _fun00042_ip = 2474; continue _fun00041 }
 2461:
                    offset = report.percentiles;
                    golf = 25;
                    verify = offset[golf];
 2474:
                    golf = 'video_entropy_percentile25';
                    mike[golf] = verify;
                    golf = report.count;
                    golf = golf > options;
                    verify = null;
                    if(!golf) { _fun00042_ip = 2512; continue _fun00041 }
 2499:
                    offset = report.percentiles;
                    golf = 50;
                    verify = offset[golf];
 2512:
                    golf = 'video_entropy_percentile50';
                    mike[golf] = verify;
                    golf = report.count;
                    golf = golf > options;
                    verify = null;
                    if(!golf) { _fun00042_ip = 2550; continue _fun00041 }
 2537:
                    offset = report.percentiles;
                    golf = 75;
                    verify = offset[golf];
 2550:
                    golf = 'video_entropy_percentile75';
                    mike[golf] = verify;
                    golf = report.count;
                    golf = golf > options;
                    oscar = null;
                    if(!golf) { _fun00042_ip = 2588; continue _fun00041 }
 2575:
                    golf = report.percentiles;
                    report = 99;
                    oscar = golf[report];
 2588:
                    report = 'video_entropy_percentile99';
                    mike[report] = oscar;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        report['value'] = golf;
        entity[18] = report;
        report = {};
        golf = 'getInboundStats';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = this;
            mike = zulu.getStats;
            tango = zulu.inboundStats;
            entity = argFoo;
            entity = tango[entity];
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[19] = report;
        report = {};
        golf = 'destroyUser';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            mike = entity.inboundStats;
            entity = argFoo;
            entity = delete mike[entity];
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[20] = report;
        report = {};
        golf = 'getInboundParticipants';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 11;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.keys;
            entity = this;
            entity = entity.inboundStats;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[21] = report;
        report = {};
        golf = 'updateSendState';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                mike = argFoo;
                entity = this;
                zulu = mike.paused;
                tango = null;
                if(!(tango != zulu)) { _fun00046_ip = 36; continue _fun00045 }
 18:
                report = entity.paused;
                zulu = mike.paused;
                report['value'] = zulu;
 36:
                zulu = mike.receivers;
                if(!(tango != zulu)) { _fun00046_ip = 70; continue _fun00045 }
 46:
                zulu = entity.zeroReceivers;
                tango = mike.receivers;
                mike = 0;
                mike = mike === tango;
                zulu['value'] = mike;
 70:
                mike = entity.paused;
                zulu = mike.value;
                if(zulu) { _fun00046_ip = 95; continue _fun00045 }
 84:
                mike = entity.zeroReceivers;
                zulu = mike.value;
 95:
                mike = entity.videoStopped;
                mike = mike.value;
                tango = entity.videoStopped;
                tango['value'] = zulu;
                if(!(zulu !== mike)) { _fun00046_ip = 171; continue _fun00045 }
 122:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 10;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.forEach;
                mike = entity.outboundStats;
                entity = function(argFoo) {
                    entity = new Array(0);
                    mike = argFoo;
                    mike['statsWindow'] = entity;
                    return entity;
                };
                entity = zulu.bind(tango)(mike, entity);
 171:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[22] = report;
        report = {};
        golf = 'getStats';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                mike = argFoo;
                report = this;
                sierra = null;
                if(!(sierra == mike)) { _fun00048_ip = 16; continue _fun00047 }
 12:
                entity = undefined;
                return entity;
 16:
                context = global;
                zulu = context.Number;
                entity = report.streamStart;
                variable37 = undefined;
                tango = zulu.bind(variable37)(entity);
                entity = report.streamEnd;
                if(!(sierra == entity)) { _fun00048_ip = 68; continue _fun00047 }
 47:
                zulu = report.timestampProducer;
                entity = zulu.now;
                entity = entity.bind(zulu)();
                zulu = entity - tango;
                _fun00048_ip = 78; continue _fun00047;
 68:
                entity = report.streamEnd;
                zulu = entity - tango;
 78:
                oscar = context.Math;
                tango = oscar.max;
                entity = mike.aggregationDuration;
                update = 0;
                entity = tango.bind(oscar)(entity, update);
                oscar = 1000;
                target = entity / oscar;
                golf = [1, 5, 10, 25, 50, 75];
                tango = mike.fpsHistogram;
                entity = tango.getReport;
                verify = entity.bind(tango)(golf);
                options = mike.bitrateHistogram;
                tango = options.getReport;
                entity = [1, 5, 10, 25, 50, 75, 99];
                kilo = tango.bind(options)(entity);
                tango = mike.resolutionHistogram;
                entity = tango.getReport;
                sizing = entity.bind(tango)(golf);
                golf = mike.inboundBitrateEstimateHistogram;
                tango = golf.getReport;
                entity = [1, 5, 10, 25, 50, 75, 99];
                options = tango.bind(golf)(entity);
                golf = mike.localWantHistogram;
                tango = golf.getReport;
                entity = [1, 5, 10, 25, 50, 75, 90, 95];
                golf = tango.bind(golf)(entity);
                tango = mike.systemResources;
                entity = tango.getStats;
                entity = entity.bind(tango)();
                record = {};
                offset = context.Math;
                tango = offset.floor;
                zulu = zulu / oscar;
                zulu = tango.bind(offset)(zulu);
                record['duration'] = zulu;
                backup = _closure1_slot14;
                tango = backup.bind(variable37)(target);
                record['duration_aggregation'] = tango;
                offset = mike.videoStoppedDuration;
                tango = offset.asSeconds;
                tango = tango.bind(offset)();
                tango = backup.bind(variable37)(tango);
                record['duration_stopped_receiving'] = tango;
                offset = mike.bitrateBuckets;
                tango = 8000000;
                tango = offset[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_stream_under_8mbps'] = tango;
                offset = mike.bitrateBuckets;
                tango = 7000000;
                tango = offset[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_stream_under_7mbps'] = tango;
                offset = mike.bitrateBuckets;
                tango = 6000000;
                tango = offset[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_stream_under_6mbps'] = tango;
                offset = mike.bitrateBuckets;
                tango = 5000000;
                tango = offset[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_stream_under_5mbps'] = tango;
                offset = mike.bitrateBuckets;
                tango = 4000000;
                tango = offset[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_stream_under_4mbps'] = tango;
                offset = mike.bitrateBuckets;
                tango = 3000000;
                tango = offset[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_stream_under_3mbps'] = tango;
                offset = mike.bitrateBuckets;
                tango = 2000000;
                tango = offset[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_stream_under_2mbps'] = tango;
                offset = mike.bitrateBuckets;
                tango = 1500000;
                tango = offset[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_stream_under_1_5mbps'] = tango;
                offset = mike.bitrateBuckets;
                tango = 1000000;
                tango = offset[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_stream_under_1mbps'] = tango;
                offset = mike.bitrateBuckets;
                tango = 500000;
                tango = offset[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_stream_under_0_5mbps'] = tango;
                tango = mike.bitrateBuckets;
                tango = tango[update];
                tango = backup.bind(variable37)(tango);
                record['duration_stream_at_0mbps'] = tango;
                offset = mike.fpsBuckets;
                tango = 60;
                tango = offset[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_fps_under_60'] = tango;
                offset = mike.fpsBuckets;
                tango = 55;
                tango = offset[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_fps_under_55'] = tango;
                tango = mike.fpsBuckets;
                offset = 50;
                tango = tango[offset];
                tango = backup.bind(variable37)(tango);
                record['duration_fps_under_50'] = tango;
                yankee = mike.fpsBuckets;
                tango = 45;
                tango = yankee[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_fps_under_45'] = tango;
                yankee = mike.fpsBuckets;
                tango = 40;
                tango = yankee[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_fps_under_40'] = tango;
                yankee = mike.fpsBuckets;
                tango = 35;
                tango = yankee[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_fps_under_35'] = tango;
                yankee = mike.fpsBuckets;
                tango = 30;
                tango = yankee[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_fps_under_30'] = tango;
                tango = mike.fpsBuckets;
                yankee = 25;
                tango = tango[yankee];
                tango = backup.bind(variable37)(tango);
                record['duration_fps_under_25'] = tango;
                romeo = mike.fpsBuckets;
                tango = 20;
                tango = romeo[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_fps_under_20'] = tango;
                romeo = mike.fpsBuckets;
                tango = 15;
                tango = romeo[tango];
                tango = backup.bind(variable37)(tango);
                record['duration_fps_under_15'] = tango;
                tango = mike.fpsBuckets;
                romeo = 10;
                tango = tango[romeo];
                tango = backup.bind(variable37)(tango);
                record['duration_fps_under_10'] = tango;
                tango = mike.fpsBuckets;
                foxtrot = 5;
                tango = tango[foxtrot];
                tango = backup.bind(variable37)(tango);
                record['duration_fps_under_5'] = tango;
                tango = mike.fpsBuckets;
                tango = tango[update];
                tango = backup.bind(variable37)(tango);
                record['duration_fps_at_0'] = tango;
                tango = mike.intervalTotal;
                backup = tango > update;
                tango = 0;
                if(!backup) { _fun00048_ip = 1001; continue _fun00047 }
 969:
                result = context.Math;
                output = result.round;
                echo = mike.resolutionTotal;
                backup = mike.intervalTotal;
                backup = echo / backup;
                tango = output.bind(result)(backup);
 1001:
                record['avg_resolution'] = tango;
                tango = mike.intervalTotal;
                backup = tango > update;
                tango = 0;
                if(!backup) { _fun00048_ip = 1053; continue _fun00047 }
 1021:
                result = context.Math;
                output = result.round;
                echo = mike.minorResolutionTotal;
                backup = mike.intervalTotal;
                backup = echo / backup;
                tango = output.bind(result)(backup);
 1053:
                record['avg_minor_resolution'] = tango;
                tango = mike.intervalTotal;
                backup = tango > update;
                tango = 0;
                if(!backup) { _fun00048_ip = 1107; continue _fun00047 }
 1075:
                result = context.Math;
                output = result.round;
                echo = mike.majorResolutionTotal;
                backup = mike.intervalTotal;
                backup = echo / backup;
                tango = output.bind(result)(backup);
 1107:
                record['avg_major_resolution'] = tango;
                tango = _closure1_slot14;
                output = mike.resolutionBuckets;
                backup = 720;
                backup = output[backup];
                backup = tango.bind(variable37)(backup);
                record['duration_resolution_under_720'] = backup;
                output = mike.resolutionBuckets;
                backup = 480;
                backup = output[backup];
                backup = tango.bind(variable37)(backup);
                record['duration_resolution_under_480'] = backup;
                output = mike.resolutionBuckets;
                backup = 360;
                backup = output[backup];
                backup = tango.bind(variable37)(backup);
                record['duration_resolution_under_360'] = backup;
                backup = report.pausedCount;
                record['num_pauses'] = backup;
                output = report.paused;
                backup = output.totalDuration;
                backup = backup.bind(output)();
                backup = backup / oscar;
                backup = tango.bind(variable37)(backup);
                record['duration_paused'] = backup;
                output = report.zeroReceivers;
                backup = output.totalDuration;
                backup = backup.bind(output)();
                backup = backup / oscar;
                backup = tango.bind(variable37)(backup);
                record['duration_zero_receivers'] = backup;
                output = report.videoStopped;
                backup = output.totalDuration;
                backup = backup.bind(output)();
                backup = backup / oscar;
                backup = tango.bind(variable37)(backup);
                record['duration_video_stopped'] = backup;
                output = report.hqSimulcastStreamWatched;
                backup = output.totalDurationSeconds;
                backup = backup.bind(output)();
                backup = tango.bind(variable37)(backup);
                record['duration_hq_simulcast_stream_watched'] = backup;
                output = report.lqSimulcastStreamWatched;
                backup = output.totalDurationSeconds;
                backup = backup.bind(output)();
                backup = tango.bind(variable37)(backup);
                record['duration_lq_simulcast_stream_watched'] = backup;
                output = report.hqSimulcastStreamEligible;
                backup = output.totalDurationSeconds;
                backup = backup.bind(output)();
                backup = tango.bind(variable37)(backup);
                record['duration_hq_simulcast_stream_eligible'] = backup;
                output = report.lqSimulcastStreamEligible;
                backup = output.totalDurationSeconds;
                backup = backup.bind(output)();
                backup = tango.bind(variable37)(backup);
                record['duration_lq_simulcast_stream_eligible'] = backup;
                backup = report.simulcastQualityChanges;
                record['num_quality_changes'] = backup;
                output = report.windowOccluded;
                backup = output.totalDurationSeconds;
                backup = backup.bind(output)();
                backup = tango.bind(variable37)(backup);
                record['duration_window_occluded'] = backup;
                output = report.videoStoppedForOcclusion;
                backup = output.totalDurationSeconds;
                backup = backup.bind(output)();
                backup = tango.bind(variable37)(backup);
                record['duration_incoming_video_stopped_for_occlusion'] = backup;
                backup = report.numWindowOcclusionChanges;
                record['num_window_occlusion_changes'] = backup;
                output = verify.percentiles;
                backup = 1;
                output = output[backup];
                record['fps_percentile1'] = output;
                output = verify.percentiles;
                output = output[foxtrot];
                record['fps_percentile5'] = output;
                output = verify.percentiles;
                output = output[romeo];
                record['fps_percentile10'] = output;
                output = verify.percentiles;
                output = output[yankee];
                record['fps_percentile25'] = output;
                output = verify.percentiles;
                output = output[offset];
                record['fps_percentile50'] = output;
                output = verify.percentiles;
                verify = 75;
                output = output[verify];
                record['fps_percentile75'] = output;
                output = kilo.percentiles;
                output = output[backup];
                record['bitrate_percentile1'] = output;
                output = kilo.percentiles;
                output = output[foxtrot];
                record['bitrate_percentile5'] = output;
                output = kilo.percentiles;
                output = output[romeo];
                record['bitrate_percentile10'] = output;
                output = kilo.percentiles;
                output = output[yankee];
                record['bitrate_percentile25'] = output;
                output = kilo.percentiles;
                output = output[offset];
                record['bitrate_percentile50'] = output;
                output = kilo.percentiles;
                output = output[verify];
                record['bitrate_percentile75'] = output;
                output = kilo.percentiles;
                kilo = 99;
                output = output[kilo];
                record['bitrate_percentile99'] = output;
                output = sizing.percentiles;
                output = output[backup];
                record['resolution_percentile1'] = output;
                output = sizing.percentiles;
                output = output[foxtrot];
                record['resolution_percentile5'] = output;
                output = sizing.percentiles;
                output = output[romeo];
                record['resolution_percentile10'] = output;
                output = sizing.percentiles;
                output = output[yankee];
                record['resolution_percentile25'] = output;
                output = sizing.percentiles;
                output = output[offset];
                record['resolution_percentile50'] = output;
                sizing = sizing.percentiles;
                sizing = sizing[verify];
                record['resolution_percentile75'] = sizing;
                sizing = options.percentiles;
                sizing = sizing[backup];
                record['inbound_bitrate_estimate_percentile1'] = sizing;
                sizing = options.percentiles;
                sizing = sizing[foxtrot];
                record['inbound_bitrate_estimate_percentile5'] = sizing;
                sizing = options.percentiles;
                sizing = sizing[romeo];
                record['inbound_bitrate_estimate_percentile10'] = sizing;
                sizing = options.percentiles;
                sizing = sizing[yankee];
                record['inbound_bitrate_estimate_percentile25'] = sizing;
                sizing = options.percentiles;
                sizing = sizing[offset];
                record['inbound_bitrate_estimate_percentile50'] = sizing;
                sizing = options.percentiles;
                sizing = sizing[verify];
                record['inbound_bitrate_estimate_percentile75'] = sizing;
                options = options.percentiles;
                options = options[kilo];
                record['inbound_bitrate_estimate_percentile99'] = options;
                options = golf.percentiles;
                options = options[backup];
                record['local_want_percentile1'] = options;
                options = golf.percentiles;
                options = options[foxtrot];
                record['local_want_percentile5'] = options;
                options = golf.percentiles;
                options = options[romeo];
                record['local_want_percentile10'] = options;
                options = golf.percentiles;
                options = options[yankee];
                record['local_want_percentile25'] = options;
                options = golf.percentiles;
                options = options[offset];
                record['local_want_percentile50'] = options;
                options = golf.percentiles;
                options = options[verify];
                record['local_want_percentile75'] = options;
                verify = golf.percentiles;
                options = 90;
                options = verify[options];
                record['local_want_percentile90'] = options;
                verify = golf.percentiles;
                options = 95;
                options = verify[options];
                record['local_want_percentile95'] = options;
                golf = golf.mean;
                record['average_local_want'] = golf;
                golf = report.videoEffectDuration;
                report = golf.totalDuration;
                report = report.bind(golf)();
                report = report / oscar;
                report = tango.bind(variable37)(report);
                record['duration_video_effect'] = report;
                report = mike.cryptorMaxAttempts;
                record['cryptor_max_attempts'] = report;
                report = mike.decoderBuckets;
                variable36 = _closure1_slot0;
                variable38 = _closure1_slot2;
                quebec = 9;
                zulu = variable38[quebec];
                zulu = variable36.bind(variable37)(zulu);
                zulu = zulu.Decoders;
                zulu = zulu.FFMPEG;
                zulu = report[zulu];
                zulu = tango.bind(variable37)(zulu);
                record['duration_decoder_ffmpeg'] = zulu;
                report = mike.decoderBuckets;
                zulu = variable38[quebec];
                zulu = variable36.bind(variable37)(zulu);
                zulu = zulu.Decoders;
                zulu = zulu.DAV1D;
                zulu = report[zulu];
                zulu = tango.bind(variable37)(zulu);
                record['duration_decoder_dav1d'] = zulu;
                report = mike.decoderBuckets;
                zulu = variable38[quebec];
                zulu = variable36.bind(variable37)(zulu);
                zulu = zulu.Decoders;
                zulu = zulu.VP8_LIBVPX;
                zulu = report[zulu];
                zulu = tango.bind(variable37)(zulu);
                record['duration_decoder_vp8_libvpx'] = zulu;
                report = mike.decoderBuckets;
                zulu = variable38[quebec];
                zulu = variable36.bind(variable37)(zulu);
                zulu = zulu.Decoders;
                zulu = zulu.ELECTRON;
                zulu = report[zulu];
                zulu = tango.bind(variable37)(zulu);
                record['duration_decoder_electron'] = zulu;
                report = mike.decoderBuckets;
                zulu = variable38[quebec];
                zulu = variable36.bind(variable37)(zulu);
                zulu = zulu.Decoders;
                zulu = zulu.VIDEOTOOLBOX;
                zulu = report[zulu];
                zulu = tango.bind(variable37)(zulu);
                record['duration_decoder_videotoolbox'] = zulu;
                report = mike.decoderBuckets;
                zulu = variable38[quebec];
                zulu = variable36.bind(variable37)(zulu);
                zulu = zulu.Decoders;
                zulu = zulu.UNCATEGORIZED;
                zulu = report[zulu];
                zulu = tango.bind(variable37)(zulu);
                record['duration_decoder_uncategorized'] = zulu;
                report = mike.decoderBuckets;
                zulu = variable38[quebec];
                zulu = variable36.bind(variable37)(zulu);
                zulu = zulu.Decoders;
                zulu = zulu.UNKNOWN;
                zulu = report[zulu];
                zulu = tango.bind(variable37)(zulu);
                record['duration_decoder_unknown'] = zulu;
                variable40 = record;
                variable39 = entity;
                entity = copyDataProperties(variable40, variable39);
                zulu = mike.aggregatedProperties;
                config = zulu.bytes;
                echo = zulu.framesDropped;
                source = zulu.framesCodecError;
                status = zulu.framesCodec;
                control = zulu.framesNetwork;
                vacuum = zulu.packets;
                sequence = zulu.packetsLost;
                result = zulu.nackCount;
                output = zulu.pliCount;
                sizing = zulu.qpSum;
                equality = zulu.pauseCount;
                lima = zulu.freezeCount;
                whiskey = zulu.totalPausesDuration;
                papa = zulu.totalFreezesDuration;
                entity = zulu.totalFramesDuration;
                kilo = zulu.keyframes;
                backup = zulu.passthroughCount;
                foxtrot = zulu.cryptorSuccessCount;
                romeo = zulu.cryptorFailureCount;
                yankee = zulu.cryptorDuration;
                offset = zulu.cryptorAttempts;
                verify = zulu.cryptorMissingKeyCount;
                options = zulu.cryptorInvalidNonceCount;
                golf = zulu.qualityDecodeErrors;
                oscar = zulu.qualityDecoderReboots;
                report = zulu.qualityScoreErrors;
                tango = zulu.qualityFrameDrops;
                zulu = zulu.qualitySizeMismatches;
                quebec = variable38[quebec];
                quebec = variable36.bind(variable37)(quebec);
                quebec = quebec.OutboundStats;
                quebec = mike instanceof quebec;
                if(quebec) { _fun00048_ip = 2714; continue _fun00047 }
 2672:
                record['receiver_freeze_count'] = lima;
                record['receiver_total_freezes_duration'] = papa;
                record['receiver_total_frames_duration'] = entity;
                record['receiver_pause_count'] = equality;
                record['receiver_total_pauses_duration'] = whiskey;
                _fun00048_ip = 2738; continue _fun00047;
 2714:
                record['sender_freeze_count'] = lima;
                record['sender_total_freezes_duration'] = papa;
                record['sender_total_frames_duration'] = entity;
 2738:
                entity = {};
                variable40 = entity;
                variable39 = record;
                record = copyDataProperties(variable40, variable39);
                papa = target > update;
                lima = 0;
                if(!papa) { _fun00048_ip = 2798; continue _fun00047 }
 2759:
                equality = context.Math;
                whiskey = equality.round;
                record = sierra != config;
                quebec = 0;
                if(!record) { _fun00048_ip = 2782; continue _fun00047 }
 2779:
                quebec = config;
 2782:
                record = 8;
                record = record * quebec;
                record = record / target;
                lima = whiskey.bind(equality)(record);
 2798:
                record = 'avg_bitrate';
                entity[record] = lima;
                record = 0;
                if(!papa) { _fun00048_ip = 2844; continue _fun00047 }
 2812:
                papa = context.Math;
                context = papa.round;
                sierra = sierra != status;
                update = 0;
                if(!sierra) { _fun00048_ip = 2835; continue _fun00047 }
 2832:
                update = status;
 2835:
                update = update / target;
                record = context.bind(papa)(update);
 2844:
                update = 'avg_fps';
                entity[update] = record;
                update = 'num_bytes';
                entity[update] = config;
                update = 'num_packets_lost';
                entity[update] = sequence;
                update = 'num_packets';
                entity[update] = vacuum;
                update = 'num_frames';
                entity[update] = control;
                update = 'num_frames_codec_error';
                entity[update] = source;
                update = mike.timeToFirstFrame;
                mike = 'time_to_first_frame_ms';
                entity[mike] = update;
                mike = 'num_frames_dropped';
                entity[mike] = echo;
                mike = 'num_nacks';
                entity[mike] = result;
                mike = 'num_plis';
                entity[mike] = output;
                mike = 'qp_sum';
                entity[mike] = sizing;
                mike = 'num_keyframes';
                entity[mike] = kilo;
                mike = 'cryptor_passthrough_count';
                entity[mike] = backup;
                mike = 'cryptor_success_count';
                entity[mike] = foxtrot;
                mike = 'cryptor_failure_count';
                entity[mike] = romeo;
                mike = 'cryptor_duration';
                entity[mike] = yankee;
                mike = 'cryptor_attempts';
                entity[mike] = offset;
                mike = 'cryptor_missing_key_count';
                entity[mike] = verify;
                mike = 'cryptor_invalid_nonce_count';
                entity[mike] = options;
                mike = 'encoder_quality_decode_errors';
                entity[mike] = golf;
                mike = 'encoder_quality_decoder_reboots';
                entity[mike] = oscar;
                mike = 'encoder_quality_score_errors';
                entity[mike] = report;
                mike = 'encoder_quality_frame_drops';
                entity[mike] = tango;
                mike = 'encoder_quality_size_mismatches';
                entity[mike] = zulu;
                return entity;
            }
        };
        report['value'] = golf;
        entity[23] = report;
        report = {};
        golf = 'receivedStats';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                oscar = argBar;
                foxtrot = argBaz;
                zulu = this;
                var _closure3_slot0 = zulu;
                entity = argFoo;
                var _closure3_slot1 = entity;
                var _closure3_slot2 = foxtrot;
                tango = oscar.transport;
                var _closure3_slot3 = tango;
                options = _closure1_slot0;
                report = _closure1_slot2;
                entity = 12;
                report = report[entity];
                entity = undefined;
                options = options.bind(entity)(report);
                report = options.isWeb;
                report = report.bind(options)();
                offset = 1;
                if(report) { _fun00050_ip = 114; continue _fun00049 }
 77:
                options = tango.receiverReports;
                tango = null;
                verify = tango == options;
                report = undefined;
                if(verify) { _fun00050_ip = 99; continue _fun00049 }
 94:
                report = options.length;
 99:
                options = tango != report;
                tango = 0;
                if(!options) { _fun00050_ip = 111; continue _fun00049 }
 108:
                tango = report;
 111:
                offset = tango;
 114:
                tango = global;
                report = tango.Set;
                options = report.prototype;
                options = Object.create(options, {constructor: {value: report}});
                sizing = options;
                report = new sizing[report](kilo);
                report = report instanceof Object ? report : options;
                var _closure3_slot4 = report;
                tango = tango.Set;
                options = tango.prototype;
                options = Object.create(options, {constructor: {value: tango}});
                sizing = options;
                tango = new sizing[tango](kilo);
                tango = tango instanceof Object ? tango : options;
                var _closure3_slot5 = tango;
                verify = zulu.updateSendState;
                options = {};
                options['receivers'] = offset;
                options = verify.bind(zulu)(options);
                verify = _closure1_slot1;
                options = _closure1_slot2;
                offset = 10;
                options = options[offset];
                yankee = verify.bind(entity)(options);
                verify = yankee.max;
                romeo = foxtrot.map;
                options = function(argFoo) {
                    entity = argFoo;
                    entity = entity.quality;
                    return entity;
                };
                options = romeo.bind(foxtrot)(options);
                options = verify.bind(yankee)(options);
                var _closure3_slot6 = options;
                options = oscar.rtp;
                yankee = options.outbound;
                verify = yankee.filter;
                options = function(argFoo) {
                    _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                        tango = argFoo;
                        mike = tango.type;
                        entity = 'video';
                        entity = entity === mike;
                        if(!entity) { _fun00052_ip = 40; continue _fun00051 }
 19:
                        zulu = null;
                        report = zulu == tango;
                        mike = undefined;
                        if(report) { _fun00052_ip = 36; continue _fun00051 }
 30:
                        mike = tango.videoEntropy;
 36:
                        entity = zulu != mike;
 40:
                        return entity;
                    }
                };
                verify = verify.bind(yankee)(options);
                options = 0;
                yankee = verify[options];
                verify = null;
                romeo = verify == yankee;
                verify = undefined;
                if(romeo) { _fun00050_ip = 293; continue _fun00049 }
 287:
                verify = yankee.videoEntropy;
 293:
                var _closure3_slot7 = verify;
                verify = oscar.rtp;
                romeo = verify.outbound;
                yankee = romeo.filter;
                verify = function(argFoo) {
                    entity = argFoo;
                    mike = entity.type;
                    entity = 'video';
                    entity = entity === mike;
                    return entity;
                };
                romeo = yankee.bind(romeo)(verify);
                yankee = romeo.forEach;
                verify = function(argFoo) {
                    _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                        zulu = argFoo;
                        entity = null;
                        if(!(entity != zulu)) { _fun00054_ip = 1058; continue _fun00053 }
 14:
                        yankee = zulu.ssrc;
                        var _closure4_slot0 = yankee;
                        report = _closure3_slot0;
                        report = report.outboundStats;
                        report = report[yankee];
                        if(!(entity == report)) { _fun00054_ip = 119; continue _fun00053 }
 45:
                        options = _closure1_slot0;
                        golf = _closure1_slot2;
                        oscar = 9;
                        golf = golf[oscar];
                        oscar = undefined;
                        oscar = options.bind(oscar)(golf);
                        verify = oscar.OutboundStats;
                        golf = _closure3_slot0;
                        result = golf.timestampProducer;
                        options = verify.prototype;
                        options = Object.create(options, {constructor: {value: verify}});
                        echo = options;
                        oscar = new echo[verify](result, output);
                        oscar = oscar instanceof Object ? oscar : options;
                        golf = golf.outboundStats;
                        golf[yankee] = oscar;
                        report = oscar;
 119:
                        oscar = report.timeToFirstFrame;
                        oscar = entity == oscar;
                        if(!oscar) { _fun00054_ip = 172; continue _fun00053 }
 132:
                        golf = zulu.framesEncoded;
                        verify = 0;
                        golf = golf > verify;
                        if(golf) { _fun00054_ip = 169; continue _fun00053 }
 147:
                        offset = zulu.frameRateInput;
                        romeo = entity != offset;
                        options = 0;
                        if(!romeo) { _fun00054_ip = 165; continue _fun00053 }
 162:
                        options = offset;
 165:
                        golf = options > verify;
 169:
                        oscar = golf;
 172:
                        if(!oscar) { _fun00054_ip = 216; continue _fun00053 }
 175:
                        oscar = global;
                        verify = oscar.Math;
                        options = verify.max;
                        golf = _closure3_slot1;
                        oscar = report.startTime;
                        golf = golf - oscar;
                        oscar = 0;
                        oscar = options.bind(verify)(oscar, golf);
                        report['timeToFirstFrame'] = oscar;
 216:
                        oscar = _closure3_slot7;
                        oscar = entity != oscar;
                        if(!oscar) { _fun00054_ip = 237; continue _fun00053 }
 227:
                        options = _closure3_slot7;
                        golf = 0;
                        oscar = options >= golf;
 237:
                        if(!oscar) { _fun00054_ip = 265; continue _fun00053 }
 240:
                        oscar = _closure3_slot0;
                        options = oscar.videoEntropy;
                        golf = options.addSample;
                        oscar = _closure3_slot7;
                        oscar = golf.bind(options)(oscar);
 265:
                        golf = _closure3_slot2;
                        oscar = golf.find;
                        tango = function(argFoo) {
                            entity = argFoo;
                            mike = entity.ssrc;
                            entity = _closure4_slot0;
                            entity = mike === entity;
                            return entity;
                        };
                        tango = oscar.bind(golf)(tango);
                        oscar = _closure3_slot0;
                        oscar = oscar.connection;
                        offset = oscar.context;
                        verify = _closure1_slot0;
                        options = _closure1_slot2;
                        golf = 8;
                        options = options[golf];
                        golf = undefined;
                        options = verify.bind(golf)(options);
                        options = options.MediaEngineContextTypes;
                        options = options.STREAM;
                        verify = true;
                        if(!(offset === options)) { _fun00054_ip = 451; continue _fun00053 }
 342:
                        options = _closure3_slot0;
                        offset = options.connection;
                        options = offset.getRemoteVideoSinkWants;
                        offset = options.bind(offset)(yankee);
                        options = entity != offset;
                        if(!options) { _fun00054_ip = 376; continue _fun00053 }
 370:
                        yankee = 0;
                        options = yankee !== offset;
 376:
                        if(options) { _fun00054_ip = 402; continue _fun00053 }
 379:
                        yankee = entity == tango;
                        romeo = undefined;
                        if(yankee) { _fun00054_ip = 394; continue _fun00053 }
 388:
                        romeo = tango.quality;
 394:
                        yankee = _closure3_slot6;
                        options = romeo !== yankee;
 402:
                        yankee = offset;
                        if(options) { _fun00054_ip = 433; continue _fun00053 }
 408:
                        options = _closure3_slot0;
                        romeo = options.connection;
                        offset = romeo.getRemoteVideoSinkWants;
                        options = 'any';
                        yankee = offset.bind(romeo)(options);
 433:
                        romeo = entity != yankee;
                        offset = 0;
                        options = 0;
                        if(!romeo) { _fun00054_ip = 447; continue _fun00053 }
 444:
                        options = yankee;
 447:
                        verify = options > offset;
 451:
                        options = _closure3_slot0;
                        options = options.videoStopped;
                        options = options.value;
                        if(options) { _fun00054_ip = 472; continue _fun00053 }
 469:
                        options = !verify;
 472:
                        verify = report.isVideoStopped;
                        if(!(options !== verify)) { _fun00054_ip = 526; continue _fun00053 }
 482:
                        offset = report.setVideoStopped;
                        yankee = _closure1_slot0;
                        romeo = _closure1_slot2;
                        verify = 9;
                        verify = romeo[verify];
                        verify = yankee.bind(golf)(verify);
                        verify = verify.VideoStoppedReasons;
                        verify = verify.SenderStopped;
                        verify = offset.bind(report)(options, verify);
 526:
                        if(options) { _fun00054_ip = 1058; continue _fun00053 }
 532:
                        yankee = report.appendAndIncrementStats;
                        verify = _closure1_slot0;
                        offset = _closure1_slot2;
                        oscar = 9;
                        options = offset[oscar];
                        options = verify.bind(golf)(options);
                        foxtrot = options.RawVideoStats;
                        romeo = foxtrot.parseOutboundStats;
                        options = _closure3_slot1;
                        options = romeo.bind(foxtrot)(zulu, options);
                        options = yankee.bind(report)(options);
                        options = report.encoderCodec;
                        oscar = offset[oscar];
                        oscar = verify.bind(golf)(oscar);
                        oscar = oscar.CodecTypes;
                        oscar = oscar.UNKNOWN;
                        if(!(options !== oscar)) { _fun00054_ip = 638; continue _fun00053 }
 618:
                        verify = _closure3_slot4;
                        options = verify.add;
                        oscar = report.encoderCodec;
                        oscar = options.bind(verify)(oscar);
 638:
                        oscar = entity == tango;
                        verify = undefined;
                        if(oscar) { _fun00054_ip = 653; continue _fun00053 }
 647:
                        verify = tango.maxBitrate;
 653:
                        options = report.appendTargetRates;
                        oscar = entity == tango;
                        golf = undefined;
                        if(oscar) { _fun00054_ip = 676; continue _fun00053 }
 670:
                        golf = tango.maxFrameRate;
 676:
                        oscar = zulu.bitrateTarget;
                        if(!(entity == oscar)) { _fun00054_ip = 739; continue _fun00053 }
 686:
                        tango = global;
                        romeo = tango.Math;
                        yankee = romeo.min;
                        tango = _closure3_slot3;
                        foxtrot = tango.availableOutgoingBitrate;
                        backup = entity != foxtrot;
                        tango = 0;
                        if(!backup) { _fun00054_ip = 721; continue _fun00053 }
 718:
                        tango = foxtrot;
 721:
                        foxtrot = entity != verify;
                        offset = 0;
                        if(!foxtrot) { _fun00054_ip = 733; continue _fun00053 }
 730:
                        offset = verify;
 733:
                        oscar = yankee.bind(romeo)(tango, offset);
 739:
                        tango = _closure3_slot3;
                        kilo = tango.availableOutgoingBitrate;
                        echo = report;
                        result = golf;
                        output = oscar;
                        sizing = verify;
                        tango = echo[options](result, output, sizing, kilo, backup);
                        oscar = zulu.averageEncodeTime;
                        golf = entity != oscar;
                        tango = 0;
                        if(!golf) { _fun00054_ip = 783; continue _fun00053 }
 780:
                        tango = oscar;
 783:
                        report['averageEncodeTime'] = tango;
                        oscar = zulu.framesDroppedRateLimiter;
                        golf = entity != oscar;
                        tango = null;
                        if(!golf) { _fun00054_ip = 807; continue _fun00053 }
 804:
                        tango = oscar;
 807:
                        report['framesDroppedRateLimiter'] = tango;
                        oscar = zulu.framesDroppedEncoderQueue;
                        golf = entity != oscar;
                        tango = null;
                        if(!golf) { _fun00054_ip = 831; continue _fun00053 }
 828:
                        tango = oscar;
 831:
                        report['framesDroppedEncoderQueue'] = tango;
                        oscar = zulu.framesDroppedCongestionWindow;
                        golf = entity != oscar;
                        tango = null;
                        if(!golf) { _fun00054_ip = 855; continue _fun00053 }
 852:
                        tango = oscar;
 855:
                        report['framesDroppedCongestionWindow'] = tango;
                        oscar = zulu.framesDroppedEncoder;
                        golf = entity != oscar;
                        tango = null;
                        if(!golf) { _fun00054_ip = 879; continue _fun00053 }
 876:
                        tango = oscar;
 879:
                        report['framesDroppedEncoder'] = tango;
                        tango = _closure3_slot0;
                        report = tango.hqSimulcastStreamEncoded;
                        oscar = zulu.hqSimulcastStreamEncoded;
                        tango = entity != oscar;
                        if(!tango) { _fun00054_ip = 911; continue _fun00053 }
 908:
                        tango = oscar;
 911:
                        report['value'] = tango;
                        tango = _closure3_slot0;
                        report = tango.lqSimulcastStreamEncoded;
                        oscar = zulu.lqSimulcastStreamEncoded;
                        tango = entity != oscar;
                        if(!tango) { _fun00054_ip = 943; continue _fun00053 }
 940:
                        tango = oscar;
 943:
                        report['value'] = tango;
                        tango = _closure3_slot0;
                        report = tango.bothSimulcastStreamsEncoded;
                        tango = tango.hqSimulcastStreamEncoded;
                        tango = tango.value;
                        if(!tango) { _fun00054_ip = 988; continue _fun00053 }
 973:
                        oscar = _closure3_slot0;
                        oscar = oscar.lqSimulcastStreamEncoded;
                        tango = oscar.value;
 988:
                        report['value'] = tango;
                        tango = _closure3_slot0;
                        report = tango.bandwidthLimitedResolution;
                        oscar = zulu.bandwidthLimitedResolution;
                        tango = entity != oscar;
                        if(!tango) { _fun00054_ip = 1020; continue _fun00053 }
 1017:
                        tango = oscar;
 1020:
                        report['value'] = tango;
                        mike = _closure3_slot0;
                        mike = mike.bandwidthLimitedFramerate;
                        zulu = zulu.bandwidthLimitedFrameRate;
                        entity = entity != zulu;
                        if(!entity) { _fun00054_ip = 1052; continue _fun00053 }
 1049:
                        entity = zulu;
 1052:
                        mike['value'] = entity;
 1058:
                        entity = undefined;
                        return entity;
                    }
                };
                verify = yankee.bind(romeo)(verify);
                verify = zulu.paused;
                verify = verify.value;
                if(verify) { _fun00050_ip = 398; continue _fun00049 }
 353:
                verify = _closure1_slot1;
                golf = _closure1_slot2;
                golf = golf[offset];
                offset = verify.bind(entity)(golf);
                verify = offset.forEach;
                oscar = oscar.rtp;
                golf = oscar.inbound;
                oscar = function(argFoo, argBar) {
                    _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                        zulu = argFoo;
                        backup = argBar;
                        mike = zulu.find;
                        entity = function(argFoo) {
                            entity = argFoo;
                            mike = entity.type;
                            entity = 'video';
                            entity = entity === mike;
                            return entity;
                        };
                        tango = mike.bind(zulu)(entity);
                        oscar = null;
                        if(!(oscar != tango)) { _fun00056_ip = 386; continue _fun00055 }
 32:
                        mike = _closure3_slot0;
                        mike = mike.inboundStats;
                        mike = mike[backup];
                        if(!(oscar == mike)) { _fun00056_ip = 127; continue _fun00055 }
 53:
                        golf = _closure1_slot0;
                        report = _closure1_slot2;
                        zulu = 9;
                        report = report[zulu];
                        zulu = undefined;
                        zulu = golf.bind(zulu)(report);
                        options = zulu.InboundStats;
                        report = _closure3_slot0;
                        result = report.timestampProducer;
                        golf = options.prototype;
                        golf = Object.create(golf, {constructor: {value: options}});
                        echo = golf;
                        zulu = new echo[options](result, output);
                        zulu = zulu instanceof Object ? zulu : golf;
                        report = report.inboundStats;
                        report[backup] = zulu;
                        mike = zulu;
 127:
                        golf = _closure1_slot0;
                        report = _closure1_slot2;
                        offset = 9;
                        report = report[offset];
                        verify = undefined;
                        report = golf.bind(verify)(report);
                        options = report.RawVideoStats;
                        golf = options.parseInboundStats;
                        report = _closure3_slot1;
                        golf = golf.bind(options)(tango, report);
                        report = _closure3_slot0;
                        options = report.statCollectionPausedUsers;
                        report = options.has;
                        report = report.bind(options)(backup);
                        if(report) { _fun00056_ip = 227; continue _fun00055 }
 199:
                        report = mike.appendAndIncrementStats;
                        report = report.bind(mike)(golf);
                        options = mike.appendTransportStats;
                        report = _closure3_slot3;
                        report = options.bind(mike)(report);
 227:
                        options = golf.packets;
                        report = 0;
                        if(!(options > report)) { _fun00056_ip = 281; continue _fun00055 }
 239:
                        foxtrot = _closure3_slot0;
                        romeo = foxtrot.emit;
                        options = _closure1_slot9;
                        result = options.FpsUpdate;
                        sizing = golf.framesCodec;
                        kilo = golf.timestamp;
                        echo = foxtrot;
                        output = backup;
                        golf = echo[romeo](result, output, sizing, kilo, backup);
 281:
                        golf = mike.decoderCodec;
                        options = _closure1_slot0;
                        zulu = _closure1_slot2;
                        zulu = zulu[offset];
                        zulu = options.bind(verify)(zulu);
                        zulu = zulu.CodecTypes;
                        zulu = zulu.UNKNOWN;
                        if(!(golf !== zulu)) { _fun00056_ip = 340; continue _fun00055 }
 320:
                        options = _closure3_slot5;
                        golf = options.add;
                        zulu = mike.decoderCodec;
                        zulu = golf.bind(options)(zulu);
 340:
                        zulu = mike.timeToFirstFrame;
                        zulu = oscar == zulu;
                        if(!zulu) { _fun00056_ip = 363; continue _fun00055 }
 353:
                        tango = tango.framesDecoded;
                        zulu = tango > report;
 363:
                        if(!zulu) { _fun00056_ip = 386; continue _fun00055 }
 366:
                        zulu = _closure3_slot1;
                        entity = mike.startTime;
                        entity = zulu - entity;
                        mike['timeToFirstFrame'] = entity;
 386:
                        entity = undefined;
                        return entity;
                    }
                };
                oscar = verify.bind(offset)(golf, oscar);
 398:
                oscar = report.size;
                oscar = options !== oscar;
                if(!oscar) { _fun00050_ip = 419; continue _fun00049 }
 410:
                golf = tango.size;
                oscar = options !== golf;
 419:
                if(!oscar) { _fun00050_ip = 468; continue _fun00049 }
 422:
                mike = function(argFoo, argBar) { // Original name: setsAreEqual
                    _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                        report = argFoo;
                        entity = argBar;
                        var _closure4_slot0 = entity;
                        zulu = report.size;
                        entity = entity.size;
                        entity = zulu === entity;
                        if(!entity) { _fun00058_ip = 63; continue _fun00057 }
 29:
                        zulu = global;
                        tango = zulu.Array;
                        zulu = tango.from;
                        tango = zulu.bind(tango)(report);
                        zulu = tango.every;
                        mike = function(argFoo) {
                            zulu = _closure4_slot0;
                            mike = zulu.has;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        entity = zulu.bind(tango)(mike);
 63:
                        return entity;
                    }
                };
                mike = mike.bind(entity)(report, tango);
                if(mike) { _fun00050_ip = 453; continue _fun00049 }
 436:
                mike = zulu.asymmetricCodecUpdates;
                mike = mike + 1;
                zulu['asymmetricCodecUpdates'] = mike;
                _fun00050_ip = 468; continue _fun00049;
 453:
                mike = zulu.symmetricCodecUpdates;
                mike = mike + 1;
                zulu['symmetricCodecUpdates'] = mike;
 468:
                return entity;
            }
        };
        report['value'] = golf;
        entity[24] = report;
        report = {};
        golf = 'updateSystemResourceStats';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                oscar = this;
                tango = oscar.outboundStats;
                for(entity in tango)
 17:
                {
 26:
                    options = entity;
                    golf = oscar.outboundStats;
                    options = golf[options];
                    golf = options.addSystemResources;
                    golf = golf.bind(options)();
                    _fun00060_ip = 17; continue _fun00059;
                }
 51:
                tango = oscar.inboundStats;
                for(entity in tango)
 65:
                {
 74:
                    options = entity;
                    golf = oscar.inboundStats;
                    options = golf[options];
                    golf = options.addSystemResources;
                    golf = golf.bind(options)();
                    _fun00060_ip = 65; continue _fun00059;
                }
 99:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[25] = report;
        report = {};
        golf = 'updateVideoEffectStats';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                mike = argFoo;
                report = null;
                zulu = report == mike;
                entity = undefined;
                tango = undefined;
                if(zulu) { _fun00062_ip = 45; continue _fun00061 }
 16:
                mike = mike.rtp;
                oscar = mike.outbound;
                zulu = oscar.find;
                mike = function(argFoo) {
                    entity = argFoo;
                    mike = entity.type;
                    entity = 'video';
                    entity = entity === mike;
                    return entity;
                };
                tango = zulu.bind(oscar)(mike);
 45:
                mike = this;
                zulu = mike.videoEffectDuration;
                mike = report == tango;
                oscar = undefined;
                if(mike) { _fun00062_ip = 68; continue _fun00061 }
 63:
                oscar = tango.type;
 68:
                mike = 'video';
                mike = mike === oscar;
                if(!mike) { _fun00062_ip = 88; continue _fun00061 }
 79:
                tango = tango.filter;
                mike = report != tango;
 88:
                zulu['value'] = mike;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[26] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(report);
    report = 14;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'lib/VideoQuality.tsx';
    report = oscar.bind(golf)(report);
    zulu['VideoQualityEvent'] = tango;
    zulu['VideoQuality'] = mike;
    return entity;
})();