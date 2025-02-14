// app/modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    foxtrot = 1;
    tango = oscar[foxtrot];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot4 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flex': 1, 'alignSelf': 'stretch', 'paddingHorizontal': 16};
    tango['linksContainer'] = verify;
    verify = {};
    offset = 8;
    verify['marginBottom'] = offset;
    yankee = 4;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xs;
    verify['borderRadius'] = backup;
    tango['button'] = verify;
    verify = {'minHeight': 60, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'flex-start', 'backgroundColor': null, 'paddingVertical': 16, 'paddingStart': 16, 'paddingEnd': 8};
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xs;
    verify['borderRadius'] = backup;
    tango['container'] = verify;
    verify = {};
    verify['flex'] = foxtrot;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_4;
    verify['marginRight'] = foxtrot;
    tango['buttonTextContainer'] = verify;
    verify = {};
    foxtrot = 20;
    verify['lineHeight'] = foxtrot;
    tango['buttonText'] = verify;
    verify = {};
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.INTERACTIVE_NORMAL;
    verify['color'] = yankee;
    tango['linkIcon'] = verify;
    verify = {};
    verify['marginBottom'] = offset;
    tango['headerText'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot6 = tango;
    tango = function(argFoo) { // Original name: ExternalLinkItem
        _fun73051: for(var _fun73051_ip = 0; ; ) switch(_fun73051_ip) {
 0:
            entity = argFoo;
            entity = entity.data;
            mike = entity.url;
            var _closure2_slot0 = mike;
            backup = entity.link_text;
            output = entity.link_description;
            mike = entity.is_localized;
            entity = _closure1_slot6;
            report = undefined;
            foxtrot = entity.bind(report)();
            kilo = null;
            entity = null;
            if(!mike) { _fun73051_ip = 420; continue _fun73051 }
 64:
            tango = _closure1_slot4;
            romeo = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 7;
            mike = yankee[mike];
            mike = romeo.bind(report)(mike);
            zulu = mike.PressableHighlight;
            mike = {};
            golf = foxtrot.button;
            mike['style'] = golf;
            golf = 'link';
            mike['accessibilityRole'] = golf;
            oscar = function() { // Original name: onPress
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.openURL;
                mike = _closure2_slot0;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike['onPress'] = oscar;
            options = _closure1_slot5;
            golf = _closure1_slot3;
            oscar = {};
            verify = foxtrot.container;
            oscar['style'] = verify;
            verify = {};
            sizing = foxtrot.buttonTextContainer;
            verify['style'] = sizing;
            result = 5;
            yankee = yankee[result];
            yankee = romeo.bind(report)(yankee);
            romeo = yankee.Text;
            yankee = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            sizing = foxtrot.buttonText;
            yankee['style'] = sizing;
            yankee['children'] = backup;
            romeo = tango.bind(report)(romeo, yankee);
            yankee = new Array(2);
            yankee[0] = romeo;
            backup = kilo != output;
            romeo = null;
            if(!backup) { _fun73051_ip = 286; continue _fun73051 }
 226:
            backup = '';
            romeo = null;
            if(!(backup !== output)) { _fun73051_ip = 286; continue _fun73051 }
 236:
            sizing = _closure1_slot4;
            kilo = _closure1_slot0;
            backup = _closure1_slot2;
            backup = backup[result];
            backup = kilo.bind(report)(backup);
            kilo = backup.Text;
            backup = {'variant': 'text-sm/normal', 'color': 'header-secondary'};
            backup['children'] = output;
            romeo = sizing.bind(report)(kilo, backup);
 286:
            yankee[1] = romeo;
            verify['children'] = yankee;
            yankee = options.bind(report)(golf, verify);
            verify = new Array(2);
            verify[0] = yankee;
            romeo = _closure1_slot4;
            kilo = _closure1_slot1;
            sizing = _closure1_slot2;
            backup = 9;
            offset = sizing[backup];
            yankee = kilo.bind(report)(offset);
            offset = {};
            output = 10;
            output = sizing[output];
            output = kilo.bind(report)(output);
            offset['source'] = output;
            backup = sizing[backup];
            backup = kilo.bind(report)(backup);
            backup = backup.Sizes;
            backup = backup.MEDIUM;
            offset['size'] = backup;
            foxtrot = foxtrot.linkIcon;
            foxtrot = foxtrot.color;
            offset['color'] = foxtrot;
            offset = romeo.bind(report)(yankee, offset);
            verify[1] = offset;
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 420:
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ExternalLinksElement
        _fun73053: for(var _fun73053_ip = 0; ; ) switch(_fun73053_ip) {
 0:
            entity = argFoo;
            verify = entity.elements;
            entity = _closure1_slot6;
            report = undefined;
            romeo = entity.bind(report)();
            entity = null;
            if(!(entity != verify)) { _fun73053_ip = 281; continue _fun73053 }
 33:
            zulu = verify.length;
            mike = 0;
            if(!(mike !== zulu)) { _fun73053_ip = 281; continue _fun73053 }
 47:
            zulu = verify.find;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.data;
                entity = entity.is_localized;
                return entity;
            };
            mike = zulu.bind(verify)(mike);
            if(!(entity != mike)) { _fun73053_ip = 281; continue _fun73053 }
 71:
            zulu = verify.some;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.data;
                entity = entity.is_header_hidden;
                return entity;
            };
            options = zulu.bind(verify)(mike);
            tango = _closure1_slot5;
            zulu = _closure1_slot3;
            mike = {};
            offset = romeo.linksContainer;
            mike['style'] = offset;
            options = !options;
            if(!options) { _fun73053_ip = 240; continue _fun73053 }
 118:
            yankee = _closure1_slot4;
            kilo = _closure1_slot0;
            sizing = _closure1_slot2;
            oscar = 5;
            oscar = sizing[oscar];
            oscar = kilo.bind(report)(oscar);
            offset = oscar.Text;
            oscar = {'style': null, 'variant': 'heading-deprecated-12/extrabold', 'color': 'header-secondary'};
            romeo = romeo.headerText;
            oscar['style'] = romeo;
            romeo = 6;
            foxtrot = sizing[romeo];
            foxtrot = kilo.bind(report)(foxtrot);
            backup = foxtrot.intl;
            foxtrot = backup.string;
            romeo = sizing[romeo];
            romeo = kilo.bind(report)(romeo);
            romeo = romeo.t;
            romeo = romeo.hvVgAQ;
            foxtrot = foxtrot.bind(backup)(romeo);
            romeo = foxtrot.toUpperCase;
            romeo = romeo.bind(foxtrot)();
            oscar['children'] = romeo;
            options = yankee.bind(report)(offset, oscar);
 240:
            oscar = new Array(2);
            oscar[0] = options;
            options = verify.map;
            golf = function(argFoo, argBar) {
                entity = argFoo;
                entity = entity.data;
                report = _closure1_slot4;
                tango = _closure1_slot7;
                zulu = {};
                zulu['data'] = entity;
                entity = global;
                entity = entity.HermesInternal;
                oscar = entity.concat;
                mike = 'external-link-';
                entity = argBar;
                mike = oscar.bind(mike)(entity);
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            golf = options.bind(verify)(golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 281:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();