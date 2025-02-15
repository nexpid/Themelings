// app/intl/native/migration.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    mike = function(argFoo) { // Original name: IntlLink
        _fun34214: for(var _fun34214_ip = 0; ; ) switch(_fun34214_ip) {
 0:
            entity = argFoo;
            zulu = entity.target;
            var _closure2_slot0 = zulu;
            report = entity.children;
            options = _closure1_slot3;
            golf = options.useContext;
            verify = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 4;
            oscar = oscar[tango];
            tango = undefined;
            oscar = verify.bind(tango)(oscar);
            oscar = oscar.AccessibilityPreferencesContext;
            oscar = golf.bind(options)(oscar);
            golf = oscar.alwaysShowLinkDecorations;
            oscar = _closure1_slot5;
            oscar = oscar.bind(tango)(golf);
            verify = typeof zulu;
            golf = 'string';
            if(!(golf !== verify)) { _fun34214_ip = 126; continue _fun34214 }
 92:
            options = 'object';
            golf = zulu;
            if(!(options === verify)) { _fun34214_ip = 124; continue _fun34214 }
 103:
            verify = zulu.onClick;
            options = null;
            golf = zulu;
            if(!(options != verify)) { _fun34214_ip = 124; continue _fun34214 }
 118:
            golf = zulu.onClick;
 124:
            _fun34214_ip = 131; continue _fun34214;
 126:
            golf = function() {
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                entity = 5;
                entity = oscar[entity];
                tango = undefined;
                zulu = report.bind(tango)(entity);
                mike = zulu.openURL;
                entity = 6;
                entity = oscar[entity];
                report = report.bind(tango)(entity);
                tango = report.sanitizeUrl;
                entity = _closure2_slot0;
                entity = tango.bind(report)(entity);
                entity = mike.bind(zulu)(entity);
                return entity;
            };
 131:
            zulu = _closure1_slot4;
            mike = _closure1_slot1;
            options = _closure1_slot2;
            entity = 7;
            entity = options[entity];
            mike = mike.bind(tango)(entity);
            entity = {'accessible': true, 'accessibilityRole': 'link'};
            entity['onPress'] = golf;
            oscar = oscar.link;
            entity['style'] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = function(argFoo) {
        _fun34216: for(var _fun34216_ip = 0; ; ) switch(_fun34216_ip) {
 0:
            entity = {};
            mike = {};
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 3;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            zulu = zulu.colors;
            zulu = zulu.TEXT_LINK;
            mike['color'] = zulu;
            zulu = 'none';
            tango = argFoo;
            if(!tango) { _fun34216_ip = 58; continue _fun34216 }
 54:
            zulu = 'underline';
 58:
            mike['textDecorationLine'] = zulu;
            entity['link'] = mike;
            return entity;
        }
    };
    tango = options.bind(verify)(tango);
    var _closure1_slot5 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'intl/native/migration.tsx';
    tango = report.bind(oscar)(tango);
    zulu['IntlLink'] = mike;
    zulu['I18nLinkComponent'] = mike;
    return entity;
})();