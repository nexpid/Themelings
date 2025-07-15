// app/stores/ChannelSectionStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot27 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo) { // Original name: parseChannelId
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            entity = null;
            if(!(entity != oscard)) { _fun00004_ip = 63; continue _fun00003 }
 9:
            michal = _closure1_slot18;
            report = undefined;
            michal = michal.bind(report)(oscard);
            if(michal) { _fun00004_ip = 28; continue _fun00003 }
 26:
            return oscard;
 28:
            tangon = _closure1_slot13;
            michal = tangon.getGuildId;
            tangon = michal.bind(tangon)();
            golfie = entity == tangon;
            michal = null;
            if(golfie) { _fun00004_ip = 61; continue _fun00003 }
 51:
            zuuluu = _closure1_slot19;
            michal = zuuluu.bind(report)(oscard, tangon);
 61:
            return michal;
 63:
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo) { // Original name: toggleSection
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            report = _closure1_slot24;
            tangon = false;
            entity = false;
            if(!report) { _fun00006_ip = 23; continue _fun00005 }
 17:
            _closure1_slot24 = tangon;
            entity = true;
 23:
            oscard = _closure1_slot28;
            report = _closure1_slot12;
            tangon = report.getChannelId;
            report = tangon.bind(report)();
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            report = null;
            report = report != tangon;
            if(!report) { _fun00006_ip = 65; continue _fun00005 }
 57:
            oscard = _closure1_slot25;
            report = tangon in oscard;
 65:
            if(!report) { _fun00006_ip = 78; continue _fun00005 }
 68:
            zuuluu = _closure1_slot25;
            zuuluu = delete zuuluu[tangon];
            entity = true;
 78:
            if(!entity) { _fun00006_ip = 87; continue _fun00005 }
 81:
            entity = michal;
            if(entity) { _fun00006_ip = 90; continue _fun00005 }
 87:
            entity = !michal;
 90:
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: handlePermissionsChange
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            romeon = _closure1_slot25;
            zuuluu = false;
            golfie = undefined;
            report = null;
            tangon = 15;
            michal = undefined;
            entity = false;
            for(option in romeon)
 31:
            {
                output = zuuluu;
                entity = output;
 49:
                sizing = option;
                backup = _closure1_slot25;
                backup = backup[sizing];
                result = backup.type;
                echoed = _closure1_slot0;
                kiloes = _closure1_slot2;
                kiloes = kiloes[tangon];
                kiloes = echoed.bind(golfie)(kiloes);
                kiloes = kiloes.SidebarType;
                kiloes = kiloes.VIEW_THREAD;
                if(!(result !== kiloes)) { _fun00008_ip = 139; continue _fun00007 }
 98:
                result = backup.type;
                echoed = _closure1_slot0;
                kiloes = _closure1_slot2;
                kiloes = kiloes[tangon];
                kiloes = echoed.bind(golfie)(kiloes);
                kiloes = kiloes.SidebarType;
                kiloes = kiloes.VIEW_CHANNEL;
                zuuluu = output;
                if(result !== kiloes) { _fun00008_ip = 31; continue _fun00007 }
 139:
                result = _closure1_slot9;
                kiloes = result.getChannel;
                backup = backup.channelId;
                backup = kiloes.bind(result)(backup);
                kiloes = report != backup;
                if(!kiloes) { _fun00008_ip = 191; continue _fun00007 }
 165:
                update = _closure1_slot10;
                echoed = update.can;
                result = _closure1_slot20;
                result = result.VIEW_CHANNEL;
                kiloes = echoed.bind(update)(result, backup);
 191:
                zuuluu = output;
                michal = backup;
                if(kiloes) { _fun00008_ip = 31; continue _fun00007 }
 203:
                kiloes = _closure1_slot25;
                kiloes = delete kiloes[sizing];
                zuuluu = true;
                michal = backup;
                _fun00008_ip = 31; continue _fun00007;
            }
 221:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: syncIsSearchSidebarOpen
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = _closure1_slot11;
            entity = michal.getCurrentSearchId;
            report = entity.bind(michal)();
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 18;
            michal = michal[entity];
            entity = undefined;
            oscard = tangon.bind(entity)(michal);
            tangon = oscard.getIsSearchDesktopXDMExperimentEnabled;
            michal = {};
            golfie = 'handleSyncSearchStore';
            michal['location'] = golfie;
            michal = tangon.bind(oscard)(michal);
            tangon = _closure1_slot17;
            tangon = tangon.DMS;
            if(!(report === tangon)) { _fun00010_ip = 79; continue _fun00009 }
 76:
            if(michal) { _fun00010_ip = 111; continue _fun00009 }
 79:
            tangon = _closure1_slot11;
            michal = tangon.isActive;
            michal = michal.bind(tangon)();
            tangon = _closure1_slot24;
            if(!(tangon !== michal)) { _fun00010_ip = 107; continue _fun00009 }
 101:
            _closure1_slot24 = michal;
            _fun00010_ip = 140; continue _fun00009;
 107:
            michal = false;
            return michal;
 111:
            tangon = _closure1_slot8;
            michal = tangon.hasSearchState;
            michal = michal.bind(tangon)(report);
            tangon = _closure1_slot24;
            if(!(tangon !== michal)) { _fun00010_ip = 142; continue _fun00009 }
 136:
            _closure1_slot24 = michal;
 140:
            return entity;
 142:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    option = true;
    tangon['value'] = option;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 11;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 12;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    verify = tangon.ChannelSections;
    var _closure1_slot15 = verify;
    verify = tangon.ComponentActions;
    var _closure1_slot16 = verify;
    tangon = tangon.SearchTypes;
    var _closure1_slot17 = tangon;
    tangon = 13;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    verify = tangon.isStaticChannelRoute;
    var _closure1_slot18 = verify;
    tangon = tangon.buildGuildStaticChannelId;
    var _closure1_slot19 = tangon;
    tangon = 14;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot20 = tangon;
    tangon = false;
    var _closure1_slot21 = tangon;
    var _closure1_slot22 = tangon;
    var _closure1_slot23 = option;
    var _closure1_slot24 = tangon;
    tangon = {};
    var _closure1_slot25 = tangon;
    tangon = {};
    var _closure1_slot26 = tangon;
    tangon = 20;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.PersistedStore;
    tangon = function(argFoo) {
        tangon = function() { // Original name: ChannelSectionStore
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot27;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00012_ip = 69; continue _fun00011 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00012_ip = 105; continue _fun00011;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                tangon = this;
                zuuluu = null;
                if(!(zuuluu != entity)) { _fun00014_ip = 107; continue _fun00013 }
 12:
                michal = entity.isMembersOpen;
                report = zuuluu != michal;
                if(!report) { _fun00014_ip = 28; continue _fun00013 }
 25:
                report = michal;
 28:
                _closure1_slot21 = report;
                oscard = entity.isSummariesOpen;
                report = zuuluu != oscard;
                if(!report) { _fun00014_ip = 51; continue _fun00013 }
 48:
                report = oscard;
 51:
                _closure1_slot22 = report;
                oscard = entity.isProfileOpen;
                report = zuuluu == oscard;
                if(report) { _fun00014_ip = 71; continue _fun00013 }
 68:
                report = oscard;
 71:
                _closure1_slot23 = report;
                report = entity.sidebars;
                if(!(zuuluu == report)) { _fun00014_ip = 87; continue _fun00013 }
 85:
                report = {};
 87:
                _closure1_slot25 = report;
                entity = entity.guildSidebars;
                if(!(zuuluu == entity)) { _fun00014_ip = 103; continue _fun00013 }
 101:
                entity = {};
 103:
                _closure1_slot26 = entity;
 107:
                report = tangon.syncWith;
                michal = _closure1_slot8;
                zuuluu = new Array(2);
                zuuluu[0] = michal;
                michal = _closure1_slot11;
                zuuluu[1] = michal;
                michal = _closure1_slot31;
                michal = report.bind(tangon)(zuuluu, michal);
                report = tangon.syncWith;
                michal = _closure1_slot10;
                zuuluu = new Array(1);
                zuuluu[0] = michal;
                michal = _closure1_slot30;
                michal = report.bind(tangon)(zuuluu, michal);
                zuuluu = tangon.waitFor;
                michal = _closure1_slot11;
                entity = _closure1_slot8;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {};
            zuuluu = _closure1_slot21;
            entity['isMembersOpen'] = zuuluu;
            zuuluu = _closure1_slot22;
            entity['isSummariesOpen'] = zuuluu;
            zuuluu = _closure1_slot23;
            entity['isProfileOpen'] = zuuluu;
            zuuluu = _closure1_slot25;
            entity['sidebars'] = zuuluu;
            michal = _closure1_slot26;
            entity['guildSidebars'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getSection';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = _closure1_slot24;
                if(michal) { _fun00016_ip = 125; continue _fun00015 }
 10:
                tangon = _closure1_slot28;
                zuuluu = undefined;
                michal = argFoo;
                tangon = tangon.bind(zuuluu)(michal);
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00016_ip = 42; continue _fun00015 }
 30:
                michal = _closure1_slot25;
                michal = michal[tangon];
                if(!(zuuluu == michal)) { _fun00016_ip = 113; continue _fun00015 }
 42:
                michal = argBar;
                if(!michal) { _fun00016_ip = 55; continue _fun00015 }
 48:
                michal = _closure1_slot23;
                if(michal) { _fun00016_ip = 101; continue _fun00015 }
 55:
                michal = _closure1_slot22;
                if(michal) { _fun00016_ip = 89; continue _fun00015 }
 62:
                michal = _closure1_slot21;
                zuuluu = _closure1_slot15;
                if(michal) { _fun00016_ip = 81; continue _fun00015 }
 73:
                michal = zuuluu.NONE;
                _fun00016_ip = 87; continue _fun00015;
 81:
                michal = zuuluu.MEMBERS;
 87:
                _fun00016_ip = 99; continue _fun00015;
 89:
                zuuluu = _closure1_slot15;
                michal = zuuluu.SUMMARIES;
 99:
                _fun00016_ip = 111; continue _fun00015;
 101:
                zuuluu = _closure1_slot15;
                michal = zuuluu.PROFILE;
 111:
                _fun00016_ip = 123; continue _fun00015;
 113:
                zuuluu = _closure1_slot15;
                michal = zuuluu.SIDEBAR_CHAT;
 123:
                return michal;
 125:
                entity = _closure1_slot15;
                entity = entity.SEARCH;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getSidebarState';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tangon = _closure1_slot28;
                entity = undefined;
                zuuluu = argFoo;
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = null;
                tangon = tangon == zuuluu;
                if(tangon) { _fun00018_ip = 34; continue _fun00017 }
 26:
                michal = _closure1_slot25;
                entity = michal[zuuluu];
 34:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getGuildSidebarState';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                michal = entity == zuuluu;
                entity = undefined;
                if(michal) { _fun00020_ip = 25; continue _fun00019 }
 14:
                michal = _closure1_slot26;
                entity = michal[zuuluu];
 25:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getCurrentSidebarChannelId';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                michal = _closure1_slot28;
                golfie = undefined;
                entity = argFoo;
                tangon = michal.bind(golfie)(entity);
                entity = null;
                if(!(entity != tangon)) { _fun00022_ip = 140; continue _fun00021 }
 23:
                michal = _closure1_slot24;
                if(michal) { _fun00022_ip = 138; continue _fun00021 }
 30:
                michal = _closure1_slot25;
                tangon = michal[tangon];
                report = entity == tangon;
                michal = null;
                if(report) { _fun00022_ip = 136; continue _fun00021 }
 47:
                oscard = tangon.type;
                verify = _closure1_slot0;
                report = _closure1_slot2;
                option = 15;
                report = report[option];
                report = verify.bind(golfie)(report);
                report = report.SidebarType;
                report = report.VIEW_THREAD;
                if(!(oscard !== report)) { _fun00022_ip = 128; continue _fun00021 }
 88:
                oscard = tangon.type;
                report = _closure1_slot0;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu[option];
                zuuluu = report.bind(golfie)(zuuluu);
                zuuluu = zuuluu.SidebarType;
                report = zuuluu.VIEW_CHANNEL;
                zuuluu = null;
                if(!(oscard === report)) { _fun00022_ip = 133; continue _fun00021 }
 128:
                zuuluu = tangon.channelId;
 133:
                michal = zuuluu;
 136:
                return michal;
 138:
                return entity;
 140:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getCurrentSidebarMessageId';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                michal = _closure1_slot28;
                tangon = undefined;
                entity = argFoo;
                report = michal.bind(tangon)(entity);
                entity = null;
                if(!(entity != report)) { _fun00024_ip = 167; continue _fun00023 }
 26:
                michal = _closure1_slot24;
                if(michal) { _fun00024_ip = 165; continue _fun00023 }
 36:
                michal = _closure1_slot25;
                report = michal[report];
                oscard = entity == report;
                michal = null;
                if(oscard) { _fun00024_ip = 163; continue _fun00023 }
 53:
                golfie = report.type;
                verify = _closure1_slot0;
                oscard = _closure1_slot2;
                option = 15;
                oscard = oscard[option];
                oscard = verify.bind(tangon)(oscard);
                oscard = oscard.SidebarType;
                oscard = oscard.VIEW_THREAD;
                if(!(golfie !== oscard)) { _fun00024_ip = 134; continue _fun00023 }
 94:
                golfie = report.type;
                oscard = _closure1_slot0;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu[option];
                zuuluu = oscard.bind(tangon)(zuuluu);
                zuuluu = zuuluu.SidebarType;
                oscard = zuuluu.VIEW_CHANNEL;
                zuuluu = null;
                if(!(golfie === oscard)) { _fun00024_ip = 160; continue _fun00023 }
 134:
                report = report.details;
                oscard = entity == report;
                tangon = undefined;
                if(oscard) { _fun00024_ip = 157; continue _fun00023 }
 149:
                tangon = report.initialMessageId;
 157:
                zuuluu = tangon;
 160:
                michal = zuuluu;
 163:
                return michal;
 165:
                return entity;
 167:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[6] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = tangon.bind(entity)(option);
    tangon = 'ChannelSectionStore';
    verify['displayName'] = tangon;
    tangon = 'ChannelSectionStore2';
    verify['persistKey'] = tangon;
    tangon = 21;
    tangon = golfie[tangon];
    foxtra = report.bind(entity)(tangon);
    tangon = {};
    report = function() { // Original name: handleChannelToggleMembersSection
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = _closure1_slot22;
            if(!entity) { _fun00026_ip = 29; continue _fun00025 }
 10:
            tangon = _closure1_slot29;
            michal = _closure1_slot22;
            entity = undefined;
            entity = tangon.bind(entity)(michal);
            _closure1_slot22 = entity;
 29:
            tangon = _closure1_slot29;
            michal = _closure1_slot21;
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            _closure1_slot21 = michal;
            return entity;
        }
    };
    tangon['CHANNEL_TOGGLE_MEMBERS_SECTION'] = report;
    report = function() { // Original name: handleUserProfileSidebarToggleSection
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = _closure1_slot23;
            if(entity) { _fun00028_ip = 58; continue _fun00027 }
 10:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 16;
            michal = michal[entity];
            entity = undefined;
            entity = tangon.bind(entity)(michal);
            tangon = entity.ComponentDispatch;
            michal = tangon.dispatch;
            entity = _closure1_slot16;
            entity = entity.SEARCH_RESULTS_CLOSE;
            entity = michal.bind(tangon)(entity);
 58:
            tangon = _closure1_slot29;
            michal = _closure1_slot23;
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            _closure1_slot23 = michal;
            return entity;
        }
    };
    tangon['USER_PROFILE_SIDEBAR_TOGGLE_SECTION'] = report;
    report = function() { // Original name: handleChannelToggleSummariesSection
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = _closure1_slot21;
            if(!entity) { _fun00030_ip = 29; continue _fun00029 }
 10:
            tangon = _closure1_slot29;
            michal = _closure1_slot21;
            entity = undefined;
            entity = tangon.bind(entity)(michal);
            _closure1_slot21 = entity;
 29:
            tangon = _closure1_slot29;
            michal = _closure1_slot22;
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            _closure1_slot22 = michal;
            return entity;
        }
    };
    tangon['CHANNEL_TOGGLE_SUMMARIES_SECTION'] = report;
    report = function(argFoo) { // Original name: handleSidebarViewChannel
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            golfie = entity.sidebarType;
            tangon = entity.baseChannelId;
            oscard = entity.channelId;
            report = entity.details;
            entity = false;
            _closure1_slot24 = entity;
            zuuluu = _closure1_slot28;
            entity = undefined;
            tangon = zuuluu.bind(entity)(tangon);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00032_ip = 80; continue _fun00031 }
 55:
            zuuluu = _closure1_slot25;
            michal = {};
            michal['type'] = golfie;
            michal['channelId'] = oscard;
            michal['details'] = report;
            zuuluu[tangon] = michal;
            entity = true;
 80:
            return entity;
        }
    };
    tangon['SIDEBAR_VIEW_CHANNEL'] = report;
    report = function(argFoo) { // Original name: handleSidebarViewGuild
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            golfie = entity.sidebarType;
            tangon = entity.guildId;
            oscard = entity.baseChannelId;
            report = entity.details;
            entity = false;
            _closure1_slot24 = entity;
            zuuluu = _closure1_slot28;
            entity = undefined;
            oscard = zuuluu.bind(entity)(oscard);
            entity = null;
            entity = entity != oscard;
            if(!entity) { _fun00034_ip = 85; continue _fun00033 }
 55:
            zuuluu = _closure1_slot26;
            michal = {};
            michal['type'] = golfie;
            michal['baseChannelId'] = oscard;
            michal['guildId'] = tangon;
            michal['details'] = report;
            zuuluu[tangon] = michal;
            entity = true;
 85:
            return entity;
        }
    };
    tangon['SIDEBAR_VIEW_GUILD'] = report;
    report = function(argFoo) { // Original name: handleCreateThread
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            entity = argFoo;
            golfie = entity.parentChannelId;
            oscard = entity.parentMessageId;
            report = entity.location;
            entity = false;
            _closure1_slot24 = entity;
            michal = _closure1_slot28;
            entity = undefined;
            tangon = michal.bind(entity)(golfie);
            michal = null;
            if(!(michal != tangon)) { _fun00036_ip = 106; continue _fun00035 }
 46:
            zuuluu = _closure1_slot25;
            michal = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 15;
            option = offset[option];
            option = verify.bind(entity)(option);
            option = option.SidebarType;
            option = option.CREATE_THREAD;
            michal['type'] = option;
            michal['parentChannelId'] = golfie;
            michal['parentMessageId'] = oscard;
            michal['location'] = report;
            zuuluu[tangon] = michal;
 106:
            return entity;
        }
    };
    tangon['SIDEBAR_CREATE_THREAD'] = report;
    report = function(argFoo) { // Original name: handleCloseSidebar
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            tangon = entity.baseChannelId;
            zuuluu = _closure1_slot28;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(tangon);
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00038_ip = 37; continue _fun00037 }
 29:
            michal = _closure1_slot25;
            michal = delete michal[zuuluu];
 37:
            return entity;
        }
    };
    tangon['SIDEBAR_CLOSE'] = report;
    report = function(argFoo) { // Original name: handleGuildCloseSidebar
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            entity = _closure1_slot26;
            tangon = entity[zuuluu];
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00040_ip = 38; continue _fun00039 }
 28:
            michal = _closure1_slot26;
            michal = delete michal[zuuluu];
            entity = true;
 38:
            return entity;
        }
    };
    tangon['SIDEBAR_CLOSE_GUILD'] = report;
    report = function(argFoo) { // Original name: handleChannelDelete
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            zuuluu = entity.id;
            michal = _closure1_slot25;
            zuuluu = zuuluu in michal;
            michal = _closure1_slot25;
            if(zuuluu) { _fun00042_ip = 158; continue _fun00041 }
 34:
            romeon = michal;
            tangon = false;
            golfie = 15;
            oscard = undefined;
            report = null;
            zuuluu = false;
            for(verify in romeon)
 56:
            {
                zuuluu = tangon;
 68:
                sizing = verify;
                kiloes = _closure1_slot25;
                output = kiloes[sizing];
                kiloes = report != output;
                if(!kiloes) { _fun00042_ip = 124; continue _fun00041 }
 86:
                echoed = output.type;
                update = _closure1_slot0;
                result = _closure1_slot2;
                result = result[golfie];
                result = update.bind(oscard)(result);
                result = result.SidebarType;
                result = result.VIEW_CHANNEL;
                kiloes = echoed === result;
 124:
                if(!kiloes) { _fun00042_ip = 141; continue _fun00041 }
 127:
                result = output.channelId;
                output = entity.id;
                kiloes = result === output;
 141:
                if(!kiloes) { _fun00042_ip = 56; continue _fun00041 }
 144:
                kiloes = _closure1_slot25;
                kiloes = delete kiloes[sizing];
                tangon = true;
                _fun00042_ip = 56; continue _fun00041;
            }
 156:
            return zuuluu;
 158:
            entity = entity.id;
            entity = delete michal[entity];
            entity = true;
            return entity;
        }
    };
    tangon['CHANNEL_DELETE'] = report;
    report = function() { // Original name: handleChannelSelect
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 19;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            michal = michal.isMobile;
            if(!michal) { _fun00044_ip = 38; continue _fun00043 }
 34:
            michal = _closure1_slot21;
 38:
            if(!michal) { _fun00044_ip = 51; continue _fun00043 }
 41:
            michal = false;
            _closure1_slot21 = michal;
            _closure1_slot22 = michal;
 51:
            return entity;
        }
    };
    tangon['CHANNEL_SELECT'] = report;
    report = function(argFoo) { // Original name: handleThreadCreate
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            entity = argFoo;
            report = entity.channel;
            tangon = report.ownerId;
            michal = _closure1_slot14;
            entity = michal.getCurrentUser;
            golfie = entity.bind(michal)();
            michal = null;
            option = michal == golfie;
            entity = undefined;
            zuuluu = undefined;
            if(option) { _fun00046_ip = 48; continue _fun00045 }
 43:
            zuuluu = golfie.id;
 48:
            if(!(tangon !== zuuluu)) { _fun00046_ip = 232; continue _fun00045 }
 55:
            tangon = _closure1_slot25;
            zuuluu = report.parent_id;
            zuuluu = tangon[zuuluu];
            michal = michal != zuuluu;
            if(!michal) { _fun00046_ip = 117; continue _fun00045 }
 76:
            golfie = zuuluu.type;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 15;
            tangon = verify[tangon];
            tangon = option.bind(entity)(tangon);
            tangon = tangon.SidebarType;
            tangon = tangon.CREATE_THREAD;
            michal = golfie === tangon;
 117:
            if(!michal) { _fun00046_ip = 166; continue _fun00045 }
 120:
            tangon = zuuluu.parentMessageId;
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 17;
            zuuluu = option[zuuluu];
            option = golfie.bind(entity)(zuuluu);
            golfie = option.castChannelIdAsMessageId;
            zuuluu = report.id;
            zuuluu = golfie.bind(option)(zuuluu);
            michal = tangon === zuuluu;
 166:
            if(!michal) { _fun00046_ip = 230; continue _fun00045 }
 169:
            tangon = _closure1_slot25;
            zuuluu = report.parent_id;
            michal = {};
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 15;
            oscard = option[oscard];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.SidebarType;
            oscard = oscard.VIEW_THREAD;
            michal['type'] = oscard;
            report = report.id;
            michal['channelId'] = report;
            tangon[zuuluu] = michal;
 230:
            return entity;
 232:
            entity = false;
            return entity;
        }
    };
    tangon['THREAD_CREATE'] = report;
    report = function(argFoo) { // Original name: handleThreadDelete
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            entity = argFoo;
            michal = entity.channel;
            tangon = _closure1_slot25;
            entity = michal.parent_id;
            tangon = tangon[entity];
            entity = null;
            if(!(entity != tangon)) { _fun00048_ip = 104; continue _fun00047 }
 31:
            oscard = tangon.type;
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            entity = 15;
            report = report[entity];
            entity = undefined;
            report = golfie.bind(entity)(report);
            report = report.SidebarType;
            report = report.VIEW_THREAD;
            if(!(oscard === report)) { _fun00048_ip = 104; continue _fun00047 }
 74:
            report = tangon.channelId;
            tangon = michal.id;
            if(!(report === tangon)) { _fun00048_ip = 104; continue _fun00047 }
 88:
            zuuluu = _closure1_slot25;
            michal = michal.parent_id;
            michal = delete zuuluu[michal];
            return entity;
 104:
            entity = false;
            return entity;
        }
    };
    tangon['THREAD_DELETE'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    backup = report;
    romeon = tangon;
    tangon = new backup[verify](foxtra, romeon, yankee);
    tangon = tangon instanceof Object ? tangon : report;
    report = 22;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'stores/ChannelSectionStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = 'message_requests';
    zuuluu['MESSAGE_REQUESTS_BASE_CHANNEL_ID'] = tangon;
    michal = function(argFoo) { // Original name: isViewChannelSidebar
        tangon = _closure1_slot0;
        report = _closure1_slot2;
        entity = 15;
        zuuluu = report[entity];
        michal = undefined;
        zuuluu = tangon.bind(michal)(zuuluu);
        zuuluu = zuuluu.SidebarType;
        oscard = zuuluu.VIEW_CHANNEL;
        zuuluu = new Array(3);
        zuuluu[0] = oscard;
        oscard = report[entity];
        oscard = tangon.bind(michal)(oscard);
        oscard = oscard.SidebarType;
        oscard = oscard.VIEW_THREAD;
        zuuluu[1] = oscard;
        entity = report[entity];
        entity = tangon.bind(michal)(entity);
        entity = entity.SidebarType;
        entity = entity.VIEW_MESSAGE_REQUEST;
        zuuluu[2] = entity;
        michal = zuuluu.includes;
        entity = argFoo;
        entity = entity.type;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['isViewChannelSidebar'] = michal;
    return entity;
})();