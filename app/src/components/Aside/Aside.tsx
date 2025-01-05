import { ISettings } from 'models/Settings';
import styles from './Aside.module.css';

interface IAsideProps {
  settings: ISettings;
  updateSettings: (key: keyof ISettings, value: any) => void;
}

export default function Aside({settings, updateSettings}: IAsideProps) {
  return (
    <aside className={`${styles.bg} block flex-1 w-3/10`}>
        <h3>Settings</h3>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={settings.deleteSrc}
            onChange={(e) => updateSettings('deleteSrc', e.target.checked)}
          />
          <span className="text-sm ml-3">Delete source files after compressing</span>
        </label>
    </aside>
  )
}
