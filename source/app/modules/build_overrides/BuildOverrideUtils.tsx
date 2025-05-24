// app/modules/build_overrides/BuildOverrideUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        verify = argBar;
        zuuluu = argFre;
        offset = argPlu;
        var _closure1_slot0 = verify;
        entity = argBaz;
        var _closure1_slot1 = entity;
        entity = argCor;
        var _closure1_slot2 = entity;
        var _closure1_slot3 = offset;
        oscard = function(argFoo) { // Original name: getAPIEndpoint
            entity = global;
            michal = entity.location;
            offset = michal.protocol;
            michal = entity.location;
            option = michal.host;
            entity = entity.HermesInternal;
            tangon = entity.concat;
            yankee = '';
            verify = '//';
            golfie = argFoo;
            entity = yankee[tangon](offset, verify, option, golfie, oscard);
            return entity;
        };
        var _closure1_slot10 = oscard;
        report = function(argFoo) { // Original name: isManualBuildOverrideLink
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00004_ip = 29; continue _fun00003 }
 12:
                zuuluu = _closure1_slot7;
                michal = zuuluu.test;
                entity = michal.bind(zuuluu)(tangon);
 29:
                return entity;
            }
        };
        var _closure1_slot11 = report;
        tangon = function(argFoo) { // Original name: manualOverrideLinkMeta
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = argFoo;
                zuuluu = tangon.match;
                entity = _closure1_slot7;
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = null;
                if(!(entity != zuuluu)) { _fun00006_ip = 155; continue _fun00005 }
 30:
                report = zuuluu.length;
                tangon = 2;
                if(!(tangon === report)) { _fun00006_ip = 155; continue _fun00005 }
 42:
                report = _closure1_slot0;
                tangon = _closure1_slot3;
                michal = 3;
                tangon = tangon[michal];
                michal = undefined;
                tangon = report.bind(michal)(tangon);
                michal = tangon.getNativePlatform;
                golfie = michal.bind(tangon)();
                michal = 1;
                oscard = zuuluu[michal];
                michal = {};
                zuuluu = {};
                tangon = global;
                tangon = tangon.HermesInternal;
                report = tangon.concat;
                tangon = 'discord_';
                report = report.bind(tangon)(golfie);
                tangon = {};
                golfie = 'branch';
                tangon['type'] = golfie;
                tangon['id'] = oscard;
                zuuluu[report] = tangon;
                michal['targetBuildOverride'] = zuuluu;
                zuuluu = new Array(0);
                michal['validForUserIds'] = zuuluu;
                zuuluu = 'Mon, 1 Jan 2038 00:00:00 GMT';
                michal['expiresAt'] = zuuluu;
                return michal;
 155:
                return entity;
            }
        };
        var _closure1_slot12 = tangon;
        option = global;
        romeon = option.Object;
        yankee = romeon.defineProperty;
        golfie = {};
        entity = true;
        golfie['value'] = entity;
        entity = '__esModule';
        entity = yankee.bind(romeon)(zuuluu, entity, golfie);
        romeon = 0;
        golfie = offset[romeon];
        entity = undefined;
        golfie = verify.bind(entity)(golfie);
        golfie = golfie.BUILD_OVERRIDE_COOKIE_NAME;
        var _closure1_slot4 = golfie;
        golfie = 1;
        golfie = offset[golfie];
        golfie = verify.bind(entity)(golfie);
        golfie = golfie.PRIMARY_DOMAIN;
        golfie = 2;
        golfie = offset[golfie];
        yankee = verify.bind(entity)(golfie);
        golfie = yankee.getConstants;
        yankee = golfie.bind(yankee)();
        golfie = 3;
        foxtra = offset[golfie];
        backup = verify.bind(entity)(foxtra);
        foxtra = backup.isAndroid;
        foxtra = foxtra.bind(backup)();
        if(foxtra) { _fun00002_ip = 211; continue _fun00001 }
 179:
        golfie = offset[golfie];
        foxtra = verify.bind(entity)(golfie);
        golfie = foxtra.isIOS;
        foxtra = golfie.bind(foxtra)();
        golfie = undefined;
        if(!foxtra) { _fun00002_ip = 209; continue _fun00001 }
 203:
        golfie = yankee.Version;
 209:
        _fun00002_ip = 237; continue _fun00001;
 211:
        backup = yankee.Version;
        foxtra = backup.split;
        yankee = ' - ';
        yankee = foxtra.bind(backup)(yankee);
        golfie = yankee[romeon];
 237:
        var _closure1_slot5 = golfie;
        foxtra = option.RegExp;
        yankee = foxtra.prototype;
        romeon = Object.create(yankee, {constructor: {value: foxtra}});
        output = '^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$';
        backup = 'i';
        result = romeon;
        sizing = backup;
        yankee = new result[foxtra](output, sizing, kiloes);
        yankee = yankee instanceof Object ? yankee : romeon;
        var _closure1_slot6 = yankee;
        foxtra = option.RegExp;
        yankee = foxtra.prototype;
        romeon = Object.create(yankee, {constructor: {value: foxtra}});
        output = '^dev://branch/([\\w-./]+)$';
        result = romeon;
        yankee = new result[foxtra](output, sizing, kiloes);
        yankee = yankee instanceof Object ? yankee : romeon;
        var _closure1_slot7 = yankee;
        foxtra = option.Set;
        yankee = foxtra.prototype;
        romeon = Object.create(yankee, {constructor: {value: foxtra}});
        output = ['canary.discord.com', 'ptb.discord.com', 'discord.com', 'canary.discordapp.com', 'ptb.discordapp.com', 'discordapp.com'];
        result = romeon;
        yankee = new result[foxtra](output, sizing);
        yankee = yankee instanceof Object ? yankee : romeon;
        var _closure1_slot8 = yankee;
        romeon = option.Set;
        option = romeon.prototype;
        yankee = Object.create(option, {constructor: {value: romeon}});
        output = ['/__development/link', '/__development/link/'];
        result = yankee;
        option = new result[romeon](output, sizing);
        option = option instanceof Object ? option : yankee;
        var _closure1_slot9 = option;
        option = 8;
        option = offset[option];
        offset = verify.bind(entity)(option);
        verify = offset.fileFinishedImporting;
        option = 'modules/build_overrides/BuildOverrideUtils.tsx';
        option = verify.bind(offset)(option);
        zuuluu['APP_VERSION'] = golfie;
        zuuluu['getAPIEndpoint'] = oscard;
        oscard = function() { // Original name: getBuildOverride
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot3;
                michal = 4;
                michal = tangon[michal];
                verify = undefined;
                tangon = zuuluu.bind(verify)(michal);
                zuuluu = tangon.safeParseWithQuery;
                report = _closure1_slot10;
                michal = '/__development/build_overrides';
                michal = report.bind(verify)(michal);
                option = zuuluu.bind(tangon)(michal);
                tangon = null;
                if(!(tangon != option)) { _fun00008_ip = 190; continue _fun00007 }
 62:
                option['search'] = tangon;
                michal = _closure1_slot5;
                if(!michal) { _fun00008_ip = 90; continue _fun00007 }
 75:
                zuuluu = option.query;
                michal = _closure1_slot5;
                zuuluu['version'] = michal;
 90:
                zuuluu = _closure1_slot0;
                offset = _closure1_slot3;
                michal = 5;
                michal = offset[michal];
                michal = zuuluu.bind(verify)(michal);
                report = michal.HTTP;
                zuuluu = report.get;
                michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                golfie = _closure1_slot2;
                oscard = 6;
                oscard = offset[oscard];
                golfie = golfie.bind(verify)(oscard);
                oscard = golfie.format;
                oscard = oscard.bind(golfie)(option);
                michal['url'] = oscard;
                report = zuuluu.bind(report)(michal);
                zuuluu = report.then;
                michal = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = argFoo;
                        entity = entity.body;
                        if(entity) { _fun00010_ip = 13; continue _fun00009 }
 11:
                        entity = null;
 13:
                        return entity;
                    }
                };
                entity = function() {
                    entity = null;
                    return entity;
                };
                entity = zuuluu.bind(report)(michal, entity);
                _fun00008_ip = 209; continue _fun00007;
 190:
                michal = global;
                zuuluu = michal.Promise;
                michal = zuuluu.resolve;
                entity = michal.bind(zuuluu)(tangon);
 209:
                return entity;
            }
        };
        zuuluu['getBuildOverride'] = oscard;
        oscard = function(argFoo) { // Original name: getBuildOverrideMeta
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                zuuluu = _closure1_slot11;
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(report);
                if(zuuluu) { _fun00012_ip = 254; continue _fun00011 }
 25:
                oscard = _closure1_slot1;
                golfie = _closure1_slot3;
                zuuluu = 4;
                zuuluu = golfie[zuuluu];
                oscard = oscard.bind(tangon)(zuuluu);
                zuuluu = oscard.safeParseWithQuery;
                yankee = zuuluu.bind(oscard)(report);
                golfie = null;
                if(!(golfie != yankee)) { _fun00012_ip = 233; continue _fun00011 }
 65:
                yankee['search'] = golfie;
                oscard = yankee.query;
                zuuluu = 'true';
                oscard['meta'] = zuuluu;
                zuuluu = _closure1_slot5;
                if(!zuuluu) { _fun00012_ip = 108; continue _fun00011 }
 93:
                oscard = yankee.query;
                zuuluu = _closure1_slot5;
                oscard['version'] = zuuluu;
 108:
                zuuluu = global;
                zuuluu = zuuluu.window;
                zuuluu = zuuluu.location;
                zuuluu = zuuluu.host;
                yankee['host'] = zuuluu;
                oscard = _closure1_slot0;
                romeon = _closure1_slot3;
                zuuluu = 5;
                zuuluu = romeon[zuuluu];
                zuuluu = oscard.bind(tangon)(zuuluu);
                option = zuuluu.HTTP;
                oscard = option.get;
                zuuluu = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                offset = _closure1_slot2;
                verify = 6;
                verify = romeon[verify];
                offset = offset.bind(tangon)(verify);
                verify = offset.format;
                verify = verify.bind(offset)(yankee);
                zuuluu['url'] = verify;
                option = oscard.bind(option)(zuuluu);
                oscard = option.then;
                zuuluu = function(argFoo) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = argFoo;
                        entity = entity.body;
                        if(entity) { _fun00014_ip = 13; continue _fun00013 }
 11:
                        entity = null;
 13:
                        return entity;
                    }
                };
                michal = function() {
                    entity = null;
                    return entity;
                };
                michal = oscard.bind(option)(zuuluu, michal);
                _fun00012_ip = 252; continue _fun00011;
 233:
                zuuluu = global;
                oscard = zuuluu.Promise;
                zuuluu = oscard.resolve;
                michal = zuuluu.bind(oscard)(golfie);
 252:
                return michal;
 254:
                michal = global;
                zuuluu = michal.Promise;
                michal = zuuluu.resolve;
                entity = _closure1_slot12;
                entity = entity.bind(tangon)(report);
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        zuuluu['getBuildOverrideMeta'] = oscard;
        oscard = function() { // Original name: probablyHasBuildOverride
            entity = global;
            michal = entity.window;
            michal = michal.document;
            zuuluu = michal.cookie;
            michal = zuuluu.indexOf;
            oscard = _closure1_slot4;
            entity = entity.HermesInternal;
            report = entity.concat;
            tangon = '';
            entity = '=';
            entity = report.bind(tangon)(oscard, entity);
            michal = michal.bind(zuuluu)(entity);
            entity = -1;
            entity = entity !== michal;
            return entity;
        };
        zuuluu['probablyHasBuildOverride'] = oscard;
        oscard = function() { // Original name: getBuildOverrideExperiments
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                golfie = undefined;
                michal = undefined;
                entity = undefined;
 6: // try_start_0
                report = _closure1_slot1;
                oscard = _closure1_slot3;
                tangon = 7;
                tangon = oscard[tangon];
                option = report.bind(golfie)(tangon);
                report = option.parse;
                oscard = global;
                tangon = oscard.window;
                tangon = tangon.document;
                tangon = tangon.cookie;
                tangon = report.bind(option)(tangon);
                zuuluu = _closure1_slot4;
                tangon = tangon[zuuluu];
                entity = tangon;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00016_ip = 168; continue _fun00015 }
 77:
                report = oscard.JSON;
                tangon = report.parse;
                oscard = oscard.atob;
                verify = entity;
                option = verify.substring;
                offset = verify.indexOf;
                entity = '.';
                offset = offset.bind(verify)(entity);
                entity = 1;
                entity = offset + entity;
                entity = option.bind(verify)(entity);
                entity = oscard.bind(golfie)(entity);
                entity = tangon.bind(report)(entity);
                entity = entity.$meta;
                entity = entity.experiments;
                michal = entity;
                if(!(zuuluu == entity)) { _fun00016_ip = 163; continue _fun00015 }
 159:
                entity = {};
                _fun00016_ip = 166; continue _fun00015;
 163:
                entity = michal;
 166:
                _fun00016_ip = 170; continue _fun00015;
 168:
                entity = {};
 170: // try_end0
                return entity;
 172: // catch_target0
                CatchBlockStart(arg_register=0);
                entity = {};
                return entity;
            }
        };
        zuuluu['getBuildOverrideExperiments'] = oscard;
        oscard = function(argFoo) { // Original name: isBuildOverrideLink
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tangon = argFoo;
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00018_ip = 29; continue _fun00017 }
 12:
                zuuluu = _closure1_slot6;
                michal = zuuluu.test;
                entity = michal.bind(zuuluu)(tangon);
 29:
                return entity;
            }
        };
        zuuluu['isBuildOverrideLink'] = oscard;
        zuuluu['isManualBuildOverrideLink'] = report;
        zuuluu['manualOverrideLinkMeta'] = tangon;
        michal = function(argFoo) { // Original name: validateURL
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = argFoo;
                entity = _closure1_slot11;
                golfie = undefined;
                entity = entity.bind(golfie)(michal);
                if(entity) { _fun00020_ip = 222; continue _fun00019 }
 23:
                zuuluu = _closure1_slot1;
                report = _closure1_slot3;
                entity = 4;
                entity = report[entity];
                zuuluu = zuuluu.bind(golfie)(entity);
                entity = zuuluu.safeParseWithQuery;
                oscard = entity.bind(zuuluu)(michal);
                entity = null;
                if(!(entity != oscard)) { _fun00020_ip = 220; continue _fun00019 }
 63:
                option = _closure1_slot8;
                report = option.has;
                zuuluu = oscard.hostname;
                zuuluu = report.bind(option)(zuuluu);
                if(!zuuluu) { _fun00020_ip = 125; continue _fun00019 }
 86:
                zuuluu = oscard.query;
                yankee = 's';
                zuuluu = yankee in zuuluu;
                if(!zuuluu) { _fun00020_ip = 125; continue _fun00019 }
 102:
                option = _closure1_slot9;
                report = option.has;
                zuuluu = oscard.pathname;
                zuuluu = report.bind(option)(zuuluu);
                if(zuuluu) { _fun00020_ip = 127; continue _fun00019 }
 125:
                return entity;
 127:
                verify = oscard.query;
                for(zuuluu in verify)
 140:
                {
 149:
                    foxtra = zuuluu;
                    if(yankee === foxtra) { _fun00020_ip = 140; continue _fun00019 }
 156:
                    romeon = oscard.query;
                    romeon = delete romeon[foxtra];
                    _fun00020_ip = 140; continue _fun00019;
                }
 167:
                zuuluu = {};
                report = oscard.query;
                report = report.s;
                zuuluu['payload'] = report;
                report = _closure1_slot2;
                option = _closure1_slot3;
                tangon = 6;
                tangon = option[tangon];
                report = report.bind(golfie)(tangon);
                tangon = report.format;
                tangon = tangon.bind(report)(oscard);
                zuuluu['url'] = tangon;
                return zuuluu;
 220:
                return entity;
 222:
                entity = {};
                zuuluu = null;
                entity['payload'] = zuuluu;
                entity['url'] = michal;
                return entity;
            }
        };
        zuuluu['validateURL'] = michal;
        return entity;
    }
})();