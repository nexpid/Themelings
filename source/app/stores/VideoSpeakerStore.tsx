// app/stores/VideoSpeakerStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot8;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot7;
            entity = _closure1_slot19;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot8;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot19 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    yankee = function() { // Original name: updateSpeaker
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = arguments[0];
            entity = undefined;
            if(!(zulu === entity)) { _fun00006_ip = 13; continue _fun00005 }
 11:
            zulu = true;
 13:
            var _closure2_slot0 = entity;
            var _closure2_slot1 = entity;
            tango = _closure1_slot3;
            golf = null;
            oscar = golf == tango;
            tango = null;
            if(oscar) { _fun00006_ip = 541; continue _fun00005 }
 42:
            verify = _closure1_slot10;
            options = verify.getSelectedParticipantId;
            oscar = _closure1_slot3;
            options = options.bind(verify)(oscar);
            verify = _closure1_slot11;
            oscar = verify.getLastActiveStream;
            foxtrot = oscar.bind(verify)();
            oscar = golf != options;
            offset = null;
            if(!oscar) { _fun00006_ip = 104; continue _fun00005 }
 84:
            yankee = _closure1_slot10;
            verify = yankee.getParticipant;
            oscar = _closure1_slot3;
            offset = verify.bind(yankee)(oscar, options);
 104:
            oscar = golf == offset;
            verify = undefined;
            if(oscar) { _fun00006_ip = 118; continue _fun00005 }
 113:
            verify = offset.type;
 118:
            oscar = _closure1_slot15;
            oscar = oscar.ACTIVITY;
            oscar = verify !== oscar;
            if(!oscar) { _fun00006_ip = 191; continue _fun00005 }
 135:
            verify = golf == offset;
            yankee = undefined;
            if(verify) { _fun00006_ip = 149; continue _fun00005 }
 144:
            yankee = offset.type;
 149:
            verify = _closure1_slot15;
            verify = verify.USER;
            verify = yankee !== verify;
            if(verify) { _fun00006_ip = 188; continue _fun00005 }
 166:
            yankee = offset.voiceState;
            offset = golf != yankee;
            if(!offset) { _fun00006_ip = 185; continue _fun00005 }
 179:
            offset = yankee.selfVideo;
 185:
            verify = offset;
 188:
            oscar = verify;
 191:
            if(oscar) { _fun00006_ip = 196; continue _fun00005 }
 194:
            options = null;
 196:
            oscar = options;
            if(!(golf != foxtrot)) { _fun00006_ip = 278; continue _fun00005 }
 203:
            oscar = options;
            if(!(golf == oscar)) { _fun00006_ip = 278; continue _fun00005 }
 210:
            yankee = _closure1_slot10;
            offset = yankee.getParticipant;
            verify = _closure1_slot3;
            romeo = _closure1_slot0;
            backup = _closure1_slot2;
            options = 11;
            options = backup[options];
            romeo = romeo.bind(entity)(options);
            options = romeo.encodeStreamKey;
            options = options.bind(romeo)(foxtrot);
            verify = offset.bind(yankee)(verify, options);
            offset = golf == verify;
            options = undefined;
            if(offset) { _fun00006_ip = 275; continue _fun00005 }
 270:
            options = verify.id;
 275:
            oscar = options;
 278:
            tango = oscar;
            if(!(golf == tango)) { _fun00006_ip = 541; continue _fun00005 }
 288:
            options = _closure1_slot12;
            oscar = options.getId;
            oscar = oscar.bind(options)();
            _closure2_slot0 = oscar;
            options = _closure1_slot1;
            verify = _closure1_slot2;
            oscar = 12;
            oscar = verify[oscar];
            options = options.bind(entity)(oscar);
            offset = _closure1_slot10;
            verify = offset.getVideoParticipants;
            oscar = _closure1_slot3;
            oscar = verify.bind(offset)(oscar);
            verify = options.bind(entity)(oscar);
            options = verify.filter;
            oscar = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = argFoo;
                    tango = mike.type;
                    entity = _closure1_slot15;
                    entity = entity.USER;
                    entity = tango === entity;
                    if(!entity) { _fun00008_ip = 49; continue _fun00007 }
 28:
                    tango = mike.user;
                    report = tango.id;
                    tango = _closure2_slot0;
                    entity = report !== tango;
 49:
                    if(!entity) { _fun00008_ip = 80; continue _fun00007 }
 52:
                    tango = _closure1_slot13;
                    zulu = tango.isLocalVideoDisabled;
                    mike = mike.user;
                    mike = mike.id;
                    mike = zulu.bind(tango)(mike);
                    entity = !mike;
 80:
                    return entity;
                }
            };
            oscar = options.bind(verify)(oscar);
            verify = oscar.map;
            options = function(argFoo) {
                entity = argFoo;
                entity = entity.user;
                entity = entity.id;
                return entity;
            };
            verify = verify.bind(oscar)(options);
            options = global;
            offset = options.Date;
            options = offset.now;
            options = options.bind(offset)();
            _closure2_slot1 = options;
            offset = oscar.map;
            options = function(argFoo) {
                mike = argFoo;
                entity = mike.user;
                zulu = entity.id;
                entity = new Array(2);
                entity[0] = zulu;
                report = _closure1_slot14;
                tango = report.getSpeakingDuration;
                mike = mike.user;
                zulu = mike.id;
                mike = _closure2_slot1;
                mike = tango.bind(report)(zulu, mike);
                entity[1] = mike;
                return entity;
            };
            yankee = offset.bind(oscar)(options);
            offset = yankee.filter;
            options = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tango = argFoo;
                    entity = tango[Symbol.iterator];
                    tango = entity().next;
                    mike = tango().value;
                    mike = entity;
                    oscar = undefined;
                    zulu = mike === oscar;
                    mike = undefined;
                    if(zulu) { _fun00010_ip = 49; continue _fun00009 }
 24:
                    report = tango().value;
                    tango = entity;
                    tango = tango === oscar;
                    mike = undefined;
                    zulu = tango;
                    if(tango) { _fun00010_ip = 49; continue _fun00009 }
 43:
                    mike = report;
                    zulu = tango;
 49:
                    if(zulu) { _fun00010_ip = 55; continue _fun00009 }
 52:
                    entity.return();
 55:
                    entity = 0;
                    entity = entity !== mike;
                    return entity;
                }
            };
            offset = offset.bind(yankee)(options);
            options = offset.maxBy;
            report = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tango = argFoo;
                    mike = tango[Symbol.iterator];
                    tango = mike().next;
                    entity = tango().value;
                    entity = mike;
                    oscar = undefined;
                    zulu = entity === oscar;
                    entity = undefined;
                    if(zulu) { _fun00012_ip = 49; continue _fun00011 }
 24:
                    report = tango().value;
                    tango = mike;
                    tango = tango === oscar;
                    entity = undefined;
                    zulu = tango;
                    if(tango) { _fun00012_ip = 49; continue _fun00011 }
 43:
                    entity = report;
                    zulu = tango;
 49:
                    if(zulu) { _fun00012_ip = 55; continue _fun00011 }
 52:
                    mike.return();
 55:
                    entity = -entity;
                    return entity;
                }
            };
            offset = options.bind(offset)(report);
            options = golf == offset;
            report = undefined;
            if(options) { _fun00006_ip = 462; continue _fun00005 }
 456:
            options = 0;
            report = offset[options];
 462:
            tango = report;
            if(!(golf == tango)) { _fun00006_ip = 541; continue _fun00005 }
 469:
            report = _closure1_slot4;
            if(!(golf != report)) { _fun00006_ip = 494; continue _fun00005 }
 477:
            options = verify.has;
            report = _closure1_slot4;
            report = options.bind(verify)(report);
            if(report) { _fun00006_ip = 537; continue _fun00005 }
 494:
            report = oscar.first;
            oscar = report.bind(oscar)();
            options = golf == oscar;
            report = undefined;
            if(options) { _fun00006_ip = 532; continue _fun00005 }
 513:
            oscar = oscar.user;
            golf = golf == oscar;
            report = undefined;
            if(golf) { _fun00006_ip = 532; continue _fun00005 }
 527:
            report = oscar.id;
 532:
            tango = report;
            _fun00006_ip = 541; continue _fun00005;
 537:
            tango = _closure1_slot4;
 541:
            report = _closure1_slot4;
            if(!(report !== tango)) { _fun00006_ip = 570; continue _fun00005 }
 549:
            var _closure1_slot4 = tango;
            if(!zulu) { _fun00006_ip = 570; continue _fun00005 }
 556:
            zulu = _closure1_slot17;
            mike = zulu.emitChange;
            mike = mike.bind(zulu)();
 570:
            return entity;
        }
    };
    var _closure1_slot20 = yankee;
    golf = function() { // Original name: handleChannelRTCUpdate
        mike = _closure1_slot16;
        entity = undefined;
        entity = mike.bind(entity)();
        entity = false;
        return entity;
    };
    var _closure1_slot21 = golf;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot12 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot13 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot14 = mike;
    mike = 10;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.ParticipantTypes;
    var _closure1_slot15 = mike;
    mike = 12;
    mike = oscar[mike];
    offset = options.bind(entity)(mike);
    verify = offset.debounce;
    mike = 300;
    mike = verify.bind(offset)(yankee, mike);
    var _closure1_slot16 = mike;
    mike = 13;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    verify = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: VideoSpeakerStoreClass
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot5;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot18;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot9;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot6;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tango = this;
            options = tango.waitFor;
            foxtrot = _closure1_slot10;
            romeo = _closure1_slot12;
            yankee = _closure1_slot14;
            offset = _closure1_slot11;
            verify = _closure1_slot13;
            backup = tango;
            mike = backup[options](foxtrot, romeo, yankee, offset, verify, options);
            zulu = tango.syncWith;
            report = _closure1_slot10;
            mike = new Array(2);
            mike[0] = report;
            report = _closure1_slot11;
            mike[1] = report;
            entity = _closure1_slot21;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'getSpeaker';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                zulu = _closure1_slot3;
                if(!(zulu !== entity)) { _fun00014_ip = 31; continue _fun00013 }
 14:
                var _closure1_slot3 = entity;
                tango = _closure1_slot20;
                zulu = undefined;
                entity = false;
                entity = tango.bind(zulu)(entity);
 31:
                entity = _closure1_slot4;
                zulu = null;
                if(!(zulu == entity)) { _fun00014_ip = 55; continue _fun00013 }
 41:
                zulu = _closure1_slot12;
                mike = zulu.getId;
                entity = mike.bind(zulu)();
 55:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = mike.bind(entity)(verify);
    mike = 'VideoSpeakerStore';
    verify['displayName'] = mike;
    mike = 14;
    mike = oscar[mike];
    backup = options.bind(entity)(mike);
    mike = {};
    mike['AUDIO_SET_LOCAL_VIDEO_DISABLED'] = golf;
    golf = verify.prototype;
    golf = Object.create(golf, {constructor: {value: verify}});
    kilo = golf;
    foxtrot = mike;
    mike = new kilo[verify](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot17 = mike;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/VideoSpeakerStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();