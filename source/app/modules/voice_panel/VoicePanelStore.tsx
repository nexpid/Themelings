// app/modules/voice_panel/VoicePanelStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    golfie = report.bind(entity)(tangon);
    tangon = golfie.createWithEqualityFn;
    michal = function(argFoo, argBar) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = {};
        zuuluu = global;
        tangon = zuuluu.Set;
        report = tangon.prototype;
        report = Object.create(report, {constructor: {value: tangon}});
        oscard = report;
        tangon = new oscard[tangon](report);
        tangon = tangon instanceof Object ? tangon : report;
        entity['channels'] = tangon;
        tangon = false;
        entity['isActivityFocused'] = tangon;
        tangon = function() { // Original name: isVoicePanelFullscreen
            michal = _closure2_slot1;
            entity = undefined;
            entity = michal.bind(entity)();
            entity = entity.voicePanelsFullscreen;
            michal = entity.size;
            entity = 0;
            entity = michal > entity;
            return entity;
        };
        entity['isVoicePanelFullscreen'] = tangon;
        tangon = function() { // Original name: isAnyVoicePanelOpen
            michal = _closure2_slot1;
            entity = undefined;
            entity = michal.bind(entity)();
            entity = entity.voicePanelsOpened;
            michal = entity.size;
            entity = 0;
            entity = michal > entity;
            return entity;
        };
        entity['isAnyVoicePanelOpen'] = tangon;
        tangon = zuuluu.Set;
        report = tangon.prototype;
        report = Object.create(report, {constructor: {value: tangon}});
        oscard = report;
        tangon = new oscard[tangon](report);
        tangon = tangon instanceof Object ? tangon : report;
        entity['voicePanelsFullscreen'] = tangon;
        tangon = zuuluu.Set;
        report = tangon.prototype;
        report = Object.create(report, {constructor: {value: tangon}});
        oscard = report;
        tangon = new oscard[tangon](report);
        tangon = tangon instanceof Object ? tangon : report;
        entity['voicePanelsOpened'] = tangon;
        zuuluu = zuuluu.Set;
        tangon = zuuluu.prototype;
        tangon = Object.create(tangon, {constructor: {value: zuuluu}});
        oscard = tangon;
        zuuluu = new oscard[zuuluu](report);
        zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
        entity['voicePanelsPIP'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: openChannel
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                golfie = argFoo;
                var _closure3_slot0 = golfie;
                tangon = _closure1_slot2;
                entity = tangon.getChannel;
                oscard = entity.bind(tangon)(golfie);
                entity = null;
                tangon = entity == oscard;
                entity = undefined;
                report = undefined;
                if(tangon) { _fun00002_ip = 49; continue _fun00001 }
 39:
                tangon = oscard.isGuildStageVoice;
                report = tangon.bind(oscard)();
 49:
                tangon = true;
                tangon = tangon === report;
                if(tangon) { _fun00002_ip = 85; continue _fun00001 }
 58:
                report = _closure2_slot1;
                report = report.bind(entity)();
                oscard = report.channels;
                report = oscard.has;
                tangon = report.bind(oscard)(golfie);
 85:
                if(tangon) { _fun00002_ip = 124; continue _fun00001 }
 88:
                tangon = _closure1_slot0;
                report = _closure1_slot1;
                zuuluu = 2;
                zuuluu = report[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.batchUpdates;
                michal = function() {
                    zuuluu = _closure2_slot0;
                    entity = undefined;
                    michal = function(argFoo) {
                        zuuluu = argFoo;
                        entity = {};
                        romeon = entity;
                        yankee = zuuluu;
                        michal = copyDataProperties(romeon, yankee);
                        oscard = global;
                        option = oscard.Set;
                        golfie = _closure3_slot0;
                        michal = new Array(1);
                        michal[0] = golfie;
                        verify = oscard.Array;
                        report = verify.from;
                        tangon = zuuluu.channels;
                        yankee = report.bind(verify)(tangon);
                        report = 1;
                        romeon = michal;
                        offset = report;
                        tangon = arraySpread(romeon, yankee, offset);
                        tangon = option.prototype;
                        tangon = Object.create(tangon, {constructor: {value: option}});
                        foxtra = tangon;
                        romeon = michal;
                        michal = new foxtra[option](romeon, yankee);
                        tangon = michal instanceof Object ? michal : tangon;
                        michal = 'channels';
                        entity[michal] = tangon;
                        tangon = oscard.Set;
                        michal = new Array(1);
                        michal[0] = golfie;
                        golfie = oscard.Array;
                        oscard = golfie.from;
                        zuuluu = zuuluu.voicePanelsOpened;
                        yankee = oscard.bind(golfie)(zuuluu);
                        romeon = michal;
                        zuuluu = arraySpread(romeon, yankee, offset);
                        zuuluu = tangon.prototype;
                        zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                        foxtra = zuuluu;
                        romeon = michal;
                        michal = new foxtra[tangon](romeon, yankee);
                        zuuluu = michal instanceof Object ? michal : zuuluu;
                        michal = 'voicePanelsOpened';
                        entity[michal] = zuuluu;
                        return entity;
                    };
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
 124:
                return entity;
            }
        };
        entity['openChannel'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: closeChannel
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = argFoo;
                        report = zuuluu.channels;
                        option = zuuluu.voicePanelsFullscreen;
                        verify = zuuluu.voicePanelsOpened;
                        michal = report.has;
                        entity = _closure3_slot0;
                        entity = michal.bind(report)(entity);
                        if(entity) { _fun00004_ip = 81; continue _fun00003 }
 41:
                        michal = option.has;
                        entity = _closure3_slot0;
                        entity = michal.bind(option)(entity);
                        if(entity) { _fun00004_ip = 81; continue _fun00003 }
 58:
                        michal = verify.has;
                        entity = _closure3_slot0;
                        michal = michal.bind(verify)(entity);
                        entity = zuuluu;
                        if(!michal) { _fun00004_ip = 327; continue _fun00003 }
 81:
                        tangon = report.has;
                        michal = _closure3_slot0;
                        michal = tangon.bind(report)(michal);
                        oscard = report;
                        if(!michal) { _fun00004_ip = 149; continue _fun00003 }
 101:
                        michal = global;
                        michal = michal.Set;
                        tangon = michal.prototype;
                        tangon = Object.create(tangon, {constructor: {value: michal}});
                        romeon = tangon;
                        yankee = report;
                        michal = new romeon[michal](yankee, offset);
                        michal = michal instanceof Object ? michal : tangon;
                        report = michal.delete;
                        tangon = _closure3_slot0;
                        tangon = report.bind(michal)(tangon);
                        oscard = michal;
 149:
                        tangon = option.has;
                        michal = _closure3_slot0;
                        michal = tangon.bind(option)(michal);
                        report = option;
                        if(!michal) { _fun00004_ip = 217; continue _fun00003 }
 169:
                        michal = global;
                        michal = michal.Set;
                        tangon = michal.prototype;
                        tangon = Object.create(tangon, {constructor: {value: michal}});
                        romeon = tangon;
                        yankee = option;
                        michal = new romeon[michal](yankee, offset);
                        michal = michal instanceof Object ? michal : tangon;
                        option = michal.delete;
                        tangon = _closure3_slot0;
                        tangon = option.bind(michal)(tangon);
                        report = michal;
 217:
                        tangon = verify.has;
                        michal = _closure3_slot0;
                        michal = tangon.bind(verify)(michal);
                        tangon = verify;
                        if(!michal) { _fun00004_ip = 285; continue _fun00003 }
 237:
                        michal = global;
                        michal = michal.Set;
                        option = michal.prototype;
                        option = Object.create(option, {constructor: {value: michal}});
                        romeon = option;
                        yankee = verify;
                        michal = new romeon[michal](yankee, offset);
                        michal = michal instanceof Object ? michal : option;
                        option = michal.delete;
                        golfie = _closure3_slot0;
                        golfie = option.bind(michal)(golfie);
                        tangon = michal;
 285:
                        michal = {};
                        yankee = michal;
                        offset = zuuluu;
                        zuuluu = copyDataProperties(yankee, offset);
                        zuuluu = 'channels';
                        michal[zuuluu] = oscard;
                        zuuluu = 'voicePanelsFullscreen';
                        michal[zuuluu] = report;
                        zuuluu = 'voicePanelsOpened';
                        michal[zuuluu] = tangon;
                        entity = michal;
 327:
                        return entity;
                    }
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['closeChannel'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: isMounted
            michal = _closure2_slot1;
            entity = undefined;
            entity = michal.bind(entity)();
            zuuluu = entity.channels;
            michal = zuuluu.has;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['isMounted'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: setIsActivityFocused
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        tangon = argFoo;
                        report = tangon.isActivityFocused;
                        michal = _closure3_slot0;
                        entity = tangon;
                        if(!(report !== michal)) { _fun00006_ip = 51; continue _fun00005 }
 23:
                        michal = {};
                        golfie = michal;
                        oscard = tangon;
                        tangon = copyDataProperties(golfie, oscard);
                        tangon = _closure3_slot0;
                        zuuluu = 'isActivityFocused';
                        michal[zuuluu] = tangon;
                        entity = michal;
 51:
                        return entity;
                    }
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['setIsActivityFocused'] = zuuluu;
        zuuluu = function(argFoo, argBar) { // Original name: setChannelPanelFullscreen
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        michal = global;
                        tangon = michal.Set;
                        option = entity.voicePanelsFullscreen;
                        zuuluu = tangon.prototype;
                        zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                        verify = zuuluu;
                        michal = new verify[tangon](option, golfie);
                        tangon = michal instanceof Object ? michal : zuuluu;
                        report = _closure3_slot1;
                        oscard = tangon.has;
                        zuuluu = _closure3_slot0;
                        zuuluu = oscard.bind(tangon)(zuuluu);
                        if(report) { _fun00008_ip = 82; continue _fun00007 }
 61:
                        if(zuuluu) { _fun00008_ip = 66; continue _fun00007 }
 64:
                        return entity;
 66:
                        oscard = tangon.delete;
                        report = _closure3_slot0;
                        report = oscard.bind(tangon)(report);
                        _fun00008_ip = 99; continue _fun00007;
 82:
                        if(zuuluu) { _fun00008_ip = 122; continue _fun00007 }
 85:
                        zuuluu = tangon.add;
                        michal = _closure3_slot0;
                        michal = zuuluu.bind(tangon)(michal);
 99:
                        michal = {};
                        option = michal;
                        golfie = entity;
                        zuuluu = copyDataProperties(option, golfie);
                        zuuluu = 'voicePanelsFullscreen';
                        michal[zuuluu] = tangon;
                        return michal;
 122:
                        return entity;
                    }
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['setChannelPanelFullscreen'] = zuuluu;
        zuuluu = function(argFoo, argBar) { // Original name: setChannelPanelOpen
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = argFoo;
                        report = entity.channels;
                        tangon = report.has;
                        zuuluu = _closure3_slot0;
                        zuuluu = tangon.bind(report)(zuuluu);
                        if(zuuluu) { _fun00010_ip = 31; continue _fun00009 }
 29:
                        return entity;
 31:
                        zuuluu = global;
                        report = zuuluu.Set;
                        option = entity.voicePanelsOpened;
                        tangon = report.prototype;
                        tangon = Object.create(tangon, {constructor: {value: report}});
                        verify = tangon;
                        zuuluu = new verify[report](option, golfie);
                        tangon = zuuluu instanceof Object ? zuuluu : tangon;
                        report = _closure3_slot1;
                        oscard = tangon.has;
                        zuuluu = _closure3_slot0;
                        zuuluu = oscard.bind(tangon)(zuuluu);
                        if(report) { _fun00010_ip = 107; continue _fun00009 }
 86:
                        if(zuuluu) { _fun00010_ip = 91; continue _fun00009 }
 89:
                        return entity;
 91:
                        oscard = tangon.delete;
                        report = _closure3_slot0;
                        report = oscard.bind(tangon)(report);
                        _fun00010_ip = 124; continue _fun00009;
 107:
                        if(zuuluu) { _fun00010_ip = 147; continue _fun00009 }
 110:
                        zuuluu = tangon.add;
                        michal = _closure3_slot0;
                        michal = zuuluu.bind(tangon)(michal);
 124:
                        michal = {};
                        option = michal;
                        golfie = entity;
                        zuuluu = copyDataProperties(option, golfie);
                        zuuluu = 'voicePanelsOpened';
                        michal[zuuluu] = tangon;
                        return michal;
 147:
                        return entity;
                    }
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['setChannelPanelOpen'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: isChannelOpen
            michal = _closure2_slot1;
            entity = undefined;
            entity = michal.bind(entity)();
            zuuluu = entity.voicePanelsOpened;
            michal = zuuluu.has;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['isChannelOpen'] = zuuluu;
        michal = function(argFoo, argBar) { // Original name: setChannelPanelPIP
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        michal = global;
                        tangon = michal.Set;
                        option = entity.voicePanelsPIP;
                        zuuluu = tangon.prototype;
                        zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                        verify = zuuluu;
                        michal = new verify[tangon](option, golfie);
                        tangon = michal instanceof Object ? michal : zuuluu;
                        report = _closure3_slot1;
                        oscard = tangon.has;
                        zuuluu = _closure3_slot0;
                        zuuluu = oscard.bind(tangon)(zuuluu);
                        if(report) { _fun00012_ip = 82; continue _fun00011 }
 61:
                        if(zuuluu) { _fun00012_ip = 66; continue _fun00011 }
 64:
                        return entity;
 66:
                        oscard = tangon.delete;
                        report = _closure3_slot0;
                        report = oscard.bind(tangon)(report);
                        _fun00012_ip = 99; continue _fun00011;
 82:
                        if(zuuluu) { _fun00012_ip = 122; continue _fun00011 }
 85:
                        zuuluu = tangon.add;
                        michal = _closure3_slot0;
                        michal = zuuluu.bind(tangon)(michal);
 99:
                        michal = {};
                        option = michal;
                        golfie = entity;
                        zuuluu = copyDataProperties(option, golfie);
                        zuuluu = 'voicePanelsPIP';
                        michal[zuuluu] = tangon;
                        return michal;
 122:
                        return entity;
                    }
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['setChannelPanelPIP'] = michal;
        return entity;
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/VoicePanelStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();