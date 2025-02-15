// app/modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: GroupDMInviteManagement
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.channelId;
            var _closure2_slot0 = entity;
            tango = _closure1_slot5;
            zulu = tango.useState;
            entity = new Array(0);
            zulu = zulu.bind(tango)(entity);
            entity = _closure1_slot4;
            report = undefined;
            offset = 2;
            tango = entity.bind(report)(zulu, offset);
            zulu = 0;
            entity = tango[zulu];
            var _closure2_slot1 = entity;
            verify = 1;
            tango = tango[verify];
            var _closure2_slot2 = tango;
            options = _closure1_slot5;
            golf = options.useState;
            tango = true;
            golf = golf.bind(options)(tango);
            tango = _closure1_slot4;
            golf = tango.bind(report)(golf, offset);
            tango = golf[zulu];
            golf = golf[verify];
            var _closure2_slot3 = golf;
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            golf = 8;
            golf = yankee[golf];
            options = options.bind(report)(golf);
            golf = function() {
                zulu = function() {
                    tango = _closure1_slot3;
                    zulu = undefined;
                    mike = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(mike) { _fun00004_ip = 152; continue _fun00003 }
 10:
                                report = _closure1_slot0;
                                zulu = _closure1_slot2;
                                mike = 9;
                                mike = zulu[mike];
                                zulu = undefined;
                                mike = report.bind(zulu)(mike);
                                oscar = mike.HTTP;
                                report = oscar.get;
                                mike = {'url': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': true};
                                verify = _closure1_slot10;
                                options = verify.INSTANT_INVITES;
                                golf = _closure2_slot0;
                                golf = options.bind(verify)(golf);
                                mike['url'] = golf;
                                mike = report.bind(oscar)(mike);
                                SaveGenerator(address=96);
 94:
                                return mike;
 96:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(report) { _fun00004_ip = 149; continue _fun00003 }
 102:
                                golf = mike.body;
                                oscar = golf.map;
                                report = function(argFoo) {
                                    mike = argFoo;
                                    zulu = _closure1_slot8;
                                    entity = {};
                                    golf = entity;
                                    oscar = mike;
                                    tango = copyDataProperties(golf, oscar);
                                    report = mike.max_uses;
                                    tango = 'maxUses';
                                    entity[tango] = report;
                                    report = mike.max_age;
                                    tango = 'maxAge';
                                    entity[tango] = report;
                                    tango = mike.created_at;
                                    mike = 'createdAt';
                                    entity[mike] = tango;
                                    mike = zulu.prototype;
                                    mike = Object.create(mike, {constructor: {value: zulu}});
                                    options = mike;
                                    golf = entity;
                                    entity = new options[zulu](golf, oscar);
                                    entity = entity instanceof Object ? entity : mike;
                                    return entity;
                                };
                                oscar = oscar.bind(golf)(report);
                                report = _closure2_slot2;
                                report = report.bind(zulu)(oscar);
                                report = _closure2_slot3;
                                tango = false;
                                tango = report.bind(zulu)(tango);
                                return zulu;
 149:
                                return mike;
 152:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    mike = tango.bind(zulu)(mike);
                    var _closure4_slot0 = mike;
                    entity = function() {
                        entity = undefined;
                        tango = _closure4_slot0;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    return entity;
                };
                entity = undefined;
                zulu = zulu.bind(entity)();
                tango = zulu.bind(entity)();
                zulu = tango.catch;
                mike = function() {
                    zulu = _closure2_slot3;
                    entity = undefined;
                    mike = false;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            golf = options.bind(report)(golf);
            yankee = _closure1_slot5;
            options = yankee.useState;
            golf = 21;
            options = options.bind(yankee)(golf);
            golf = _closure1_slot4;
            golf = golf.bind(report)(options, offset);
            options = golf[zulu];
            golf = golf[verify];
            var _closure2_slot4 = golf;
            yankee = _closure1_slot5;
            offset = yankee.useMemo;
            verify = new Array(1);
            verify[0] = entity;
            golf = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.sortBy;
                mike = _closure2_slot1;
                entity = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = argFoo;
                        zulu = entity.inviter;
                        entity = null;
                        tango = entity == zulu;
                        mike = undefined;
                        if(tango) { _fun00006_ip = 44; continue _fun00005 }
 20:
                        tango = zulu.username;
                        zulu = entity == tango;
                        mike = undefined;
                        if(zulu) { _fun00006_ip = 44; continue _fun00005 }
 34:
                        zulu = tango.toLowerCase;
                        mike = zulu.bind(tango)();
 44:
                        zulu = entity != mike;
                        entity = '';
                        if(!zulu) { _fun00006_ip = 58; continue _fun00005 }
 55:
                        entity = mike;
 58:
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            yankee = offset.bind(yankee)(golf, verify);
            romeo = _closure1_slot5;
            offset = romeo.useEffect;
            verify = function() {
                zulu = _closure2_slot4;
                entity = undefined;
                mike = 21;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            golf = new Array(0);
            golf = offset.bind(romeo)(verify, golf);
            romeo = _closure1_slot5;
            offset = romeo.useCallback;
            verify = function(argFoo) {
                entity = argFoo;
                entity = entity.code;
                return entity;
            };
            golf = new Array(0);
            offset = offset.bind(romeo)(verify, golf);
            romeo = _closure1_slot5;
            verify = romeo.useCallback;
            golf = new Array(1);
            golf[0] = entity;
            oscar = function(argFoo) {
                entity = argFoo;
                options = entity.item;
                tango = _closure1_slot11;
                zulu = _closure1_slot6;
                mike = {};
                golf = {};
                oscar = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 11;
                offset = verify[entity];
                entity = undefined;
                offset = oscar.bind(entity)(offset);
                offset = offset.spacing;
                offset = offset.PX_12;
                golf['marginHorizontal'] = offset;
                mike['style'] = golf;
                golf = _closure1_slot11;
                report = 12;
                report = verify[report];
                oscar = oscar.bind(entity)(report);
                report = {};
                report['invite'] = options;
                options = function(argFoo) { // Original name: onInviteRevoked
                    mike = argFoo;
                    var _closure4_slot0 = mike;
                    zulu = _closure2_slot2;
                    tango = _closure2_slot1;
                    mike = tango.filter;
                    entity = function(argFoo) {
                        entity = argFoo;
                        mike = entity.code;
                        entity = _closure4_slot0;
                        entity = entity.code;
                        entity = mike !== entity;
                        return entity;
                    };
                    mike = mike.bind(tango)(entity);
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                report['onInviteRevoked'] = options;
                report = golf.bind(entity)(oscar, report);
                mike['children'] = report;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            verify = verify.bind(romeo)(oscar, golf);
            if(tango) { _fun00002_ip = 556; continue _fun00001 }
 298:
            entity = entity.length;
            if(!(zulu !== entity)) { _fun00002_ip = 385; continue _fun00001 }
 307:
            tango = _closure1_slot11;
            zulu = _closure1_slot12;
            entity = {};
            golf = _closure1_slot7;
            oscar = {};
            romeo = _closure1_slot13;
            romeo = romeo.list;
            oscar['style'] = romeo;
            oscar['data'] = yankee;
            oscar['keyExtractor'] = offset;
            oscar['renderItem'] = verify;
            verify = 10;
            oscar['initialNumToRender'] = verify;
            oscar['windowSize'] = options;
            oscar = tango.bind(report)(golf, oscar);
            entity['children'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            _fun00002_ip = 554; continue _fun00001;
 385:
            oscar = _closure1_slot11;
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            zulu = 14;
            zulu = yankee[zulu];
            tango = options.bind(report)(zulu);
            zulu = {};
            golf = 15;
            golf = yankee[golf];
            golf = options.bind(report)(golf);
            zulu['lightSource'] = golf;
            golf = 16;
            golf = yankee[golf];
            golf = options.bind(report)(golf);
            zulu['darkSource'] = golf;
            offset = _closure1_slot0;
            golf = 17;
            options = yankee[golf];
            options = offset.bind(report)(options);
            romeo = options.intl;
            verify = romeo.string;
            options = yankee[golf];
            options = offset.bind(report)(options);
            options = options.t;
            options = options.+nLJkZ;
            options = verify.bind(romeo)(options);
            zulu['title'] = options;
            options = yankee[golf];
            options = offset.bind(report)(options);
            verify = options.intl;
            options = verify.string;
            golf = yankee[golf];
            golf = offset.bind(report)(golf);
            golf = golf.t;
            golf = golf.F53CAQ;
            golf = options.bind(verify)(golf);
            zulu['body'] = golf;
            entity = oscar.bind(report)(tango, zulu);
 554:
            _fun00002_ip = 594; continue _fun00001;
 556:
            tango = _closure1_slot11;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 13;
            mike = oscar[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.SceneLoadingIndicator;
            mike = {};
            entity = tango.bind(report)(zulu, mike);
 594:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot5 = golf;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.Platform;
    verify = tango.StyleSheet;
    offset = tango.View;
    var _closure1_slot6 = offset;
    tango = tango.FlatList;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.ChannelSettingsSections;
    var _closure1_slot9 = options;
    tango = tango.Endpoints;
    var _closure1_slot10 = tango;
    tango = 7;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot11 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot12 = tango;
    options = verify.create;
    tango = {};
    offset = {};
    yankee = 8;
    offset['paddingTop'] = yankee;
    tango['list'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot13 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        mike = argFoo;
        golf = mike.channelId;
        var _closure2_slot0 = golf;
        oscar = mike.onClose;
        var _closure2_slot1 = oscar;
        tango = _closure1_slot5;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            tango = _closure2_slot0;
            zulu = _closure2_slot1;
            mike = function(argFoo, argBar) { // Original name: getScreens
                entity = argFoo;
                var _closure4_slot0 = entity;
                entity = {};
                mike = _closure1_slot9;
                zulu = mike.INSTANT_INVITES_MANAGEMENT;
                mike = {};
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                options = 17;
                verify = golf[options];
                report = undefined;
                verify = oscar.bind(report)(verify);
                offset = verify.intl;
                verify = offset.string;
                options = golf[options];
                options = oscar.bind(report)(options);
                options = options.t;
                options = options.OQ9MKi;
                options = verify.bind(offset)(options);
                mike['title'] = options;
                options = 18;
                options = golf[options];
                offset = oscar.bind(report)(options);
                verify = offset.getHeaderCloseButton;
                options = argBar;
                options = verify.bind(offset)(options);
                mike['headerLeft'] = options;
                tango = function() { // Original name: render
                    tango = _closure1_slot11;
                    zulu = _closure1_slot14;
                    mike = {};
                    entity = _closure4_slot0;
                    mike['channelId'] = entity;
                    entity = undefined;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                mike['render'] = tango;
                tango = 19;
                tango = golf[tango];
                tango = oscar.bind(report)(tango);
                tango = tango.ImpressionNames;
                tango = tango.GDM_SETTINGS_INVITES;
                mike['impressionName'] = tango;
                entity[zulu] = mike;
                return entity;
            };
            entity = undefined;
            entity = mike.bind(entity)(tango, zulu);
            return entity;
        };
        oscar = zulu.bind(tango)(entity, mike);
        tango = _closure1_slot11;
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 20;
        entity = zulu[entity];
        zulu = undefined;
        entity = mike.bind(zulu)(entity);
        mike = entity.Navigator;
        entity = {};
        entity['screens'] = oscar;
        report = _closure1_slot9;
        report = report.INSTANT_INVITES_MANAGEMENT;
        entity['initialRouteName'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 21;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();