// app/modules/voice_filters/VoiceFilterExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    oscard = tangon.Set;
    tangon = oscard.prototype;
    report = Object.create(tangon, {constructor: {value: oscard}});
    kiloes = ['943265993613008967'];
    sizing = report;
    tangon = new sizing[oscard](kiloes, backup);
    report = tangon instanceof Object ? tangon : report;
    var _closure1_slot4 = report;
    tangon = 2;
    tangon = option[tangon];
    verify = golfie.bind(entity)(tangon);
    oscard = verify.createExperiment;
    tangon = {'kind': 'user', 'id': '2024-10_flamingo', 'label': 'Flamingo'};
    offset = {'enabled': false, 'isTester': false};
    tangon['defaultConfig'] = offset;
    yankee = {'id': 1, 'label': 'Enabled - Treatment 1'};
    offset = {'enabled': true, 'isTester': false};
    yankee['config'] = offset;
    offset = new Array(4);
    offset[0] = yankee;
    yankee = {'id': 2, 'label': 'Enabled - Treatment 2'};
    romeon = {'enabled': true, 'isTester': false};
    yankee['config'] = romeon;
    offset[1] = yankee;
    yankee = {'id': 3, 'label': 'Enabled - Treatment 3'};
    romeon = {'enabled': true, 'isTester': false};
    yankee['config'] = romeon;
    offset[2] = yankee;
    yankee = {'id': 4, 'label': 'Enabled - Tester'};
    romeon = {'enabled': true, 'isTester': true};
    yankee['config'] = romeon;
    offset[3] = yankee;
    tangon['treatments'] = offset;
    tangon = oscard.bind(verify)(tangon);
    var _closure1_slot5 = tangon;
    oscard = function() { // Original name: platformSupportsVoiceFilters
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            report = 3;
            entity = entity[report];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.isWindows;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 65; continue _fun00001 }
 38:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[report];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.isMac;
            entity = michal.bind(zuuluu)();
 65:
            return entity;
        }
    };
    var _closure1_slot6 = oscard;
    oscard = 5;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/voice_filters/VoiceFilterExperiment.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['voiceFilterTestGuilds'] = report;
    zuuluu['VoiceFilterExperiment'] = tangon;
    tangon = function(argFoo) { // Original name: isVoiceFiltersEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = michal.location;
            oscard = michal.autoTrackExposure;
            report = _closure1_slot5;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            entity = entity.enabled;
            if(!entity) { _fun00004_ip = 64; continue _fun00003 }
 54:
            zuuluu = _closure1_slot6;
            michal = undefined;
            entity = zuuluu.bind(michal)();
 64:
            return entity;
        }
    };
    zuuluu['isVoiceFiltersEnabled'] = tangon;
    tangon = function(argFoo) { // Original name: isVoiceFiltersTestingDisabled
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = michal.location;
            report = michal.guildId;
            oscard = _closure1_slot5;
            tangon = oscard.getCurrentConfig;
            michal = {};
            michal['location'] = entity;
            entity = {};
            golfie = false;
            entity['autoTrackExposure'] = golfie;
            entity = tangon.bind(oscard)(michal, entity);
            entity = entity.isTester;
            if(!entity) { _fun00006_ip = 85; continue _fun00005 }
 56:
            michal = null;
            michal = michal == report;
            if(michal) { _fun00006_ip = 82; continue _fun00005 }
 65:
            tangon = _closure1_slot4;
            zuuluu = tangon.has;
            zuuluu = zuuluu.bind(tangon)(report);
            michal = !zuuluu;
 82:
            entity = michal;
 85:
            return entity;
        }
    };
    zuuluu['isVoiceFiltersTestingDisabled'] = tangon;
    michal = function(argFoo) { // Original name: useAreVoiceFiltersEnabled
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = michal.location;
            oscard = michal.autoTrackExposure;
            report = _closure1_slot5;
            tangon = report.useExperiment;
            michal = {};
            michal['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(michal, entity);
            entity = michal.enabled;
            michal = michal.isTester;
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 4;
            report = report[tangon];
            tangon = undefined;
            option = oscard.bind(tangon)(report);
            golfie = option.useStateFromStores;
            report = _closure1_slot3;
            oscard = new Array(2);
            oscard[0] = report;
            report = _closure1_slot2;
            oscard[1] = report;
            report = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getChannel;
                tangon = _closure1_slot3;
                entity = tangon.getVoiceChannelId;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = golfie.bind(option)(oscard, report);
            michal = !michal;
            if(michal) { _fun00008_ip = 156; continue _fun00007 }
 125:
            report = null;
            report = report != oscard;
            if(!report) { _fun00008_ip = 153; continue _fun00007 }
 134:
            option = _closure1_slot4;
            golfie = option.has;
            oscard = oscard.guild_id;
            report = golfie.bind(option)(oscard);
 153:
            michal = report;
 156:
            if(!entity) { _fun00008_ip = 167; continue _fun00007 }
 159:
            zuuluu = _closure1_slot6;
            entity = zuuluu.bind(tangon)();
 167:
            if(!entity) { _fun00008_ip = 173; continue _fun00007 }
 170:
            entity = michal;
 173:
            return entity;
        }
    };
    zuuluu['useAreVoiceFiltersEnabled'] = michal;
    return entity;
})();