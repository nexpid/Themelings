// app/stores/ChannelSectionStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun57034: for(var _fun57034_ip = 0; ; ) switch(_fun57034_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot26;
            entity = entity.bind(zulu)();
            if(entity) { _fun57034_ip = 51; continue _fun57034 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun57034_ip = 92; continue _fun57034;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun57034_ip = 71; continue _fun57034 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun57035: for(var _fun57035_ip = 0; ; ) switch(_fun57035_ip) {
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
            _fun57035_ip = 74; continue _fun57035;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot26 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: parseChannelId
        _fun57038: for(var _fun57038_ip = 0; ; ) switch(_fun57038_ip) {
 0:
            oscar = argFoo;
            entity = null;
            if(!(entity != oscar)) { _fun57038_ip = 63; continue _fun57038 }
 9:
            mike = _closure1_slot16;
            report = undefined;
            mike = mike.bind(report)(oscar);
            if(mike) { _fun57038_ip = 28; continue _fun57038 }
 26:
            return oscar;
 28:
            tango = _closure1_slot12;
            mike = tango.getGuildId;
            tango = mike.bind(tango)();
            golf = entity == tango;
            mike = null;
            if(golf) { _fun57038_ip = 61; continue _fun57038 }
 51:
            zulu = _closure1_slot17;
            mike = zulu.bind(report)(oscar, tango);
 61:
            return mike;
 63:
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo) { // Original name: toggleSection
        _fun57039: for(var _fun57039_ip = 0; ; ) switch(_fun57039_ip) {
 0:
            mike = argFoo;
            report = _closure1_slot22;
            tango = false;
            entity = false;
            if(!report) { _fun57039_ip = 23; continue _fun57039 }
 17:
            _closure1_slot22 = tango;
            entity = true;
 23:
            oscar = _closure1_slot27;
            report = _closure1_slot11;
            tango = report.getChannelId;
            report = tango.bind(report)();
            tango = undefined;
            tango = oscar.bind(tango)(report);
            report = null;
            report = report != tango;
            if(!report) { _fun57039_ip = 65; continue _fun57039 }
 57:
            oscar = _closure1_slot23;
            report = tango in oscar;
 65:
            if(!report) { _fun57039_ip = 78; continue _fun57039 }
 68:
            zulu = _closure1_slot23;
            zulu = delete zulu[tango];
            entity = true;
 78:
            if(!entity) { _fun57039_ip = 87; continue _fun57039 }
 81:
            entity = mike;
            if(entity) { _fun57039_ip = 90; continue _fun57039 }
 87:
            entity = !mike;
 90:
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: handlePermissionsChange
        _fun57040: for(var _fun57040_ip = 0; ; ) switch(_fun57040_ip) {
 0:
            romeo = _closure1_slot23;
            zulu = false;
            golf = undefined;
            report = null;
            tango = 14;
            mike = undefined;
            entity = false;
            for(options in romeo)
 31:
            {
                output = zulu;
                entity = output;
 49:
                sizing = options;
                backup = _closure1_slot23;
                backup = backup[sizing];
                result = backup.type;
                echo = _closure1_slot0;
                kilo = _closure1_slot2;
                kilo = kilo[tango];
                kilo = echo.bind(golf)(kilo);
                kilo = kilo.SidebarType;
                kilo = kilo.VIEW_THREAD;
                if(!(result !== kilo)) { _fun57040_ip = 139; continue _fun57040 }
 98:
                result = backup.type;
                echo = _closure1_slot0;
                kilo = _closure1_slot2;
                kilo = kilo[tango];
                kilo = echo.bind(golf)(kilo);
                kilo = kilo.SidebarType;
                kilo = kilo.VIEW_CHANNEL;
                zulu = output;
                if(result !== kilo) { _fun57040_ip = 31; continue _fun57040 }
 139:
                result = _closure1_slot8;
                kilo = result.getChannel;
                backup = backup.channelId;
                backup = kilo.bind(result)(backup);
                kilo = report != backup;
                if(!kilo) { _fun57040_ip = 191; continue _fun57040 }
 165:
                update = _closure1_slot9;
                echo = update.can;
                result = _closure1_slot18;
                result = result.VIEW_CHANNEL;
                kilo = echo.bind(update)(result, backup);
 191:
                zulu = output;
                mike = backup;
                if(kilo) { _fun57040_ip = 31; continue _fun57040 }
 203:
                kilo = _closure1_slot23;
                kilo = delete kilo[sizing];
                zulu = true;
                mike = backup;
                _fun57040_ip = 31; continue _fun57040;
            }
 221:
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: handleSyncSearchStore
        _fun57041: for(var _fun57041_ip = 0; ; ) switch(_fun57041_ip) {
 0:
            zulu = _closure1_slot22;
            tango = _closure1_slot10;
            entity = tango.isActive;
            entity = entity.bind(tango)();
            if(!(zulu !== entity)) { _fun57041_ip = 47; continue _fun57041 }
 25:
            zulu = _closure1_slot10;
            entity = zulu.isActive;
            entity = entity.bind(zulu)();
            _closure1_slot22 = entity;
            entity = undefined;
            return entity;
 47:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    options = true;
    tango['value'] = options;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 10;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 11;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    verify = tango.ChannelSections;
    var _closure1_slot14 = verify;
    tango = tango.ComponentActions;
    var _closure1_slot15 = tango;
    tango = 12;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    verify = tango.isStaticChannelRoute;
    var _closure1_slot16 = verify;
    tango = tango.buildGuildStaticChannelId;
    var _closure1_slot17 = tango;
    tango = 13;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot18 = tango;
    tango = false;
    var _closure1_slot19 = tango;
    var _closure1_slot20 = tango;
    var _closure1_slot21 = options;
    var _closure1_slot22 = tango;
    tango = {};
    var _closure1_slot23 = tango;
    tango = {};
    var _closure1_slot24 = tango;
    tango = 18;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    options = tango.PersistedStore;
    tango = function(argFoo) {
        tango = function() { // Original name: ChannelSectionStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot25;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun57044: for(var _fun57044_ip = 0; ; ) switch(_fun57044_ip) {
 0:
                entity = argFoo;
                tango = this;
                zulu = null;
                if(!(zulu != entity)) { _fun57044_ip = 107; continue _fun57044 }
 12:
                mike = entity.isMembersOpen;
                report = zulu != mike;
                if(!report) { _fun57044_ip = 28; continue _fun57044 }
 25:
                report = mike;
 28:
                _closure1_slot19 = report;
                oscar = entity.isSummariesOpen;
                report = zulu != oscar;
                if(!report) { _fun57044_ip = 51; continue _fun57044 }
 48:
                report = oscar;
 51:
                _closure1_slot20 = report;
                oscar = entity.isProfileOpen;
                report = zulu == oscar;
                if(report) { _fun57044_ip = 71; continue _fun57044 }
 68:
                report = oscar;
 71:
                _closure1_slot21 = report;
                report = entity.sidebars;
                if(!(zulu == report)) { _fun57044_ip = 87; continue _fun57044 }
 85:
                report = {};
 87:
                _closure1_slot23 = report;
                entity = entity.guildSidebars;
                if(!(zulu == entity)) { _fun57044_ip = 103; continue _fun57044 }
 101:
                entity = {};
 103:
                _closure1_slot24 = entity;
 107:
                report = tango.syncWith;
                mike = _closure1_slot10;
                zulu = new Array(1);
                zulu[0] = mike;
                mike = _closure1_slot30;
                mike = report.bind(tango)(zulu, mike);
                zulu = tango.syncWith;
                report = _closure1_slot9;
                mike = new Array(1);
                mike[0] = report;
                entity = _closure1_slot29;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {};
            zulu = _closure1_slot19;
            entity['isMembersOpen'] = zulu;
            zulu = _closure1_slot20;
            entity['isSummariesOpen'] = zulu;
            zulu = _closure1_slot21;
            entity['isProfileOpen'] = zulu;
            zulu = _closure1_slot23;
            entity['sidebars'] = zulu;
            mike = _closure1_slot24;
            entity['guildSidebars'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getSection';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun57046: for(var _fun57046_ip = 0; ; ) switch(_fun57046_ip) {
 0:
                mike = _closure1_slot22;
                if(mike) { _fun57046_ip = 125; continue _fun57046 }
 10:
                tango = _closure1_slot27;
                zulu = undefined;
                mike = argFoo;
                tango = tango.bind(zulu)(mike);
                zulu = null;
                if(!(zulu != tango)) { _fun57046_ip = 42; continue _fun57046 }
 30:
                mike = _closure1_slot23;
                mike = mike[tango];
                if(!(zulu == mike)) { _fun57046_ip = 113; continue _fun57046 }
 42:
                mike = argBar;
                if(!mike) { _fun57046_ip = 55; continue _fun57046 }
 48:
                mike = _closure1_slot21;
                if(mike) { _fun57046_ip = 101; continue _fun57046 }
 55:
                mike = _closure1_slot20;
                if(mike) { _fun57046_ip = 89; continue _fun57046 }
 62:
                mike = _closure1_slot19;
                zulu = _closure1_slot14;
                if(mike) { _fun57046_ip = 81; continue _fun57046 }
 73:
                mike = zulu.NONE;
                _fun57046_ip = 87; continue _fun57046;
 81:
                mike = zulu.MEMBERS;
 87:
                _fun57046_ip = 99; continue _fun57046;
 89:
                zulu = _closure1_slot14;
                mike = zulu.SUMMARIES;
 99:
                _fun57046_ip = 111; continue _fun57046;
 101:
                zulu = _closure1_slot14;
                mike = zulu.PROFILE;
 111:
                _fun57046_ip = 123; continue _fun57046;
 113:
                zulu = _closure1_slot14;
                mike = zulu.SIDEBAR_CHAT;
 123:
                return mike;
 125:
                entity = _closure1_slot14;
                entity = entity.SEARCH;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getSidebarState';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57047: for(var _fun57047_ip = 0; ; ) switch(_fun57047_ip) {
 0:
                tango = _closure1_slot27;
                entity = undefined;
                zulu = argFoo;
                zulu = tango.bind(entity)(zulu);
                tango = null;
                tango = tango == zulu;
                if(tango) { _fun57047_ip = 34; continue _fun57047 }
 26:
                mike = _closure1_slot23;
                entity = mike[zulu];
 34:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getGuildSidebarState';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57048: for(var _fun57048_ip = 0; ; ) switch(_fun57048_ip) {
 0:
                zulu = argFoo;
                entity = null;
                mike = entity == zulu;
                entity = undefined;
                if(mike) { _fun57048_ip = 25; continue _fun57048 }
 14:
                mike = _closure1_slot24;
                entity = mike[zulu];
 25:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getCurrentSidebarChannelId';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57049: for(var _fun57049_ip = 0; ; ) switch(_fun57049_ip) {
 0:
                mike = _closure1_slot27;
                golf = undefined;
                entity = argFoo;
                tango = mike.bind(golf)(entity);
                entity = null;
                if(!(entity != tango)) { _fun57049_ip = 140; continue _fun57049 }
 23:
                mike = _closure1_slot22;
                if(mike) { _fun57049_ip = 138; continue _fun57049 }
 30:
                mike = _closure1_slot23;
                tango = mike[tango];
                report = entity == tango;
                mike = null;
                if(report) { _fun57049_ip = 136; continue _fun57049 }
 47:
                oscar = tango.type;
                verify = _closure1_slot0;
                report = _closure1_slot2;
                options = 14;
                report = report[options];
                report = verify.bind(golf)(report);
                report = report.SidebarType;
                report = report.VIEW_THREAD;
                if(!(oscar !== report)) { _fun57049_ip = 128; continue _fun57049 }
 88:
                oscar = tango.type;
                report = _closure1_slot0;
                zulu = _closure1_slot2;
                zulu = zulu[options];
                zulu = report.bind(golf)(zulu);
                zulu = zulu.SidebarType;
                report = zulu.VIEW_CHANNEL;
                zulu = null;
                if(!(oscar === report)) { _fun57049_ip = 133; continue _fun57049 }
 128:
                zulu = tango.channelId;
 133:
                mike = zulu;
 136:
                return mike;
 138:
                return entity;
 140:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getCurrentSidebarMessageId';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun57050: for(var _fun57050_ip = 0; ; ) switch(_fun57050_ip) {
 0:
                mike = _closure1_slot27;
                tango = undefined;
                entity = argFoo;
                report = mike.bind(tango)(entity);
                entity = null;
                if(!(entity != report)) { _fun57050_ip = 167; continue _fun57050 }
 26:
                mike = _closure1_slot22;
                if(mike) { _fun57050_ip = 165; continue _fun57050 }
 36:
                mike = _closure1_slot23;
                report = mike[report];
                oscar = entity == report;
                mike = null;
                if(oscar) { _fun57050_ip = 163; continue _fun57050 }
 53:
                golf = report.type;
                verify = _closure1_slot0;
                oscar = _closure1_slot2;
                options = 14;
                oscar = oscar[options];
                oscar = verify.bind(tango)(oscar);
                oscar = oscar.SidebarType;
                oscar = oscar.VIEW_THREAD;
                if(!(golf !== oscar)) { _fun57050_ip = 134; continue _fun57050 }
 94:
                golf = report.type;
                oscar = _closure1_slot0;
                zulu = _closure1_slot2;
                zulu = zulu[options];
                zulu = oscar.bind(tango)(zulu);
                zulu = zulu.SidebarType;
                oscar = zulu.VIEW_CHANNEL;
                zulu = null;
                if(!(golf === oscar)) { _fun57050_ip = 160; continue _fun57050 }
 134:
                report = report.details;
                oscar = entity == report;
                tango = undefined;
                if(oscar) { _fun57050_ip = 157; continue _fun57050 }
 149:
                tango = report.initialMessageId;
 157:
                zulu = tango;
 160:
                mike = zulu;
 163:
                return mike;
 165:
                return entity;
 167:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[6] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = tango.bind(entity)(options);
    tango = 'ChannelSectionStore';
    verify['displayName'] = tango;
    tango = 'ChannelSectionStore2';
    verify['persistKey'] = tango;
    tango = 19;
    tango = golf[tango];
    foxtrot = report.bind(entity)(tango);
    tango = {};
    report = function() { // Original name: handleChannelToggleMembersSection
        _fun57051: for(var _fun57051_ip = 0; ; ) switch(_fun57051_ip) {
 0:
            entity = _closure1_slot20;
            if(!entity) { _fun57051_ip = 29; continue _fun57051 }
 10:
            tango = _closure1_slot28;
            mike = _closure1_slot20;
            entity = undefined;
            entity = tango.bind(entity)(mike);
            _closure1_slot20 = entity;
 29:
            tango = _closure1_slot28;
            mike = _closure1_slot19;
            entity = undefined;
            mike = tango.bind(entity)(mike);
            _closure1_slot19 = mike;
            return entity;
        }
    };
    tango['CHANNEL_TOGGLE_MEMBERS_SECTION'] = report;
    report = function() { // Original name: handleProfilePanelToggleSection
        _fun57052: for(var _fun57052_ip = 0; ; ) switch(_fun57052_ip) {
 0:
            entity = _closure1_slot21;
            if(entity) { _fun57052_ip = 58; continue _fun57052 }
 10:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 15;
            mike = mike[entity];
            entity = undefined;
            entity = tango.bind(entity)(mike);
            tango = entity.ComponentDispatch;
            mike = tango.dispatch;
            entity = _closure1_slot15;
            entity = entity.SEARCH_RESULTS_CLOSE;
            entity = mike.bind(tango)(entity);
 58:
            tango = _closure1_slot28;
            mike = _closure1_slot21;
            entity = undefined;
            mike = tango.bind(entity)(mike);
            _closure1_slot21 = mike;
            return entity;
        }
    };
    tango['PROFILE_PANEL_TOGGLE_SECTION'] = report;
    report = function() { // Original name: handleChannelToggleSummariesSection
        _fun57053: for(var _fun57053_ip = 0; ; ) switch(_fun57053_ip) {
 0:
            entity = _closure1_slot19;
            if(!entity) { _fun57053_ip = 29; continue _fun57053 }
 10:
            tango = _closure1_slot28;
            mike = _closure1_slot19;
            entity = undefined;
            entity = tango.bind(entity)(mike);
            _closure1_slot19 = entity;
 29:
            tango = _closure1_slot28;
            mike = _closure1_slot20;
            entity = undefined;
            mike = tango.bind(entity)(mike);
            _closure1_slot20 = mike;
            return entity;
        }
    };
    tango['CHANNEL_TOGGLE_SUMMARIES_SECTION'] = report;
    report = function(argFoo) { // Original name: handleSidebarViewChannel
        _fun57054: for(var _fun57054_ip = 0; ; ) switch(_fun57054_ip) {
 0:
            entity = argFoo;
            golf = entity.sidebarType;
            tango = entity.baseChannelId;
            oscar = entity.channelId;
            report = entity.details;
            entity = false;
            _closure1_slot22 = entity;
            zulu = _closure1_slot27;
            entity = undefined;
            tango = zulu.bind(entity)(tango);
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun57054_ip = 80; continue _fun57054 }
 55:
            zulu = _closure1_slot23;
            mike = {};
            mike['type'] = golf;
            mike['channelId'] = oscar;
            mike['details'] = report;
            zulu[tango] = mike;
            entity = true;
 80:
            return entity;
        }
    };
    tango['SIDEBAR_VIEW_CHANNEL'] = report;
    report = function(argFoo) { // Original name: handleSidebarViewGuild
        _fun57055: for(var _fun57055_ip = 0; ; ) switch(_fun57055_ip) {
 0:
            entity = argFoo;
            golf = entity.sidebarType;
            tango = entity.guildId;
            oscar = entity.baseChannelId;
            report = entity.details;
            entity = false;
            _closure1_slot22 = entity;
            zulu = _closure1_slot27;
            entity = undefined;
            oscar = zulu.bind(entity)(oscar);
            entity = null;
            entity = entity != oscar;
            if(!entity) { _fun57055_ip = 85; continue _fun57055 }
 55:
            zulu = _closure1_slot24;
            mike = {};
            mike['type'] = golf;
            mike['baseChannelId'] = oscar;
            mike['guildId'] = tango;
            mike['details'] = report;
            zulu[tango] = mike;
            entity = true;
 85:
            return entity;
        }
    };
    tango['SIDEBAR_VIEW_GUILD'] = report;
    report = function(argFoo) { // Original name: handleCreateThread
        _fun57056: for(var _fun57056_ip = 0; ; ) switch(_fun57056_ip) {
 0:
            entity = argFoo;
            golf = entity.parentChannelId;
            oscar = entity.parentMessageId;
            report = entity.location;
            entity = false;
            _closure1_slot22 = entity;
            mike = _closure1_slot27;
            entity = undefined;
            tango = mike.bind(entity)(golf);
            mike = null;
            if(!(mike != tango)) { _fun57056_ip = 106; continue _fun57056 }
 46:
            zulu = _closure1_slot23;
            mike = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            options = 14;
            options = offset[options];
            options = verify.bind(entity)(options);
            options = options.SidebarType;
            options = options.CREATE_THREAD;
            mike['type'] = options;
            mike['parentChannelId'] = golf;
            mike['parentMessageId'] = oscar;
            mike['location'] = report;
            zulu[tango] = mike;
 106:
            return entity;
        }
    };
    tango['SIDEBAR_CREATE_THREAD'] = report;
    report = function(argFoo) { // Original name: handleCloseSidebar
        _fun57057: for(var _fun57057_ip = 0; ; ) switch(_fun57057_ip) {
 0:
            entity = argFoo;
            tango = entity.baseChannelId;
            zulu = _closure1_slot27;
            entity = undefined;
            zulu = zulu.bind(entity)(tango);
            tango = null;
            if(!(tango != zulu)) { _fun57057_ip = 37; continue _fun57057 }
 29:
            mike = _closure1_slot23;
            mike = delete mike[zulu];
 37:
            return entity;
        }
    };
    tango['SIDEBAR_CLOSE'] = report;
    report = function(argFoo) { // Original name: handleGuildCloseSidebar
        _fun57058: for(var _fun57058_ip = 0; ; ) switch(_fun57058_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            entity = _closure1_slot24;
            tango = entity[zulu];
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun57058_ip = 38; continue _fun57058 }
 28:
            mike = _closure1_slot24;
            mike = delete mike[zulu];
            entity = true;
 38:
            return entity;
        }
    };
    tango['SIDEBAR_CLOSE_GUILD'] = report;
    report = function(argFoo) { // Original name: handleChannelDelete
        _fun57059: for(var _fun57059_ip = 0; ; ) switch(_fun57059_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            zulu = entity.id;
            mike = _closure1_slot23;
            zulu = zulu in mike;
            mike = _closure1_slot23;
            if(zulu) { _fun57059_ip = 158; continue _fun57059 }
 34:
            romeo = mike;
            tango = false;
            golf = 14;
            oscar = undefined;
            report = null;
            zulu = false;
            for(verify in romeo)
 56:
            {
                zulu = tango;
 68:
                sizing = verify;
                kilo = _closure1_slot23;
                output = kilo[sizing];
                kilo = report != output;
                if(!kilo) { _fun57059_ip = 124; continue _fun57059 }
 86:
                echo = output.type;
                update = _closure1_slot0;
                result = _closure1_slot2;
                result = result[golf];
                result = update.bind(oscar)(result);
                result = result.SidebarType;
                result = result.VIEW_CHANNEL;
                kilo = echo === result;
 124:
                if(!kilo) { _fun57059_ip = 141; continue _fun57059 }
 127:
                result = output.channelId;
                output = entity.id;
                kilo = result === output;
 141:
                if(!kilo) { _fun57059_ip = 56; continue _fun57059 }
 144:
                kilo = _closure1_slot23;
                kilo = delete kilo[sizing];
                tango = true;
                _fun57059_ip = 56; continue _fun57059;
            }
 156:
            return zulu;
 158:
            entity = entity.id;
            entity = delete mike[entity];
            entity = true;
            return entity;
        }
    };
    tango['CHANNEL_DELETE'] = report;
    report = function() { // Original name: handleChannelSelect
        _fun57060: for(var _fun57060_ip = 0; ; ) switch(_fun57060_ip) {
 0:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            mike = mike.isMobile;
            if(!mike) { _fun57060_ip = 38; continue _fun57060 }
 34:
            mike = _closure1_slot19;
 38:
            if(!mike) { _fun57060_ip = 51; continue _fun57060 }
 41:
            mike = false;
            _closure1_slot19 = mike;
            _closure1_slot20 = mike;
 51:
            return entity;
        }
    };
    tango['CHANNEL_SELECT'] = report;
    report = function(argFoo) { // Original name: handleThreadCreate
        _fun57061: for(var _fun57061_ip = 0; ; ) switch(_fun57061_ip) {
 0:
            entity = argFoo;
            report = entity.channel;
            tango = report.ownerId;
            mike = _closure1_slot13;
            entity = mike.getCurrentUser;
            golf = entity.bind(mike)();
            mike = null;
            options = mike == golf;
            entity = undefined;
            zulu = undefined;
            if(options) { _fun57061_ip = 48; continue _fun57061 }
 43:
            zulu = golf.id;
 48:
            if(!(tango !== zulu)) { _fun57061_ip = 232; continue _fun57061 }
 55:
            tango = _closure1_slot23;
            zulu = report.parent_id;
            zulu = tango[zulu];
            mike = mike != zulu;
            if(!mike) { _fun57061_ip = 117; continue _fun57061 }
 76:
            golf = zulu.type;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 14;
            tango = verify[tango];
            tango = options.bind(entity)(tango);
            tango = tango.SidebarType;
            tango = tango.CREATE_THREAD;
            mike = golf === tango;
 117:
            if(!mike) { _fun57061_ip = 166; continue _fun57061 }
 120:
            tango = zulu.parentMessageId;
            golf = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 16;
            zulu = options[zulu];
            options = golf.bind(entity)(zulu);
            golf = options.castChannelIdAsMessageId;
            zulu = report.id;
            zulu = golf.bind(options)(zulu);
            mike = tango === zulu;
 166:
            if(!mike) { _fun57061_ip = 230; continue _fun57061 }
 169:
            tango = _closure1_slot23;
            zulu = report.parent_id;
            mike = {};
            golf = _closure1_slot0;
            options = _closure1_slot2;
            oscar = 14;
            oscar = options[oscar];
            oscar = golf.bind(entity)(oscar);
            oscar = oscar.SidebarType;
            oscar = oscar.VIEW_THREAD;
            mike['type'] = oscar;
            report = report.id;
            mike['channelId'] = report;
            tango[zulu] = mike;
 230:
            return entity;
 232:
            entity = false;
            return entity;
        }
    };
    tango['THREAD_CREATE'] = report;
    report = function(argFoo) { // Original name: handleThreadDelete
        _fun57062: for(var _fun57062_ip = 0; ; ) switch(_fun57062_ip) {
 0:
            entity = argFoo;
            mike = entity.channel;
            tango = _closure1_slot23;
            entity = mike.parent_id;
            tango = tango[entity];
            entity = null;
            if(!(entity != tango)) { _fun57062_ip = 104; continue _fun57062 }
 31:
            oscar = tango.type;
            golf = _closure1_slot0;
            report = _closure1_slot2;
            entity = 14;
            report = report[entity];
            entity = undefined;
            report = golf.bind(entity)(report);
            report = report.SidebarType;
            report = report.VIEW_THREAD;
            if(!(oscar === report)) { _fun57062_ip = 104; continue _fun57062 }
 74:
            report = tango.channelId;
            tango = mike.id;
            if(!(report === tango)) { _fun57062_ip = 104; continue _fun57062 }
 88:
            zulu = _closure1_slot23;
            mike = mike.parent_id;
            mike = delete zulu[mike];
            return entity;
 104:
            entity = false;
            return entity;
        }
    };
    tango['THREAD_DELETE'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    backup = report;
    romeo = tango;
    tango = new backup[verify](foxtrot, romeo, yankee);
    tango = tango instanceof Object ? tango : report;
    report = 20;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'stores/ChannelSectionStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    tango = 'message_requests';
    zulu['MESSAGE_REQUESTS_BASE_CHANNEL_ID'] = tango;
    mike = function(argFoo) { // Original name: isViewChannelSidebar
        tango = _closure1_slot0;
        report = _closure1_slot2;
        entity = 14;
        zulu = report[entity];
        mike = undefined;
        zulu = tango.bind(mike)(zulu);
        zulu = zulu.SidebarType;
        oscar = zulu.VIEW_CHANNEL;
        zulu = new Array(3);
        zulu[0] = oscar;
        oscar = report[entity];
        oscar = tango.bind(mike)(oscar);
        oscar = oscar.SidebarType;
        oscar = oscar.VIEW_THREAD;
        zulu[1] = oscar;
        entity = report[entity];
        entity = tango.bind(mike)(entity);
        entity = entity.SidebarType;
        entity = entity.VIEW_MESSAGE_REQUEST;
        zulu[2] = entity;
        mike = zulu.includes;
        entity = argFoo;
        entity = entity.type;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['isViewChannelSidebar'] = mike;
    return entity;
})();