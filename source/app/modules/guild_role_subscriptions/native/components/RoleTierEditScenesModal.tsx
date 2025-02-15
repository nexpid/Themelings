// app/modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: getComponentPropsForScreen
        _fun127078: for(var _fun127078_ip = 0; ; ) switch(_fun127078_ip) {
 0:
            options = argFoo;
            entity = argBar;
            mike = entity[options];
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 6;
            entity = tango[entity];
            tango = undefined;
            oscar = zulu.bind(tango)(entity);
            zulu = null;
            report = zulu != mike;
            entity = global;
            entity = entity.HermesInternal;
            golf = entity.concat;
            entity = 'Props not provided in screen map for scene ';
            entity = golf.bind(entity)(options);
            entity = oscar.bind(tango)(report, entity);
            entity = mike.getRuntimeProps;
            entity = zulu == entity;
            if(entity) { _fun127078_ip = 94; continue _fun127078 }
 84:
            entity = mike.getRuntimeProps;
            tango = entity.bind(mike)();
 94:
            if(!(zulu == tango)) { _fun127078_ip = 100; continue _fun127078 }
 98:
            tango = {};
 100:
            entity = {};
            verify = argBaz;
            offset = entity;
            report = copyDataProperties(offset, verify);
            offset = entity;
            verify = mike;
            report = copyDataProperties(offset, verify);
            offset = entity;
            verify = tango;
            tango = copyDataProperties(offset, verify);
            mike = mike.extraProps;
            if(!(zulu == mike)) { _fun127078_ip = 146; continue _fun127078 }
 142:
            mike = new Array(0);
 146:
            offset = entity;
            verify = mike;
            mike = copyDataProperties(offset, verify);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: getScreenPropsForScene
        _fun127079: for(var _fun127079_ip = 0; ; ) switch(_fun127079_ip) {
 0:
            zulu = argBar;
            mike = null;
            if(!(mike != zulu)) { _fun127079_ip = 24; continue _fun127079 }
 9:
            entity = argFoo;
            entity = zulu[entity];
            if(!(mike == entity)) { _fun127079_ip = 22; continue _fun127079 }
 20:
            entity = {};
 22:
            return entity;
 24:
            entity = {};
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: getHeaderRight
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        entity = function() {
            tango = _closure1_slot8;
            mike = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 7;
            entity = golf[entity];
            zulu = undefined;
            entity = mike.bind(zulu)(entity);
            mike = entity.HeaderActionButton;
            entity = {};
            oscar = _closure1_slot1;
            report = 8;
            report = golf[report];
            report = oscar.bind(zulu)(report);
            entity['source'] = report;
            report = function() { // Original name: onPress
                zulu = _closure2_slot1;
                mike = _closure2_slot0;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            entity['onPress'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: buildInitialRouteStack
        _fun127083: for(var _fun127083_ip = 0; ; ) switch(_fun127083_ip) {
 0:
            zulu = argFoo;
            oscar = argBar;
            mike = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 6;
            entity = tango[entity];
            golf = undefined;
            report = mike.bind(golf)(entity);
            mike = zulu.length;
            entity = 0;
            tango = mike > entity;
            mike = 'At least one step must be provided to RoleTierEditScenesModal';
            mike = report.bind(golf)(tango, mike);
            mike = null;
            if(!(mike != oscar)) { _fun127083_ip = 116; continue _fun127083 }
 60:
            mike = new Array(0);
            tango = zulu.length;
            tango = entity < tango;
            report = 0;
            if(!tango) { _fun127083_ip = 114; continue _fun127083 }
 78:
            tango = zulu[report];
            options = mike.push;
            golf = {};
            golf['name'] = tango;
            golf = options.bind(mike)(golf);
            if(!(tango !== oscar)) { _fun127083_ip = 114; continue _fun127083 }
 102:
            report = report + 1;
            tango = zulu.length;
            if(report < tango) { _fun127083_ip = 78; continue _fun127083 }
 114:
            return mike;
 116:
            mike = {};
            entity = zulu[entity];
            mike['name'] = entity;
            entity = new Array(1);
            entity[0] = mike;
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: orderify
        _fun127084: for(var _fun127084_ip = 0; ; ) switch(_fun127084_ip) {
 0:
            zulu = argFoo;
            mike = argBar;
            entity = 1;
            tango = mike + entity;
            mike = 'string';
            entity = typeof zulu;
            if(!(mike !== entity)) { _fun127084_ip = 47; continue _fun127084 }
 24:
            entity = {};
            oscar = entity;
            report = zulu;
            mike = copyDataProperties(oscar, report);
            mike = 'stepNumber';
            entity[mike] = tango;
            _fun127084_ip = 62; continue _fun127084;
 47:
            mike = {};
            mike['stepNumber'] = tango;
            mike['scene'] = zulu;
            entity = mike;
 62:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: buildScreenMap
        _fun127085: for(var _fun127085_ip = 0; ; ) switch(_fun127085_ip) {
 0:
            tango = argFoo;
            backup = tango.steps;
            oscar = tango.stepScreenPropsMap;
            foxtrot = null;
            zulu = Object.create(foxtrot);
            golf = 0;
            zulu['steps'] = golf;
            zulu['stepScreenPropsMap'] = golf;
            source = {};
            update = tango;
            echo = zulu;
            report = copyDataProperties(source, update, echo);
            tango = {};
            zulu = backup.map;
            mike = _closure1_slot16;
            romeo = zulu.bind(backup)(mike);
            mike = global;
            options = mike.Math;
            zulu = options.max;
            verify = romeo.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.stepNumber;
                return entity;
            };
            update = verify.bind(romeo)(mike);
            mike = new Array(0);
            source = mike;
            echo = 0;
            verify = arraySpread(source, update, echo);
            source = zulu;
            update = mike;
            echo = options;
            yankee = apply(source, update, echo);
            mike = backup.length;
            mike = golf < mike;
            offset = 'nextStep';
            verify = 'stepsCount';
            options = 1;
            if(!mike) { _fun127085_ip = 230; continue _fun127085 }
 146:
            mike = romeo[golf];
            kilo = mike.scene;
            mike = golf + options;
            sizing = romeo[mike];
            output = foxtrot == sizing;
            mike = undefined;
            if(output) { _fun127085_ip = 179; continue _fun127085 }
 173:
            mike = sizing.scene;
 179:
            output = foxtrot != mike;
            sizing = null;
            if(!output) { _fun127085_ip = 191; continue _fun127085 }
 188:
            sizing = mike;
 191:
            mike = {};
            update = romeo[golf];
            source = mike;
            output = copyDataProperties(source, update);
            mike[offset] = sizing;
            mike[verify] = yankee;
            tango[kilo] = mike;
            golf = golf + 1;
            mike = backup.length;
            if(golf < mike) { _fun127085_ip = 146; continue _fun127085 }
 230:
            mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: getScreens
                foxtrot = argBaz;
                verify = argCorge;
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                offset = {};
                entity = true;
                offset['fullscreen'] = entity;
                entity = function() { // Original name: headerTitle
                    entity = null;
                    return entity;
                };
                offset['headerTitle'] = entity;
                entity = {};
                mike = _closure1_slot7;
                zulu = mike.GATING;
                mike = {};
                sizing = mike;
                kilo = offset;
                report = copyDataProperties(sizing, kilo);
                romeo = _closure1_slot14;
                report = _closure1_slot7;
                report = report.GATING;
                options = undefined;
                report = romeo.bind(options)(report, foxtrot);
                yankee = 'headerRight';
                mike[yankee] = report;
                golf = _closure1_slot13;
                report = _closure1_slot7;
                report = report.GATING;
                kilo = golf.bind(options)(report, verify);
                sizing = mike;
                report = copyDataProperties(sizing, kilo);
                backup = function() { // Original name: render
                    oscar = _closure1_slot12;
                    mike = _closure1_slot7;
                    report = mike.GATING;
                    zulu = _closure3_slot0;
                    mike = _closure3_slot1;
                    tango = undefined;
                    options = oscar.bind(tango)(report, zulu, mike);
                    zulu = _closure1_slot8;
                    mike = _closure1_slot1;
                    oscar = _closure1_slot2;
                    entity = 9;
                    entity = oscar[entity];
                    mike = mike.bind(tango)(entity);
                    entity = {};
                    verify = entity;
                    report = copyDataProperties(verify, options);
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                report = 'render';
                mike[report] = backup;
                entity[zulu] = mike;
                mike = _closure1_slot7;
                zulu = mike.GROUP;
                mike = {};
                sizing = mike;
                kilo = offset;
                backup = copyDataProperties(sizing, kilo);
                backup = _closure1_slot7;
                backup = backup.GROUP;
                backup = romeo.bind(options)(backup, foxtrot);
                mike[yankee] = backup;
                backup = _closure1_slot7;
                backup = backup.GROUP;
                kilo = golf.bind(options)(backup, verify);
                sizing = mike;
                backup = copyDataProperties(sizing, kilo);
                backup = function() { // Original name: render
                    oscar = _closure1_slot12;
                    mike = _closure1_slot7;
                    report = mike.GROUP;
                    zulu = _closure3_slot0;
                    mike = _closure3_slot1;
                    tango = undefined;
                    options = oscar.bind(tango)(report, zulu, mike);
                    zulu = _closure1_slot8;
                    mike = _closure1_slot1;
                    oscar = _closure1_slot2;
                    entity = 10;
                    entity = oscar[entity];
                    mike = mike.bind(tango)(entity);
                    entity = {};
                    verify = entity;
                    report = copyDataProperties(verify, options);
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                mike[report] = backup;
                entity[zulu] = mike;
                mike = _closure1_slot7;
                zulu = mike.CHANNEL_BENEFITS;
                mike = {};
                sizing = mike;
                kilo = offset;
                backup = copyDataProperties(sizing, kilo);
                backup = _closure1_slot7;
                backup = backup.CHANNEL_BENEFITS;
                backup = romeo.bind(options)(backup, foxtrot);
                mike[yankee] = backup;
                backup = _closure1_slot7;
                backup = backup.CHANNEL_BENEFITS;
                kilo = golf.bind(options)(backup, verify);
                sizing = mike;
                backup = copyDataProperties(sizing, kilo);
                backup = function() { // Original name: render
                    oscar = _closure1_slot12;
                    mike = _closure1_slot7;
                    report = mike.CHANNEL_BENEFITS;
                    zulu = _closure3_slot0;
                    mike = _closure3_slot1;
                    tango = undefined;
                    options = oscar.bind(tango)(report, zulu, mike);
                    zulu = _closure1_slot8;
                    mike = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 11;
                    entity = oscar[entity];
                    entity = mike.bind(tango)(entity);
                    mike = entity.GuildRoleSubscriptionTierChannelBenefitsModal;
                    entity = {};
                    verify = entity;
                    report = copyDataProperties(verify, options);
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                mike[report] = backup;
                entity[zulu] = mike;
                mike = _closure1_slot7;
                zulu = mike.INTANGIBLE_BENEFITS;
                mike = {};
                sizing = mike;
                kilo = offset;
                backup = copyDataProperties(sizing, kilo);
                backup = _closure1_slot7;
                backup = backup.INTANGIBLE_BENEFITS;
                backup = romeo.bind(options)(backup, foxtrot);
                mike[yankee] = backup;
                backup = _closure1_slot7;
                backup = backup.INTANGIBLE_BENEFITS;
                kilo = golf.bind(options)(backup, verify);
                sizing = mike;
                backup = copyDataProperties(sizing, kilo);
                backup = function() { // Original name: render
                    oscar = _closure1_slot12;
                    mike = _closure1_slot7;
                    report = mike.INTANGIBLE_BENEFITS;
                    zulu = _closure3_slot0;
                    mike = _closure3_slot1;
                    tango = undefined;
                    options = oscar.bind(tango)(report, zulu, mike);
                    zulu = _closure1_slot8;
                    mike = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 11;
                    entity = oscar[entity];
                    entity = mike.bind(tango)(entity);
                    mike = entity.GuildRoleSubscriptionTierIntangibleBenefitsModal;
                    entity = {};
                    verify = entity;
                    report = copyDataProperties(verify, options);
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                mike[report] = backup;
                entity[zulu] = mike;
                mike = _closure1_slot7;
                zulu = mike.CONFIRMATION;
                mike = {};
                sizing = mike;
                kilo = offset;
                backup = copyDataProperties(sizing, kilo);
                backup = _closure1_slot7;
                backup = backup.CONFIRMATION;
                backup = romeo.bind(options)(backup, foxtrot);
                mike[yankee] = backup;
                backup = _closure1_slot7;
                backup = backup.CONFIRMATION;
                kilo = golf.bind(options)(backup, verify);
                sizing = mike;
                backup = copyDataProperties(sizing, kilo);
                backup = function() { // Original name: render
                    oscar = _closure1_slot12;
                    mike = _closure1_slot7;
                    report = mike.CONFIRMATION;
                    zulu = _closure3_slot0;
                    mike = _closure3_slot1;
                    tango = undefined;
                    options = oscar.bind(tango)(report, zulu, mike);
                    zulu = _closure1_slot8;
                    mike = _closure1_slot1;
                    oscar = _closure1_slot2;
                    entity = 12;
                    entity = oscar[entity];
                    mike = mike.bind(tango)(entity);
                    entity = {};
                    verify = entity;
                    report = copyDataProperties(verify, options);
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                mike[report] = backup;
                entity[zulu] = mike;
                mike = _closure1_slot7;
                zulu = mike.DESIGN;
                mike = {};
                sizing = mike;
                kilo = offset;
                backup = copyDataProperties(sizing, kilo);
                backup = _closure1_slot7;
                backup = backup.DESIGN;
                backup = romeo.bind(options)(backup, foxtrot);
                mike[yankee] = backup;
                backup = _closure1_slot7;
                backup = backup.DESIGN;
                kilo = golf.bind(options)(backup, verify);
                sizing = mike;
                backup = copyDataProperties(sizing, kilo);
                backup = function() { // Original name: render
                    oscar = _closure1_slot12;
                    mike = _closure1_slot7;
                    report = mike.DESIGN;
                    zulu = _closure3_slot0;
                    mike = _closure3_slot1;
                    tango = undefined;
                    options = oscar.bind(tango)(report, zulu, mike);
                    zulu = _closure1_slot8;
                    mike = _closure1_slot1;
                    oscar = _closure1_slot2;
                    entity = 13;
                    entity = oscar[entity];
                    mike = mike.bind(tango)(entity);
                    entity = {};
                    verify = entity;
                    report = copyDataProperties(verify, options);
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                mike[report] = backup;
                entity[zulu] = mike;
                mike = _closure1_slot7;
                zulu = mike.DETAILS;
                mike = {};
                sizing = mike;
                kilo = offset;
                offset = copyDataProperties(sizing, kilo);
                offset = _closure1_slot7;
                offset = offset.DETAILS;
                offset = romeo.bind(options)(offset, foxtrot);
                mike[yankee] = offset;
                oscar = _closure1_slot7;
                oscar = oscar.DETAILS;
                kilo = golf.bind(options)(oscar, verify);
                sizing = mike;
                oscar = copyDataProperties(sizing, kilo);
                tango = function() { // Original name: render
                    oscar = _closure1_slot12;
                    mike = _closure1_slot7;
                    report = mike.DETAILS;
                    zulu = _closure3_slot0;
                    mike = _closure3_slot1;
                    tango = undefined;
                    options = oscar.bind(tango)(report, zulu, mike);
                    zulu = _closure1_slot8;
                    mike = _closure1_slot1;
                    oscar = _closure1_slot2;
                    entity = 14;
                    entity = oscar[entity];
                    mike = mike.bind(tango)(entity);
                    entity = {};
                    verify = entity;
                    report = copyDataProperties(verify, options);
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                mike[report] = tango;
                entity[zulu] = mike;
                return entity;
            };
            echo = argBar;
            control = undefined;
            source = tango;
            update = report;
            result = oscar;
            entity = control[mike](source, update, echo, result, output);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.useCurrentTierEditScene;
    var _closure1_slot5 = golf;
    tango = tango.useResetTierEditState;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildRoleSubscriptionsTierScenes;
    var _closure1_slot7 = tango;
    tango = 4;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot8 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot9 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot10 = tango;
    tango = 5;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'position': 'absolute', 'alignSelf': 'center', 'height': 48};
    tango['stepsIndicator'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot11 = tango;
    tango = 21;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: RoleTierEditScenesModal
        zulu = argFoo;
        var _closure2_slot0 = zulu;
        entity = _closure1_slot11;
        tango = undefined;
        romeo = entity.bind(tango)();
        mike = zulu.modalKey;
        var _closure2_slot1 = mike;
        entity = zulu.steps;
        var _closure2_slot2 = entity;
        zulu = zulu.onClose;
        var _closure2_slot3 = zulu;
        zulu = _closure1_slot5;
        zulu = zulu.bind(tango)();
        verify = _closure1_slot3;
        options = 2;
        zulu = verify.bind(tango)(zulu, options);
        golf = 0;
        report = zulu[golf];
        var _closure2_slot4 = report;
        yankee = 1;
        zulu = zulu[yankee];
        var _closure2_slot5 = zulu;
        zulu = _closure1_slot6;
        zulu = zulu.bind(tango)();
        var _closure2_slot6 = zulu;
        report = _closure1_slot4;
        zulu = report.useState;
        zulu = zulu.bind(report)(golf);
        zulu = verify.bind(tango)(zulu, options);
        offset = zulu[golf];
        zulu = zulu[yankee];
        var _closure2_slot7 = zulu;
        golf = _closure1_slot1;
        foxtrot = _closure1_slot2;
        zulu = 15;
        zulu = foxtrot[zulu];
        zulu = golf.bind(tango)(zulu);
        zulu = zulu.bind(tango)();
        backup = zulu.top;
        options = report.useCallback;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 16;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.popWithKey;
            mike = _closure2_slot1;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = options.bind(report)(mike, zulu);
        var _closure2_slot8 = mike;
        mike = function(argFoo) { // Original name: handleClose
            _fun127098: for(var _fun127098_ip = 0; ; ) switch(_fun127098_ip) {
 0:
                zulu = _closure2_slot3;
                entity = null;
                if(!(entity != zulu)) { _fun127098_ip = 27; continue _fun127098 }
 13:
                tango = _closure2_slot3;
                zulu = undefined;
                entity = argFoo;
                entity = tango.bind(zulu)(entity);
 27:
                zulu = _closure2_slot8;
                entity = undefined;
                zulu = zulu.bind(entity)();
                mike = _closure2_slot6;
                mike = mike.bind(entity)();
                return entity;
            }
        };
        var _closure2_slot9 = mike;
        zulu = report.useMemo;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            zulu = _closure2_slot2;
            mike = zulu.map;
            entity = function(argFoo) {
                _fun127100: for(var _fun127100_ip = 0; ; ) switch(_fun127100_ip) {
 0:
                    mike = argFoo;
                    tango = 'string';
                    zulu = typeof mike;
                    entity = mike;
                    if(!(tango !== zulu)) { _fun127100_ip = 23; continue _fun127100 }
 17:
                    entity = mike.scene;
 23:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        verify = zulu.bind(report)(entity, mike);
        var _closure2_slot10 = verify;
        entity = 17;
        entity = foxtrot[entity];
        mike = golf.bind(tango)(entity);
        entity = function() {
            entity = {};
            golf = _closure1_slot17;
            oscar = _closure2_slot0;
            tango = _closure2_slot9;
            report = undefined;
            tango = golf.bind(report)(oscar, tango);
            entity['screens'] = tango;
            tango = _closure1_slot15;
            zulu = _closure2_slot10;
            mike = _closure2_slot4;
            mike = tango.bind(report)(zulu, mike);
            entity['initialStack'] = mike;
            return entity;
        };
        entity = mike.bind(tango)(entity);
        result = entity.screens;
        output = entity.initialStack;
        zulu = _closure1_slot10;
        mike = _closure1_slot9;
        entity = {};
        kilo = _closure1_slot8;
        echo = _closure1_slot0;
        report = 18;
        report = foxtrot[report];
        report = echo.bind(tango)(report);
        options = report.Navigator;
        report = {};
        report['screens'] = result;
        report['initialRouteStack'] = output;
        sizing = function(argFoo) { // Original name: onWillFocus
            _fun127102: for(var _fun127102_ip = 0; ; ) switch(_fun127102_ip) {
 0:
                entity = argFoo;
                entity = entity.route;
                report = entity.name;
                var _closure3_slot0 = report;
                entity = null;
                if(!(entity != report)) { _fun127102_ip = 77; continue _fun127102 }
 26:
                tango = _closure2_slot5;
                zulu = undefined;
                tango = tango.bind(zulu)(report);
                report = _closure2_slot10;
                tango = report.findIndex;
                mike = function(argFoo) {
                    mike = _closure3_slot0;
                    entity = argFoo;
                    entity = entity === mike;
                    return entity;
                };
                mike = tango.bind(report)(mike);
                tango = 0;
                if(!(mike >= tango)) { _fun127102_ip = 77; continue _fun127102 }
 68:
                entity = _closure2_slot7;
                entity = entity.bind(zulu)(mike);
 77:
                entity = undefined;
                return entity;
            }
        };
        report['onWillFocus'] = sizing;
        sizing = 19;
        output = foxtrot[sizing];
        output = echo.bind(tango)(output);
        result = output.intl;
        output = result.string;
        sizing = foxtrot[sizing];
        sizing = echo.bind(tango)(sizing);
        sizing = sizing.t;
        sizing = sizing.13/7kZ;
        sizing = output.bind(result)(sizing);
        report['headerBackTitle'] = sizing;
        options = kilo.bind(tango)(options, report);
        report = new Array(2);
        report[0] = options;
        options = _closure1_slot8;
        oscar = 20;
        oscar = foxtrot[oscar];
        golf = golf.bind(tango)(oscar);
        oscar = {};
        foxtrot = romeo.stepsIndicator;
        romeo = new Array(2);
        romeo[0] = foxtrot;
        foxtrot = {};
        foxtrot['top'] = backup;
        romeo[1] = foxtrot;
        oscar['style'] = romeo;
        offset = offset + yankee;
        oscar['current'] = offset;
        verify = verify.length;
        oscar['total'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();