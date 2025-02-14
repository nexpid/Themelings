// discord_common/js/packages/media-engine/native/ui/DirectVideo.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun50261: for(var _fun50261_ip = 0; ; ) switch(_fun50261_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun50261_ip = 46; continue _fun50261 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun50261_ip = 55; continue _fun50261 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun50261_ip = 343; continue _fun50261 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun50261_ip = 323; continue _fun50261 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun50261_ip = 283; continue _fun50261 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun50261_ip = 270; continue _fun50261 }
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
            if(!golf) { _fun50261_ip = 163; continue _fun50261 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun50261_ip = 179; continue _fun50261 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun50261_ip = 249; continue _fun50261 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun50261_ip = 249; continue _fun50261 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun50261_ip = 234; continue _fun50261 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun50261_ip = 247; continue _fun50261 }
 234:
            verify = _closure1_slot11;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun50261_ip = 265; continue _fun50261;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun50261_ip = 283; continue _fun50261;
 270:
            golf = _closure1_slot11;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun50261_ip = 323; continue _fun50261 }
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
            if(!tango) { _fun50261_ip = 330; continue _fun50261 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun50262: for(var _fun50262_ip = 0; ; ) switch(_fun50262_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun50262_ip = 56; continue _fun50262 }
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
                    _fun50262_ip = 67; continue _fun50262;
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
        _fun50263: for(var _fun50263_ip = 0; ; ) switch(_fun50263_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun50263_ip = 23; continue _fun50263 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun50263_ip = 33; continue _fun50263 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun50263_ip = 70; continue _fun50263 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun50263_ip = 55; continue _fun50263 }
 70:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: releaseDirectVideoStream
        _fun50264: for(var _fun50264_ip = 0; ; ) switch(_fun50264_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot9;
            mike = tango.get;
            report = mike.bind(tango)(zulu);
            mike = null;
            mike = mike != report;
            if(!mike) { _fun50264_ip = 39; continue _fun50264 }
 29:
            tango = report.release;
            mike = tango.bind(report)();
 39:
            if(!mike) { _fun50264_ip = 101; continue _fun50264 }
 42:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 5;
            tango = tango[mike];
            mike = undefined;
            tango = report.bind(mike)(tango);
            mike = tango.getVoiceEngine;
            tango = mike.bind(tango)();
            mike = tango.removeDirectVideoOutputSink;
            mike = mike.bind(tango)(zulu);
            mike = _closure1_slot9;
            entity = mike.delete;
            entity = entity.bind(mike)(zulu);
 101:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    mike = function(argFoo, argBar) { // Original name: DirectVideo
        tango = argFoo;
        verify = tango.streamId;
        var _closure2_slot0 = verify;
        offset = tango.paused;
        var _closure2_slot1 = offset;
        romeo = tango.onReady;
        var _closure2_slot2 = romeo;
        yankee = tango.onResize;
        var _closure2_slot3 = yankee;
        options = tango.className;
        mike = {'streamId': 0, 'paused': 0, 'onReady': 0, 'onResize': 0, 'className': 0};
        golf = null;
        sizing = mike;
        kilo = null;
        entity = silentSetPrototypeOf(sizing, kilo);
        sizing = {};
        kilo = tango;
        backup = mike;
        entity = copyDataProperties(sizing, kilo, backup);
        report = _closure1_slot5;
        tango = report.useRef;
        report = tango.bind(report)(golf);
        var _closure2_slot4 = report;
        oscar = _closure1_slot5;
        tango = oscar.useRef;
        tango = tango.bind(oscar)(golf);
        var _closure2_slot5 = tango;
        golf = _closure1_slot5;
        oscar = golf.useRef;
        tango = {'width': 0, 'height': 0};
        tango = oscar.bind(golf)(tango);
        var _closure2_slot6 = tango;
        golf = _closure1_slot5;
        oscar = golf.useRef;
        tango = {};
        tango['streamId'] = verify;
        tango['paused'] = offset;
        tango['onReady'] = romeo;
        tango['onResize'] = yankee;
        yankee = argBar;
        tango['onContainerResized'] = yankee;
        tango = oscar.bind(golf)(tango);
        var _closure2_slot7 = tango;
        yankee = _closure1_slot5;
        golf = yankee.useLayoutEffect;
        oscar = function() {
            _fun50266: for(var _fun50266_ip = 0; ; ) switch(_fun50266_ip) {
 0:
                mike = _closure2_slot4;
                report = mike.current;
                zulu = global;
                golf = zulu.ResizeObserver;
                mike = golf.prototype;
                tango = Object.create(mike, {constructor: {value: golf}});
                sizing = function(argFoo) {
                    _fun50267: for(var _fun50267_ip = 0; ; ) switch(_fun50267_ip) {
 0:
                        zulu = _closure1_slot10;
                        entity = undefined;
                        mike = argFoo;
                        verify = zulu.bind(entity)(mike);
                        zulu = verify.bind(entity)();
                        mike = zulu.done;
                        golf = global;
                        oscar = null;
                        report = zulu;
                        tango = undefined;
                        zulu = undefined;
                        if(mike) { _fun50267_ip = 208; continue _fun50267 }
 46:
                        mike = report.value;
                        yankee = mike.target;
                        offset = _closure2_slot5;
                        offset = offset.current;
                        if(!(yankee === offset)) { _fun50267_ip = 190; continue _fun50267 }
 70:
                        offset = golf.window;
                        yankee = offset.devicePixelRatio;
                        offset = mike.target;
                        offset = offset.clientWidth;
                        offset = yankee * offset;
                        yankee = golf.window;
                        yankee = yankee.devicePixelRatio;
                        mike = mike.target;
                        mike = mike.clientHeight;
                        mike = yankee * mike;
                        yankee = _closure2_slot7;
                        yankee = yankee.current;
                        yankee = yankee.onContainerResized;
                        tango = offset;
                        zulu = mike;
                        if(!(oscar != yankee)) { _fun50267_ip = 190; continue _fun50267 }
 151:
                        yankee = _closure2_slot7;
                        foxtrot = yankee.current;
                        romeo = foxtrot.onContainerResized;
                        yankee = yankee.current;
                        yankee = yankee.streamId;
                        yankee = romeo.bind(foxtrot)(yankee, offset, mike);
                        tango = offset;
                        zulu = mike;
 190:
                        offset = verify.bind(entity)();
                        mike = offset.done;
                        report = offset;
                        if(!mike) { _fun50267_ip = 46; continue _fun50267 }
 208:
                        return entity;
                    }
                };
                output = tango;
                mike = new output[golf](sizing, kilo);
                tango = mike instanceof Object ? mike : tango;
                mike = null;
                if(!(mike != report)) { _fun50266_ip = 385; continue _fun50266 }
 58:
                options = zulu.document;
                golf = options.createElement;
                mike = 'video';
                mike = golf.bind(options)(mike);
                options = mike.style;
                golf = 'block';
                options['display'] = golf;
                golf = mike.style;
                options = '100%';
                golf['width'] = options;
                golf = mike.style;
                golf['height'] = options;
                golf = true;
                mike['autoplay'] = golf;
                mike['muted'] = golf;
                verify = mike.addEventListener;
                options = 'pause';
                golf = function() { // Original name: handlePause
                    _fun50268: for(var _fun50268_ip = 0; ; ) switch(_fun50268_ip) {
 0:
                        entity = _closure2_slot7;
                        entity = entity.current;
                        mike = entity.paused;
                        entity = undefined;
                        zulu = undefined;
                        if(mike) { _fun50268_ip = 43; continue _fun50268 }
 25:
                        tango = _closure2_slot5;
                        tango = tango.current;
                        report = null;
                        mike = report == tango;
                        zulu = tango;
 43:
                        if(mike) { _fun50268_ip = 56; continue _fun50268 }
 46:
                        mike = zulu.play;
                        mike = mike.bind(zulu)();
 56:
                        return entity;
                    }
                };
                golf = verify.bind(mike)(options, golf);
                verify = mike.addEventListener;
                options = 'resize';
                golf = function() { // Original name: handleResize
                    _fun50269: for(var _fun50269_ip = 0; ; ) switch(_fun50269_ip) {
 0:
                        entity = _closure2_slot6;
                        entity = entity.current;
                        golf = entity.width;
                        zulu = entity.height;
                        entity = _closure2_slot5;
                        tango = entity.current;
                        report = null;
                        oscar = report == tango;
                        entity = undefined;
                        options = undefined;
                        if(oscar) { _fun50269_ip = 50; continue _fun50269 }
 44:
                        options = tango.videoWidth;
 50:
                        verify = report != options;
                        oscar = 0;
                        if(!verify) { _fun50269_ip = 62; continue _fun50269 }
 59:
                        oscar = options;
 62:
                        options = _closure2_slot5;
                        verify = options.current;
                        offset = report == verify;
                        options = undefined;
                        if(offset) { _fun50269_ip = 86; continue _fun50269 }
 80:
                        options = verify.videoHeight;
 86:
                        verify = report != options;
                        tango = 0;
                        if(!verify) { _fun50269_ip = 98; continue _fun50269 }
 95:
                        tango = options;
 98:
                        if(!(golf === oscar)) { _fun50269_ip = 106; continue _fun50269 }
 102:
                        if(!(zulu !== tango)) { _fun50269_ip = 165; continue _fun50269 }
 106:
                        zulu = {};
                        zulu['width'] = oscar;
                        zulu['height'] = tango;
                        tango = _closure2_slot7;
                        tango = tango.current;
                        tango = tango.onResize;
                        if(!(report != tango)) { _fun50269_ip = 155; continue _fun50269 }
 135:
                        tango = _closure2_slot7;
                        report = tango.current;
                        tango = report.onResize;
                        tango = tango.bind(report)(zulu);
 155:
                        mike = _closure2_slot6;
                        mike['current'] = zulu;
 165:
                        return entity;
                    }
                };
                golf = verify.bind(mike)(options, golf);
                options = mike.addEventListener;
                golf = 'canplaythrough';
                oscar = function() { // Original name: handleReady
                    _fun50270: for(var _fun50270_ip = 0; ; ) switch(_fun50270_ip) {
 0:
                        oscar = _closure1_slot7;
                        report = oscar.info;
                        mike = _closure2_slot7;
                        zulu = mike.current;
                        offset = zulu.streamId;
                        zulu = mike.current;
                        tango = zulu.onReady;
                        zulu = null;
                        verify = zulu != tango;
                        tango = global;
                        tango = tango.HermesInternal;
                        options = tango.concat;
                        golf = 'handleReady for ';
                        tango = ', have onReady callback = ';
                        tango = options.bind(golf)(offset, tango, verify);
                        tango = report.bind(oscar)(tango);
                        mike = mike.current;
                        mike = mike.onReady;
                        if(!(zulu != mike)) { _fun50270_ip = 119; continue _fun50270 }
 100:
                        entity = _closure2_slot7;
                        mike = entity.current;
                        entity = mike.onReady;
                        entity = entity.bind(mike)();
 119:
                        entity = undefined;
                        return entity;
                    }
                };
                oscar = options.bind(mike)(golf, oscar);
                verify = _closure1_slot7;
                options = verify.info;
                golf = _closure2_slot7;
                golf = golf.current;
                foxtrot = golf.streamId;
                romeo = mike.readyState;
                golf = zulu.HermesInternal;
                yankee = golf.concat;
                offset = 'create video element for ';
                golf = ', readyState=';
                golf = yankee.bind(offset)(foxtrot, golf, romeo);
                golf = options.bind(verify)(golf);
                options = mike.readyState;
                golf = 3;
                if(!(options > golf)) { _fun50266_ip = 343; continue _fun50266 }
 285:
                golf = _closure1_slot7;
                oscar = golf.error;
                options = _closure2_slot7;
                options = options.current;
                offset = options.streamId;
                zulu = zulu.HermesInternal;
                verify = zulu.concat;
                options = 'video element for ';
                zulu = ' was ready before attached';
                zulu = verify.bind(options)(offset, zulu);
                zulu = oscar.bind(golf)(zulu);
 343:
                zulu = report.appendChild;
                zulu = zulu.bind(report)(mike);
                zulu = tango.disconnect;
                zulu = zulu.bind(tango)();
                zulu = tango.observe;
                zulu = zulu.bind(tango)(mike);
                entity = _closure2_slot5;
                entity['current'] = mike;
 385:
                entity = undefined;
                return entity;
            }
        };
        tango = new Array(0);
        tango = golf.bind(yankee)(oscar, tango);
        golf = _closure1_slot5;
        oscar = golf.useEffect;
        tango = function() {
            mike = _closure2_slot7;
            tango = mike.current;
            zulu = _closure2_slot0;
            tango['streamId'] = zulu;
            tango = mike.current;
            zulu = _closure2_slot1;
            tango['paused'] = zulu;
            tango = mike.current;
            zulu = _closure2_slot2;
            tango['onReady'] = zulu;
            mike = mike.current;
            entity = _closure2_slot3;
            mike['onResize'] = entity;
            entity = undefined;
            return entity;
        };
        tango = oscar.bind(golf)(tango);
        golf = _closure1_slot5;
        oscar = golf.useEffect;
        tango = new Array(2);
        tango[0] = offset;
        tango[1] = verify;
        zulu = function() {
            _fun50272: for(var _fun50272_ip = 0; ; ) switch(_fun50272_ip) {
 0:
                mike = _closure2_slot5;
                zulu = mike.current;
                var _closure3_slot0 = zulu;
                mike = null;
                if(!(mike != zulu)) { _fun50272_ip = 258; continue _fun50272 }
 27:
                report = _closure2_slot1;
                if(report) { _fun50272_ip = 224; continue _fun50272 }
 37:
                options = _closure1_slot7;
                oscar = options.info;
                verify = _closure2_slot0;
                report = global;
                report = report.HermesInternal;
                offset = report.concat;
                report = 'attaching srcObject for ';
                report = offset.bind(report)(verify);
                report = oscar.bind(options)(report);
                oscar = _closure1_slot9;
                report = oscar.get;
                report = report.bind(oscar)(verify);
                if(!(mike != report)) { _fun50272_ip = 115; continue _fun50272 }
 101:
                oscar = report.addref;
                oscar = oscar.bind(report)();
                _fun50272_ip = 205; continue _fun50272;
 115:
                oscar = _closure1_slot8;
                options = oscar.prototype;
                options = Object.create(options, {constructor: {value: oscar}});
                backup = options;
                foxtrot = verify;
                oscar = new backup[oscar](foxtrot, romeo);
                oscar = oscar instanceof Object ? oscar : options;
                yankee = _closure1_slot0;
                offset = _closure1_slot2;
                options = 5;
                offset = offset[options];
                options = undefined;
                offset = yankee.bind(options)(offset);
                options = offset.getVoiceEngine;
                offset = options.bind(offset)();
                options = offset.addDirectVideoOutputSink;
                options = options.bind(offset)(verify);
                options = _closure1_slot9;
                golf = options.set;
                golf = golf.bind(options)(verify, oscar);
                report = oscar;
 205:
                report = report.stream;
                zulu['srcObject'] = report;
                tango = function() {
                    zulu = _closure1_slot12;
                    mike = _closure2_slot0;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    zulu = _closure3_slot0;
                    mike = null;
                    zulu['srcObject'] = mike;
                    return entity;
                };
                return tango;
 224:
                tango = zulu.srcObject;
                if(!(mike != tango)) { _fun50272_ip = 258; continue _fun50272 }
 234:
                zulu['srcObject'] = mike;
                zulu = _closure1_slot12;
                mike = _closure2_slot0;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
 258:
                entity = undefined;
                return entity;
            }
        };
        zulu = oscar.bind(golf)(zulu, tango);
        tango = _closure1_slot6;
        zulu = {};
        golf = _closure1_slot1;
        oscar = _closure1_slot2;
        mike = 6;
        oscar = oscar[mike];
        mike = undefined;
        golf = golf.bind(mike)(oscar);
        oscar = 'media-engine-video';
        oscar = golf.bind(mike)(oscar, options);
        zulu['className'] = oscar;
        zulu['ref'] = report;
        sizing = zulu;
        kilo = entity;
        entity = copyDataProperties(sizing, kilo);
        entity = 'div';
        entity = tango.bind(mike)(entity, zulu);
        return entity;
    };
    tango = global;
    yankee = tango.Object;
    offset = yankee.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = verify.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = oscar[options];
    options = verify.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    verify = oscar[options];
    options = argCorge;
    options = options.bind(entity)(verify);
    var _closure1_slot5 = options;
    options = 3;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot6 = options;
    options = 4;
    options = oscar[options];
    options = report.bind(entity)(options);
    offset = options.Logger;
    options = offset.prototype;
    verify = Object.create(options, {constructor: {value: offset}});
    backup = 'DirectVideo';
    kilo = verify;
    options = new kilo[offset](backup, foxtrot);
    options = options instanceof Object ? options : verify;
    var _closure1_slot7 = options;
    options = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: RefCountedStream
            zulu = this;
            tango = _closure1_slot3;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = 1;
            zulu['refcount'] = mike;
            mike = global;
            report = mike.window;
            tango = report.createDiscordStream;
            mike = argFoo;
            mike = tango.bind(report)(mike);
            zulu['stream'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'addref';
        entity['key'] = mike;
        mike = function() { // Original name: value
            mike = this;
            entity = mike.refcount;
            entity = entity + 1;
            mike['refcount'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'release';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            mike = entity.refcount;
            mike = mike - 1;
            entity['refcount'] = mike;
            mike = entity.refcount;
            entity = 0;
            entity = entity === mike;
            return entity;
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    options = options.bind(entity)();
    var _closure1_slot8 = options;
    tango = tango.Map;
    options = tango.prototype;
    options = Object.create(options, {constructor: {value: tango}});
    kilo = options;
    tango = new kilo[tango](backup);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot9 = tango;
    tango = {};
    golf = false;
    tango['paused'] = golf;
    mike['defaultProps'] = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/native/ui/DirectVideo.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();