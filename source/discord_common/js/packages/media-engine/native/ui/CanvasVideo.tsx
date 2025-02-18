// discord_common/js/packages/media-engine/native/ui/CanvasVideo.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    michal = function(argFoo) { // Original name: CanvasVideo
        tangon = argFoo;
        sizing = tangon.streamId;
        var _closure2_slot0 = sizing;
        kiloes = tangon.paused;
        var _closure2_slot1 = kiloes;
        foxtra = tangon.onReady;
        var _closure2_slot2 = foxtra;
        backup = tangon.onResize;
        var _closure2_slot3 = backup;
        option = tangon.className;
        michal = {'streamId': 0, 'paused': 0, 'onReady': 0, 'onResize': 0, 'className': 0};
        oscard = null;
        echoed = michal;
        result = null;
        entity = silentSetPrototypeOf(echoed, result);
        echoed = {};
        result = tangon;
        output = michal;
        entity = copyDataProperties(echoed, result, output);
        report = _closure1_slot3;
        tangon = report.useRef;
        report = tangon.bind(report)(oscard);
        var _closure2_slot4 = report;
        yankee = _closure1_slot3;
        offset = yankee.useRef;
        golfie = _closure1_slot1;
        verify = _closure1_slot2;
        tangon = 4;
        oscard = verify[tangon];
        tangon = undefined;
        romeon = golfie.bind(tangon)(oscard);
        oscard = 'media-engine-video-';
        oscard = romeon.bind(tangon)(oscard);
        oscard = offset.bind(yankee)(oscard);
        oscard = oscard.current;
        var _closure2_slot5 = oscard;
        romeon = _closure1_slot3;
        yankee = romeon.useEffect;
        offset = new Array(5);
        offset[0] = sizing;
        offset[1] = kiloes;
        offset[2] = backup;
        offset[3] = foxtra;
        offset[4] = oscard;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot4;
                yankee = zuuluu.current;
                var _closure3_slot0 = yankee;
                zuuluu = _closure2_slot1;
                if(zuuluu) { _fun00002_ip = 349; continue _fun00001 }
 28:
                option = null;
                if(!(option != yankee)) { _fun00002_ip = 349; continue _fun00001 }
 37:
                zuuluu = false;
                var _closure3_slot1 = zuuluu;
                oscard = function(argFoo, argBar) { // Original name: frameCallback
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        tangon = argFoo;
                        entity = argBar;
                        zuuluu = _closure3_slot1;
                        if(zuuluu) { _fun00004_ip = 45; continue _fun00003 }
 16:
                        oscard = _closure2_slot2;
                        report = null;
                        if(!(report != oscard)) { _fun00004_ip = 39; continue _fun00003 }
 29:
                        report = _closure2_slot2;
                        zuuluu = undefined;
                        zuuluu = report.bind(zuuluu)();
 39:
                        zuuluu = true;
                        _closure3_slot1 = zuuluu;
 45:
                        zuuluu = _closure3_slot0;
                        zuuluu = zuuluu.width;
                        zuuluu = zuuluu === tangon;
                        if(!zuuluu) { _fun00004_ip = 74; continue _fun00003 }
 61:
                        report = _closure3_slot0;
                        report = report.height;
                        zuuluu = report === entity;
 74:
                        if(zuuluu) { _fun00004_ip = 127; continue _fun00003 }
 77:
                        michal = _closure3_slot0;
                        michal['width'] = tangon;
                        michal['height'] = entity;
                        report = _closure2_slot3;
                        zuuluu = null;
                        if(!(zuuluu != report)) { _fun00004_ip = 127; continue _fun00003 }
 106:
                        zuuluu = _closure2_slot3;
                        michal = {};
                        michal['width'] = tangon;
                        michal['height'] = entity;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
 127:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot2 = oscard;
                golfie = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 5;
                report = report[zuuluu];
                zuuluu = undefined;
                golfie = golfie.bind(zuuluu)(report);
                report = golfie.getVoiceEngine;
                report = report.bind(golfie)();
                var _closure3_slot3 = report;
                golfie = report.addVideoOutputSink;
                if(!(option == golfie)) { _fun00002_ip = 321; continue _fun00001 }
 104:
                golfie = global;
                golfie = golfie.window;
                offset = option == golfie;
                verify = undefined;
                if(offset) { _fun00002_ip = 176; continue _fun00001 }
 121:
                golfie = golfie.DiscordNative;
                offset = option == golfie;
                verify = undefined;
                if(offset) { _fun00002_ip = 176; continue _fun00001 }
 136:
                offset = golfie.app;
                golfie = option == offset;
                verify = undefined;
                if(golfie) { _fun00002_ip = 176; continue _fun00001 }
 151:
                golfie = offset.getReleaseChannel;
                golfie = option == golfie;
                verify = undefined;
                if(golfie) { _fun00002_ip = 176; continue _fun00001 }
 166:
                golfie = offset.getReleaseChannel;
                verify = golfie.bind(offset)();
 176:
                golfie = 'canary';
                if(!(golfie !== verify)) { _fun00002_ip = 225; continue _fun00001 }
 184:
                golfie = 'development';
                if(!(golfie !== verify)) { _fun00002_ip = 225; continue _fun00001 }
 192:
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                golfie = 3;
                golfie = offset[golfie];
                verify = verify.bind(zuuluu)(golfie);
                golfie = verify.initRenderingContext2D;
                golfie = golfie.bind(verify)(yankee);
                _fun00002_ip = 256; continue _fun00001;
 225:
                offset = _closure1_slot0;
                romeon = _closure1_slot2;
                verify = 2;
                verify = romeon[verify];
                offset = offset.bind(zuuluu)(verify);
                verify = offset.initRenderingContextWebGL;
                golfie = verify.bind(offset)(yankee);
 256:
                var _closure3_slot4 = golfie;
                if(!(option != golfie)) { _fun00002_ip = 319; continue _fun00001 }
 264:
                golfie = _closure1_slot1;
                option = _closure1_slot2;
                tangon = 6;
                tangon = option[tangon];
                offset = golfie.bind(zuuluu)(tangon);
                verify = offset.addSink;
                option = _closure2_slot0;
                golfie = _closure2_slot4;
                tangon = function(argFoo) {
                    tangon = argFoo;
                    oscard = _closure3_slot2;
                    report = tangon.width;
                    zuuluu = tangon.height;
                    entity = undefined;
                    zuuluu = oscard.bind(entity)(report, zuuluu);
                    zuuluu = _closure3_slot4;
                    michal = zuuluu.render;
                    michal = michal.bind(zuuluu)(tangon);
                    return entity;
                };
                tangon = verify.bind(offset)(option, golfie, tangon);
                tangon = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 6;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.removeSink;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot4;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                return tangon;
 319:
                return zuuluu;
 321:
                tangon = report.addVideoOutputSink;
                zuuluu = _closure2_slot5;
                michal = _closure2_slot0;
                michal = tangon.bind(report)(zuuluu, michal, oscard);
                entity = function() {
                    tangon = _closure3_slot3;
                    zuuluu = tangon.removeVideoOutputSink;
                    michal = _closure2_slot5;
                    entity = _closure2_slot0;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    entity = undefined;
                    return entity;
                };
                return entity;
 349:
                entity = undefined;
                return entity;
            }
        };
        zuuluu = yankee.bind(romeon)(zuuluu, offset);
        zuuluu = _closure1_slot4;
        michal = {};
        michal['id'] = oscard;
        oscard = 7;
        oscard = verify[oscard];
        golfie = golfie.bind(tangon)(oscard);
        oscard = 'media-engine-video';
        oscard = golfie.bind(tangon)(oscard, option);
        michal['className'] = oscard;
        michal['ref'] = report;
        echoed = michal;
        result = entity;
        entity = copyDataProperties(echoed, result);
        entity = 'canvas';
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = {};
    golfie = false;
    tangon['paused'] = golfie;
    michal['defaultProps'] = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/media-engine/native/ui/CanvasVideo.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();